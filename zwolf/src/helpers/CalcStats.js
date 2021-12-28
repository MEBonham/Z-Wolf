import _ from 'lodash';

import { BRAWN_CARRY_FACTOR, BULK_ALLOWANCE, skillsList } from './GameConstants';
import { isInSomething, ultimateLoc } from './EquipOrg';

const farmMods = (modsArr, skillRanks={}, levelCheck=null) => {
    let filtModsArr;
    if (levelCheck) {
        filtModsArr = modsArr.filter((modObj) => !modObj.level || (modObj.level <= levelCheck));
    } else {
        filtModsArr = modsArr;
    }
    const typeTotals = {
        Untyped: 0
    };
    filtModsArr.forEach((modObj) => {
        let mag = 0;
        if (modObj.type === "Synergy") {
            const ranks = _.get(skillRanks, modObj.skill, 0);
            if (_.get(modObj, "primary", false)) {
                if (ranks > 6) {
                    mag = 2;
                } else if (ranks > 2) {
                    mag = 1;
                }
            } else {
                if (ranks > 8) {
                    mag = 2;
                } else if (ranks > 4) {
                    mag = 1;
                }
            }
        } else {
            mag = modObj.mag;
        }
        if (modObj.type === "Untyped") {
            typeTotals.Untyped += mag;
        } else if (typeTotals[modObj.type] && mag < 0) {
            typeTotals[modObj.type] += mag;
        } else if (typeTotals[modObj.type] && typeTotals[modObj.type] >= mag) {
            typeTotals[modObj.type] += 0;
        } else {
            typeTotals[modObj.type] = mag;
        }
    });
    let total = 0;
    Object.keys(typeTotals).forEach((type) => {
        total += typeTotals[type];
    })
    return total;
}

const calcTotalBulk = (equipArr) => {
    let total = 0;
    equipArr.forEach((itemObj) => {
        if (ultimateLoc(itemObj, equipArr) === "notCarried") {
            total += 0;
        } else if (itemObj.tags.includes("Clothing") && itemObj.location === "equipped") {
            total += 0;
        } else if (itemObj.tags.includes("Armor") && itemObj.location === "equipped") {
            total += 0;
        } else if (!isInSomething(itemObj)) {
            total += parseFloat(itemObj.bulk) * itemObj.quantity;
            let subItems = equipArr.filter((subObj) => subObj.location === itemObj.id);
            let subLen = 0;
            while (subItems.length > subLen) {
                subLen = subItems.length;
                let additional = [];
                subItems.forEach((subObj) => {
                    additional = [
                        ...additional,
                        ...equipArr.filter((sub) => sub.location === subObj.id)
                    ];
                });
                subItems = [
                    ...subItems,
                    ...additional
                ];
            }
            let subTotal = 0;
            subItems.forEach((subObj) => {
                subTotal += parseFloat(subObj.bulk) * subObj.quantity;
            });
            const containerReduction = itemObj.maxReduceBulk ? _.clamp(Math.floor(subTotal / 2), 0, itemObj.maxReduceBulk) : 0;
            total += subTotal - containerReduction;
        }
    });
    return total;
}

