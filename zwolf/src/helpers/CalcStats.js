import _ from 'lodash';

import { BRAWN_CARRY_FACTOR, BULK_ALLOWANCE, skillsList } from './GameConstants';
import { isInSomething, ultimateLoc } from './EquipOrg';

const farmMods = (modsArr, skillRanks={}, levelCheck=null, curBlock={}) => {
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
        // Check if the mod is conditional:
        if (!modObj.choices) {
            mag = 0;
        } else if (modObj.condition && !checkCondition(modObj.condition, curBlock, modObj.target)[0]) {
            mag = 0;
        } else if (modObj.condition && mag === "special") {
            mag = checkCondition(modObj.condition, curBlock, modObj.target)[1];
        }
        // Check if the mod stacks with other mods:
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
            let containerReduction = itemObj.maxReduceBulk ? _.clamp(Math.floor(subTotal / 2), 0, itemObj.maxReduceBulk) : 0;
            if (itemObj.noBulkCarried) {
                containerReduction = subTotal;
            }
            total += subTotal - containerReduction;
        }
    });
    return total;
}

export const checkCondition = (condition, charBlock, target=null) => {
    let mod = 0;
    switch (condition) {
        case "arcaneAversion":
            const armor = charBlock.equipment.filter((itemObj) => 
                itemObj.tags.includes("Armor") &&
                itemObj.location === "equipped" &&
                !itemObj.tags.includes("specialWizardCompatible")
            );
            const shield = charBlock.equipment.filter((itemObj) => 
                itemObj.tags.includes("Shield") &&
                itemObj.location === "equipped" &&
                !itemObj.tags.includes("specialWizardCompatible")
            );
            if (armor.length > 0) {
                mod -= 1;
                armor.forEach((armorWornPiece) => {
                    const armorId = armorWornPiece.id;
                    charBlock.mods.filter((modObj) => 
                        modObj.origin === armorId &&
                        modObj.type === "Encumbrance" &&
                        mod.Target === "Dexterity"
                    ).forEach((modObj) => {
                        mod += modObj.mag;
                    });
                });
            }
            if (shield.length > 0) {
                mod -= 1;
                armor.forEach((shieldWornPiece) => {
                    const shieldId = shieldWornPiece.id;
                    charBlock.mods.filter((modObj) => 
                        modObj.origin === shieldId &&
                        modObj.type === "Encumbrance" &&
                        mod.Target === "Dexterity"
                    ).forEach((modObj) => {
                        mod += modObj.mag;
                    });
                });
            }
            if (mod < 0) {
                return [true, mod];
            } else {
                return [false, null];
            }
        case "lightningAgility":
            if (charBlock.bestSave !== "ref") {
                return [true, (charBlock.level > 4 ? 2 : 1)];
            } else {
                return [false, null];
            }
        case "lightningAgilityVerb":
            if (charBlock.bestSave === "ref") {
                return true;
            } else {
                return false;
            }
        case "mageArmorConsuming":
            if (target === "willSave") {
                return [true, -1];
            }
            if (target === "av") {
                const mageArmorConsuming = charBlock.mods.filter((modObj) =>
                    modObj.condition === "mageArmorConsuming" &&
                    modObj.target === "willSave" &&
                    modObj.choices
                ).length;
                if (mageArmorConsuming) {
                    if (charBlock.stats.casterLevel > 8) {
                        return [true, 5];
                    } else if (charBlock.stats.casterLevel > 4) {
                        return [true, 4];
                    } else if (charBlock.stats.casterLevel > 1) {
                        return [true, 3];
                    } else {
                        return [true, 2];
                    }
                } else {
                    return [false, null];
                }
            }
            return [false, null];
        case "metalArmorWorn":
            const metalArmorWorn = charBlock.equipment.filter((itemObj) =>
                itemObj.tags.includes("Armor") &&
                itemObj.location === "equipped" &&
                itemObj.girth === "Heavy" &&
                !itemObj.tags.includes("specialNonmetallic")
            );
            if (metalArmorWorn.length > 0) return [true, null];
            return [false, null];
        case "mightyConstitution":
            if (charBlock.bestSave !== "fort") {
                return [true, (charBlock.level > 4 ? 2 : 1)];
            } else {
                return [false, null];
            }
        case "mightyConstitutionVerb":
            if (charBlock.bestSave === "fort") {
                return true;
            } else {
                return false;
            }
        case "steelyFocus":
            if (charBlock.bestSave !== "will") {
                return [true, (charBlock.level > 4 ? 2 : 1)];
            } else {
                return [false, null];
            }
        case "steelyFocusVerb":
            if (charBlock.bestSave === "will") {
                return true;
            } else {
                return false;
            }
        case "wieldHeavyBlade":
            if (charBlock.equipment.filter((itemObj) => itemObj.location === "equipped" && itemObj.categories && itemObj.categories.includes("Heavy Blade"))) {
                return [true, 1];
            } else {
                return [false, null];
            }
        default:
            return [false, null];
    }
}

