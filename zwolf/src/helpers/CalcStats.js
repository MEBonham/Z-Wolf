import _ from 'lodash';

import { skillsList } from './GameConstants';

const farmMods = (modsArr, skillRanks={}, levelCheck=null) => {
    let filtModsArr;
    if (levelCheck) {
        filtModsArr = modsArr.filter((modObj) => modObj.level <= levelCheck);
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

export const calcStats = (char) => {
    const result = {};

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

    return result;
}