export const calcStats = (char) => {
    let result = {};

    const skillRanks = {};
    let flattenSelections = [];
    Object.keys(char.baseSkillRanks).filter((i) => i <= char.level).forEach((i) => {
        flattenSelections = [
            ...flattenSelections,
            ...(char.baseSkillRanks[i])
        ];
    });
    skillsList.forEach((skillName) => {
        skillRanks[skillName] = flattenSelections.filter((skill) => skill === skillName).length
            + 2 * (char.trainedSkills.filter((skillObj) => skillObj.origin === "1A" || skillObj.origin === "1B" || skillObj.level <= char.level)
                    .filter((skillObj) => skillObj.skill === skillName).length ? 1 : 0);
    });

    result.heroics = Math.max(0, Math.min(4, Math.floor(char.level / 2)));
    result.awesome = 4 + char.level + farmMods(char.mods.filter((modObj) => modObj.target === "awesome"), skillRanks, char.level);
    result.fightingLevel = result.heroics + farmMods(char.mods.filter((modObj) => modObj.target === "fightingLevel"), skillRanks, char.level);
    result.casterLevel = result.heroics + farmMods(char.mods.filter((modObj) => modObj.target === "casterLevel"), skillRanks, char.level);
    result.coastNum = 4 + farmMods(char.mods.filter((modObj) => modObj.target === "coastNum"), skillRanks, char.level);

    result.sizeCategory = farmMods(char.mods.filter((modObj) => modObj.target === "sizeCategory"), skillRanks, char.level);

    result.numKits = Math.min(6, 1 + Math.ceil(char.level / 2));
    result.numFeats = Math.min(8, char.level) + farmMods(char.mods.filter((modObj) => modObj.target === "numFeats"), skillRanks, char.level);
    result.numTalents = 3 + char.level + farmMods(char.mods.filter((modObj) => modObj.target === "numTalents"), skillRanks, char.level);

    result.baseFort = result.heroics + ((char.bestSave === "fort") ? 2 :
        farmMods(char.mods.filter((modObj) => modObj.target === "fortSave" && modObj.type === "Base"), {}, char.level));
    result.baseRef = result.heroics + ((char.bestSave === "ref") ? 2 :
        farmMods(char.mods.filter((modObj) => modObj.target === "refSave" && modObj.type === "Base"), {}, char.level));
    result.baseWill = result.heroics + ((char.bestSave === "will") ? 2 :
        farmMods(char.mods.filter((modObj) => modObj.target === "willSave" && modObj.type === "Base"), {}, char.level));
    result.defSave = result.heroics + farmMods(char.mods.filter((modObj) => modObj.target === "defSave"), skillRanks, char.level);
    result.fortSave = result.baseFort + farmMods(char.mods.filter((modObj) =>
        modObj.target === "fortSave" && modObj.type !== "Base"
    ), skillRanks, char.level);
    result.refSave = result.baseRef + farmMods(char.mods.filter((modObj) =>
        modObj.target === "refSave" && modObj.type !== "Base"
    ), skillRanks, char.level);
    result.willSave = result.baseWill + farmMods(char.mods.filter((modObj) =>
        modObj.target === "willSave" && modObj.type !== "Base"
    ), skillRanks, char.level);

    result.vpMax = 5 + (char.level * 2) + result.baseFort + farmMods(char.mods.filter((modObj) => modObj.target === "vpMax"), skillRanks, char.level);
    result.spMax = 4 + farmMods(char.mods.filter((modObj) => modObj.target === "spMax"), skillRanks, char.level);
    result.kpMax = 2 + farmMods(char.mods.filter((modObj) => modObj.target === "kpMax"), skillRanks, char.level);
    
    skillsList.forEach((skillName) => {
        result[skillName] = skillRanks[skillName] + farmMods(char.mods.filter((modObj) => modObj.target === skillName), skillRanks, char.level);
    });

    result.wpnAcc = 6 + result.fightingLevel + farmMods(char.mods.filter((modObj) => modObj.target === "wpnAcc"), skillRanks, char.level);
    result.wpnImpactMod = farmMods(char.mods.filter((modObj) => modObj.target === "wpnImpactMod"), skillRanks, char.level);
    result.spellAcc = 6 + result.casterLevel + farmMods(char.mods.filter((modObj) => modObj.target === "spellAcc"), skillRanks, char.level);
    result.spellImpactMod = farmMods(char.mods.filter((modObj) => modObj.target === "spellImpactMod"), skillRanks, char.level);
    result.vimAcc = 6 + result.baseFort + farmMods(char.mods.filter((modObj) => modObj.target === "vimAcc"), skillRanks, char.level);
    result.vimImpactMod = farmMods(char.mods.filter((modObj) => modObj.target === "vimImpactMod"), skillRanks, char.level);

    result.av = 3 + farmMods(char.mods.filter((modObj) => modObj.target === "av"), skillRanks, char.level);
    result.resVal = 4 + Math.max(result.av, char.level) + farmMods(char.mods.filter((modObj) => modObj.target === "resVal"), skillRanks, char.level);
    result.speed = farmMods(char.mods.filter((modObj) => modObj.target === "speed"), skillRanks, char.level);
    result.spellcraft = result.casterLevel + farmMods(char.mods.filter((modObj) => modObj.target === "spellcraft"), skillRanks, char.level);
    result.numTrainedSkills = 2 + farmMods(char.mods.filter((modObj) => modObj.target === "numTrainedSkills"), skillRanks, char.level);
    result.numLanguages = 2 + farmMods(char.mods.filter((modObj) => modObj.target === "numLanguages"), skillRanks, char.level);
    result.kpDefault = 1 + farmMods(char.mods.filter((modObj) => modObj.target === "kpDefault"), skillRanks, char.level);

    result.totalEffBulk = calcTotalBulk(char.equipment);
    result.capacity = BRAWN_CARRY_FACTOR * result.Brawn + BULK_ALLOWANCE;
    result.Athletics -= Math.max(0, result.totalEffBulk - result.capacity);
    result.Dexterity -= Math.max(0, result.totalEffBulk - result.capacity);
    result.Stealth -= Math.max(0, result.totalEffBulk - result.capacity);
    result.speed -= Math.max(0, result.totalEffBulk - result.capacity);

    return result;
}

export const expunge = (block, badId) => {
    let tempArr = [];
    ["feats", "talents", "mods", "verbs", "trainedSkills"].forEach((type) => {
        tempArr = tempArr.concat(block[type].filter((obj) => obj.origin === badId));
    });
    if (!tempArr.length) {
        return block;
    }
    let tempBlock = {
        ...block,
        mods: block.mods.filter((obj) => obj.origin !== badId),
        verbs: block.verbs.filter((obj) => obj.origin !== badId),
        trainedSkills: block.trainedSkills.filter((obj) => obj.origin !== badId)
    };
    block.feats.filter((obj) => obj.origin === badId).forEach((featObj) => {
        tempBlock = expunge(tempBlock, featObj.id);
    });
    block.talents.filter((obj) => obj.origin === badId).forEach((talentObj) => {
        tempBlock = expunge(tempBlock, talentObj.id);
    });
    return tempBlock;
}