export const calcStats = (char) => {
    let result = {};
    let modsTweak = char.mods;

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
    result.skillRanks = skillRanks;

    result.heroics = Math.max(0, Math.min(4, Math.floor(char.level / 2)));
    result.awesome = 4 + char.level + farmMods(modsTweak.filter((modObj) => modObj.target === "awesome"), skillRanks, char.level, char);
    result.fightingLevel = result.heroics + farmMods(modsTweak.filter((modObj) => modObj.target === "fightingLevel"), skillRanks, char.level, char);
    result.casterLevel = result.heroics + farmMods(modsTweak.filter((modObj) => modObj.target === "casterLevel"), skillRanks, char.level, char);
    result.coastNum = 4 + farmMods(modsTweak.filter((modObj) => modObj.target === "coastNum"), skillRanks, char.level, char);
    const kit1 = char.kits.filter((kitObj) => kitObj.origin === "1A")[0] ?? null;
    const kit2 = char.kits.filter((kitObj) => kitObj.origin === "1")[0] ?? null;
    const paragonFlag = (char.kits.filter((kitObj) => kitObj.name === "Human Paragon").length > 0);
    ["fightingLevel", "casterLevel", "coastNum"].forEach((stat) => {
        if (kit1 && kit1.id && kit2 && kit2.id && !paragonFlag &&
            modsTweak.filter((modObj) => modObj.origin === kit1.id && modObj.target === stat && (modObj.choices === undefined || modObj.choices === true)).length > 0 &&
            modsTweak.filter((modObj) => modObj.origin === kit2.id && modObj.target === stat && (modObj.choices === undefined || modObj.choices === true)).length > 0
        ) {
            result[stat] -= 1;
        }
    });

    result.sizeCategory = farmMods(modsTweak.filter((modObj) => modObj.target === "sizeCategory"), skillRanks, char.level, char);
    let latestSizeChange = 0;
    modsTweak.filter((modObj) => modObj.target === "sizeCategory")
        .forEach((modObj) => {
            if (modObj.level > latestSizeChange) {
                latestSizeChange = modObj.level;
            }
        });
    modsTweak = [
        ...modsTweak.filter((modObj) => modObj.origin !== "size"),
        {
            choices: {},
            level: latestSizeChange,
            mag: (-1) * result.sizeCategory,
            origin: "size",
            overlap: "0",
            target: "defSave",
            type: "Size"
        },
        {
            choices: {},
            level: latestSizeChange,
            mag: (-1) * result.sizeCategory,
            origin: "size",
            overlap: "1",
            target: "wpnAcc",
            type: "Size"
        },
        {
            choices: {},
            level: latestSizeChange,
            mag: 2 * result.sizeCategory,
            origin: "size",
            overlap: "2",
            target: "Brawn",
            type: "Size"
        },
        {
            choices: {},
            level: latestSizeChange,
            mag: result.sizeCategory,
            origin: "size",
            overlap: "3",
            target: "av",
            type: "Size"
        },
        {
            choices: {},
            level: latestSizeChange,
            mag: result.sizeCategory,
            origin: "size",
            overlap: "4",
            target: "wpnImpactMod",
            type: "Size"
        },
        {
            choices: {},
            level: latestSizeChange,
            mag: result.sizeCategory,
            origin: "size",
            overlap: "5",
            target: "speed",
            type: "Size"
        }
    ]

    result.numKits = Math.min(6, 1 + Math.ceil(char.level / 2));
    result.numFeats = Math.min(8, char.level) + farmMods(modsTweak.filter((modObj) => modObj.target === "numFeats"), skillRanks, char.level, char);
    result.numTalents = 3 + char.level + farmMods(modsTweak.filter((modObj) => modObj.target === "numTalents"), skillRanks, char.level, char);

    result.baseFort = result.heroics + ((char.bestSave === "fort") ? 2 :
        farmMods(modsTweak.filter((modObj) => modObj.target === "fortSave" && modObj.type === "Base"), {}, char.level, char));
    result.baseRef = result.heroics + ((char.bestSave === "ref") ? 2 :
        farmMods(modsTweak.filter((modObj) => modObj.target === "refSave" && modObj.type === "Base"), {}, char.level, char));
    result.baseWill = result.heroics + ((char.bestSave === "will") ? 2 :
        farmMods(modsTweak.filter((modObj) => modObj.target === "willSave" && modObj.type === "Base"), {}, char.level, char));
    result.defSave = result.heroics + farmMods(modsTweak.filter((modObj) => modObj.target === "defSave"), skillRanks, char.level, char);
    result.fortSave = result.baseFort + farmMods(modsTweak.filter((modObj) =>
        modObj.target === "fortSave" && modObj.type !== "Base"
    ), skillRanks, char.level, char);
    result.refSave = result.baseRef + farmMods(modsTweak.filter((modObj) =>
        modObj.target === "refSave" && modObj.type !== "Base"
    ), skillRanks, char.level, char);
    result.willSave = result.baseWill + farmMods(modsTweak.filter((modObj) =>
        modObj.target === "willSave" && modObj.type !== "Base"
    ), skillRanks, char.level, char);

    result.vpMax = 5 + (char.level * 2) + result.baseFort + farmMods(modsTweak.filter((modObj) => modObj.target === "vpMax"), skillRanks, char.level, char);
    if (kit1 && kit1.id && kit2 && kit2.id && !paragonFlag) {
        const vpMods1 = modsTweak.filter((modObj) => modObj.origin === kit1.id && modObj.target === "vpMax");
        const vpMods2 = modsTweak.filter((modObj) => modObj.origin === kit2.id && modObj.target === "vpMax");
        if (vpMods1.length > 0 && vpMods2.length > 0) {
            result.vpMax -= Math.min(vpMods1[0].mag, vpMods2[0].mag);
        }
    }
    result.spMax = 4 + farmMods(modsTweak.filter((modObj) => modObj.target === "spMax"), skillRanks, char.level, char);
    result.kpMax = 2 + farmMods(modsTweak.filter((modObj) => modObj.target === "kpMax"), skillRanks, char.level, char);
    
    skillsList.forEach((skillName) => {
        result[skillName] = skillRanks[skillName] + farmMods(modsTweak.filter((modObj) => modObj.target === skillName), skillRanks, char.level, char);
    });

    result.wpnAcc = 6 + result.fightingLevel + farmMods(modsTweak.filter((modObj) => modObj.target === "wpnAcc"), skillRanks, char.level, char);
    result.wpnImpactMod = farmMods(modsTweak.filter((modObj) => modObj.target === "wpnImpactMod"), skillRanks, char.level, char);
    result.spellAcc = 6 + result.casterLevel + farmMods(modsTweak.filter((modObj) => modObj.target === "spellAcc"), skillRanks, char.level, char);
    result.spellImpactMod = farmMods(modsTweak.filter((modObj) => modObj.target === "spellImpactMod"), skillRanks, char.level, char);
    result.vimAcc = 6 + result.baseFort + farmMods(modsTweak.filter((modObj) => modObj.target === "vimAcc"), skillRanks, char.level, char);
    result.vimImpactMod = farmMods(modsTweak.filter((modObj) => modObj.target === "vimImpactMod"), skillRanks, char.level, char);

    result.av = 3 + farmMods(modsTweak.filter((modObj) => modObj.target === "av"), skillRanks, char.level, char);
    result.resVal = 4 + Math.max(result.av, char.level) + farmMods(modsTweak.filter((modObj) => modObj.target === "resVal"), skillRanks, char.level, char);
    result.speed = farmMods(modsTweak.filter((modObj) => modObj.target === "speed"), skillRanks, char.level, char);
    result.spellcraft = result.casterLevel + farmMods(modsTweak.filter((modObj) => modObj.target === "spellcraft"), skillRanks, char.level, char);
    result.numTrainedSkills = 2 + farmMods(modsTweak.filter((modObj) => modObj.target === "numTrainedSkills"), skillRanks, char.level, char);
    result.numLanguages = 2 + farmMods(modsTweak.filter((modObj) => modObj.target === "numLanguages"), skillRanks, char.level, char);
    result.kpDefault = 1 + farmMods(modsTweak.filter((modObj) => modObj.target === "kpDefault"), skillRanks, char.level, char);

    result.totalEffBulk = calcTotalBulk(char.equipment) + Math.floor(char.wealth / 10);
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