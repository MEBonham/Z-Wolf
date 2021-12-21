import _ from 'lodash';

import { skillsList } from './GameConstants';

const farmMods = (modsArr, skillRanks={}) => {
    const typeTotals = {
        Untyped: 0
    };
    modsArr.forEach((modObj) => {
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
    let flatSelections = [];
    Object.keys(char.baseSkillRanks).forEach((i) => {
        flatSelections = [
            ...flatSelections,
            ...(char.baseSkillRanks[i])
        ];
    });
    skillsList.forEach((skillName) => {
        skillRanks[skillName] = flatSelections.filter((skill) => skill === skillName).length
            + 2 * (char.trainedSkills.filter((skillObj) => skillObj.skill === skillName).length ? 1 : 0);
    });

    result.heroics = Math.max(0, Math.min(4, Math.floor(char.level / 2)));
    result.awesome = 4 + char.level + farmMods(char.mods.filter((modObj) => modObj.target === "awesome"), skillRanks);
    result.fightingLevel = result.heroics + farmMods(char.mods.filter((modObj) => modObj.target === "fightingLevel"), skillRanks);
    result.casterLevel = result.heroics + farmMods(char.mods.filter((modObj) => modObj.target === "casterLevel"), skillRanks);
    result.coastNum = 4 + farmMods(char.mods.filter((modObj) => modObj.target === "coastNum"), skillRanks);

    result.sizeCategory = farmMods(char.mods.filter((modObj) => modObj.target === "sizeCategory"), skillRanks);

    result.numKits = Math.min(6, 1 + Math.ceil(char.level / 2));
    result.numFeats = Math.min(8, char.level) + farmMods(char.mods.filter((modObj) => modObj.target === "numFeats"), skillRanks);
    result.numTalents = 3 + char.level + farmMods(char.mods.filter((modObj) => modObj.target === "numTalents"), skillRanks);

    result.baseFort = result.heroics + ((char.bestSave === "fort") ? 2 :
        farmMods(char.mods.filter((modObj) => modObj.target === "fortSave" && modObj.type === "Base")));
    result.baseRef = result.heroics + ((char.bestSave === "ref") ? 2 :
        farmMods(char.mods.filter((modObj) => modObj.target === "refSave" && modObj.type === "Base")));
    result.baseWill = result.heroics + ((char.bestSave === "will") ? 2 :
        farmMods(char.mods.filter((modObj) => modObj.target === "willSave" && modObj.type === "Base")));
    result.defSave = result.heroics + farmMods(char.mods.filter((modObj) => modObj.target === "defSave"), skillRanks);
    result.fortSave = result.baseFort + farmMods(char.mods.filter((modObj) =>
        modObj.target === "fortSave" && modObj.type !== "Base"
    ), skillRanks);
    result.refSave = result.baseRef + farmMods(char.mods.filter((modObj) =>
        modObj.target === "refSave" && modObj.type !== "Base"
    ), skillRanks);
    result.willSave = result.baseWill + farmMods(char.mods.filter((modObj) =>
        modObj.target === "willSave" && modObj.type !== "Base"
    ), skillRanks);

    result.vpMax = 5 + (char.level * 2) + result.baseFort + farmMods(char.mods.filter((modObj) => modObj.target === "vpMax"), skillRanks);
    result.spMax = 4 + farmMods(char.mods.filter((modObj) => modObj.target === "spMax"), skillRanks);
    result.kpMax = 2 + farmMods(char.mods.filter((modObj) => modObj.target === "kpMax"), skillRanks);
    
    skillsList.forEach((skillName) => {
        result[skillName] = skillRanks[skillName] + farmMods(char.mods.filter((modObj) => modObj.target === skillName), skillRanks);
    });

    result.wpnAcc = 6 + result.fightingLevel + farmMods(char.mods.filter((modObj) => modObj.target === "wpnAcc"), skillRanks);
    result.wpnImpactMod = farmMods(char.mods.filter((modObj) => modObj.target === "wpnImpactMod"), skillRanks);
    result.spellAcc = 6 + result.casterLevel + farmMods(char.mods.filter((modObj) => modObj.target === "spellAcc"), skillRanks);
    result.spellImpactMod = farmMods(char.mods.filter((modObj) => modObj.target === "spellImpactMod"), skillRanks);
    result.vimAcc = 6 + result.baseFort + farmMods(char.mods.filter((modObj) => modObj.target === "vimAcc"), skillRanks);
    result.vimImpactMod = farmMods(char.mods.filter((modObj) => modObj.target === "vimImpactMod"), skillRanks);

    result.av = 3 + farmMods(char.mods.filter((modObj) => modObj.target === "av"), skillRanks);
    result.resVal = 4 + Math.max(result.av, char.level) + farmMods(char.mods.filter((modObj) => modObj.target === "resVal"), skillRanks);
    result.speed = farmMods(char.mods.filter((modObj) => modObj.target === "speed"), skillRanks);
    result.spellcraft = result.casterLevel + farmMods(char.mods.filter((modObj) => modObj.target === "spellcraft"), skillRanks);
    result.numTrainedSkills = 2 + farmMods(char.mods.filter((modObj) => modObj.target === "numTrainedSkills"), skillRanks);
    result.numLanguages = 2 + farmMods(char.mods.filter((modObj) => modObj.target === "numLanguages"), skillRanks);
    result.kpDefault = 1 + farmMods(char.mods.filter((modObj) => modObj.target === "kpDefault"), skillRanks);

    return result;
}