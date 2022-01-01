export const skillsList = [
    "Athletics",
    "Brawn",
    "Charisma",
    "Dexterity",
    "Gadgetry",
    "Glibness",
    "Insight",
    "Knowledge",
    "Nature",
    "Perception",
    "Stealth"
];

export const modTypes = [
    "Ancestry",
    "Base",
    "Deflection",
    "Discipline",
    "Encumbrance",
    "Item",
    "Size",
    "Synergy"
];

export const attackTypes = [
    "Spell",
    "Vim",
    "Weapon"
];

export const verbTypes = [
    "Attack",
    "Dominant",
    "Maneuver",
    "Action",
    "Reaction",
    "Free",
    "Short Rest",
    "Extended Rest",
    "Special",
    "Passive"
];

export const modTargets = [
    ...skillsList,
    "av",
    "awesome",
    "casterLevel",
    "coastNum",
    "defSave",
    "fightingLevel",
    "fortSave",
    "heroics",
    "kpDefault",
    "kpMax",
    "numFeats",
    "numKits",
    "numLanguages",
    "numTalents",
    "numTrainedSkills",
    "refSave",
    "resVal",
    "sizeCategory",
    "spMax",
    "speed",
    "spellAcc",
    "spellImpactMod",
    "spellcraft",
    "vimAcc",
    "vimImpactMod",
    "vpMax",
    "willSave",
    "wpnAcc",
    "wpnImpactMod"
];

export const statuses = {
    Momentum: false,
    Suffused: false,
    Exerted: false,
    Wounded: false,
    Dying: false,
    Dropped: false
};

export const sizeCatNames = {
    "-4": "Fine",
    "-3": "Diminutive",
    "-2": "Tiny",
    "-1": "Small",
    "0": "Medium",
    "1": "Large",
    "2": "Huge",
    "3": "Gargantuan",
    "4": "Colossal"
}

export const kitTags = [
    "Ancestry",
    "Core",
    "Epic",
    "Heritage",
    "Monster"
];

export const featTags = [
    "Boost",
    "Buff",
    "Core",
    "Counter",
    "Grace",
    "Ki",
    "Luck",
    "Monster",
    "Spell",
    "Strike"
];

export const talentTags = [
    "Background",
    "Buff",
    "Core",
    "Epic",
    "Grace",
    "Ki",
    "Luck",
    "Monster",
    "Proficiency",
    "Seed",
    "Skill Trick"
];

export const itemTags = [
    "General Gear",
    "Armor",
    "Clothing",
    "Container",
    "Shield",
    "Tome",
    "Weapon",
    "Magic"
];

export const seedsList = [
    "Acid",
    "Air",
    "Animal",
    "Cold",
    "Earth",
    "Fire",
    "Illusory",
    "Lightning",
    "Luck",
    "Mind",
    "Plant",
    "Radiant",
    "Shadow",
    "Water",
    "Weave"
];

export const armorGirths = [
    "Light",
    "Heavy"
];

export const weaponGrades = [
    "Simple",
    "Martial",
    "Exotic"
];

export const weaponHefts = [
    "Light",
    "One-Handed",
    "Versatile",
    "Two-Handed"
];

export const weaponCategories = [
    "Axe",
    "Bow",
    "Club",
    "Crossbow",
    "Flail",
    "Heavy Blade",
    "Light Blade",
    "Polearm",
    "Spear",
    "Other"
];

export const BULK_ALLOWANCE = 19;
export const BRAWN_CARRY_FACTOR = 2;

export const charFrame = {
    baseSkillRanks: {},
    bestSave: "fort",
    complications: [],
    epithet: "Adventurer",
    equipment: [],
    examplePc: false,
    feats: [],
    kits: [],
    kp: 1,
    languages: ["Common"],
    level: 2,
    mods: [
        {
            choices: {},
            level: 1,
            mag: "special",
            origin: "1A",
            overlap: "0",
            primary: true,
            skill: "Brawn",
            target: "av",
            type: "Synergy"
        },
        {
            choices: {},
            level: 1,
            mag: "special",
            origin: "1B",
            overlap: "1",
            primary: false,
            skill: "Brawn",
            target: "wpnImpactMod",
            type: "Synergy"
        },
        {
            choices: {},
            level: 1,
            mag: 1,
            origin: "1C",
            overlap: "0",
            target: "wpnImpactMod",
            type: "Untyped",
            condition: "attackSituation_twoHanded"
        }
    ],
    relatedSlugs: [],
    sp: 4,
    status: { ...statuses, versatile2H: false },
    talents: [],
    trainedSkills: [
        {
            origin: "1A"
        },
        {
            origin: "1B"
        }
    ],
    verbs: [],
    vp: 12,
    wealth: 14
};