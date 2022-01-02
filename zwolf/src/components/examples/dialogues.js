import { RECOMMENDED_STARTING_WEALTH } from "../../helpers/GameConstants";

export const chapterOrder = [
    "meetthecrew", "creatingRobry"
];

export const dialogues = {
    meetthecrew: [
        {
            speaker: "title",
            text: `Meet the Crew`
        },
        {
            speaker: null,
            text: `The friendly playgroup here will help you learn to play Z-Wolf through their examples:`
        },
        {
            speaker: "kelani",
            text: `Kelani is the GM of the playgroup. She's thinking she wants to run an adventure in a swampy, voodoo-heavy setting, like Creole Louisiana with a bit of Jamaica mixed in.`
        },
        {
            speaker: "tim",
            text: `Tim is a little bit of a shy player, but he's the best listener and puzzle-solver. He wants to really embrace the Creole-ish setting, so he's going to play a voodoo witch-doctor character.`
        },
        {
            speaker: "megan",
            text: `Megan is an impulsive, enthusiastic player who is good at getting Tim to participate. She knows she wants to be a melee warrior in this campaign, and wants to focus mainly on hitting things really hard.`
        },
        {
            speaker: "jasmine",
            text: `Jasmine is the most experienced Z-Wolf player, an expert in the rules, and is also sometimes called upon to reign in Megan. She wants to focus on playing a skilled character who also carries the party's driving motivation.`
        },
        {
            speaker: "pedro",
            text: `Pedro is the newcomer to the group and to Z-Wolf. He asks a lot of questions about how the game works. He doesn't know much about what character he wants, but he has played other RPGs a bit, and wants to see how Z-Wolf does at portraying a character who can both physically fight and use magic.`
        }
    ],
    creatingRobry: [
        {
            speaker: "title",
            text: `Creating Robry`
        },
        {
            speaker: null,
            text: `Since Pedro is new, Kelani starts with him. She figures this will give him the most room to figure out what character he wants, without having to worry yet about what the other players' characters are like. She has decided to start the campaign with the recommended Level 2 characters. She will use the site to build Pedro's character for him, so that he can get used to the more complicated parts of the interface gradually. Being familiar with the system herself, she knows how to build a character without following the steps in Character Creation in their precise order.`
        },
        {
            speaker: null,
            text: `Keep in mind that the rules for Character Creation in Z-Wolf are NOT simple, unless you follow a Pre-Built Character outline, which Pedro doesn't want to do since he's eager to learn Z-Wolf better. Z-Wolf attempts to be very streamlined when actually playing the game, but Character Creation is an involved mini-game unto itself, since players who like that are the audience it caters to.`
        },
        {
            speaker: "kelani",
            text: `"OK, Pedro! I'll work with you first. What kind of character are you imagining playing?"`
        },
        {
            speaker: "pedro",
            text: `"I'm not really sure, but maybe someone who can use magic and also fight with a sword?"`
        },
        {
            speaker: "kelani",
            text: `"We can definitely work with that. A versatile concept like that would be best as a Human, at least at low levels. What else? Any ideas what role you have in the community where the adventure starts?"`
        },
        {
            speaker: "pedro",
            text: `"Yeah I'm fine with playing a Human! And ... maybe a prince or something? I'll make up a name, too ... how about Robry?"`
        },
        {
            speaker: "kelani",
            text: `Hmmm, well this town is not exactly a place where a lot of royalty hang out, but ... I kind of like the idea that you could be local nobility, from a family that effectively rules the area because of their wealth."`
        },
        {
            speaker: "pedro",
            text: `"OK, that sounds neat!"`
        },
        {
            speaker: "kelani",
            text: `"So as a Human, you can pick two Kits at first level freely. One of them could be Human Paragon, but it might fit your concept better if you pick one warrior-type Kit and one spellcaster-type Kit."`
        },
        {
            speaker: null,
            text: `Kelani decides that, if Robry is supposed to be a spellcaster at all, it's probably important for his Best Save to be Willpower, even though tough warriors sometimes pick Fortitude.`
        },
        {
            speaker: null,
            text: `She wants to stick to the Core set of special abilities for Pedro, unless he requests something specific, so he doesn't get overwhelmed with choices. She reviews the Core Kits that are available at Level 1 and increase a character's Fighting Level: Brawler, Ruffian, Scout, and Soldier.`
        },
        {
            speaker: "kelani",
            text: `"Do you want to be formally trained as a warrior? Or more self-taught and rough-and-tumble?"`
        },
        {
            speaker: "pedro",
            text: `"I think formal training makes sense with being local nobility or whatever."`
        },
        {
            speaker: null,
            text: `Kelani marks down that Robry's first Kit will be Soldier, with the Fighting Level +1 option. She looks at Soldier's prerequisites and marks down 1 Rank each of Athletics and Brawn, and also knows that the Martial Training talent will be necessary to get proficiency with a Martial-grade weapon. After checking what kind of sword Pedro had in mind (an Arming Sword, in Z-Wolf terms), she chooses Martial Training (Heavy Blades) as his first Talent.`
        },
        {
            speaker: null,
            text: `Next, she turns to Robry's spellcasting Kit. She knows the Core choices that are available at Level 1: Priest, Shaman, Truespeaker, Warlock, and Wizard.`
        },
        {
            speaker: "kelani",
            text: `"So what kind of source are you imagining for Robry? Does he get his power from the gods, or nature, or a deal with a dark entity? Or is he more scholarly, or just has a knack for speaking the Language of Creation or otherwise making things happen with magic words?"`
        },
        {
            speaker: "pedro",
            text: `"Oooh, I really like the sound of that last one! I think he's a little bit of a rebel, and uses his clever tongue to get out of scrapes with his rich family."`
        },
        {
            speaker: null,
            text: `Kelani marks down the Truespeaker Kit, then looks towards its prerequisites. She picks Speak Language as Robry's second Talent, and Knowledge as one of his Trained Skills so that it will have 2 Ranks even at Level 1. Only 1 Rank of Glibness is required for the Kit, but since it fits well with Pedro's concept and also will give a Synergy Bonus eventually, Kelani goes ahead and Trains Glibness as well as taking a normal Rank at each Level in it.`
        },
        {
            speaker: "kelani",
            text: `"As a Level 2 character without the Human Paragon Kit, you'll get two Feats, including any spells you want to be able to cast. Do you want two spells, or one spell and one more warrior-ish ability?"`
        },
        {
            speaker: "pedro",
            text: `"Let's keep things balanced with one of each."`
        },
        {
            speaker: "kelani",
            text: `"OK. As your spell, I kind of recommend Energy Strike; it's particularly good for warrior-casters, since it uses magic to enhance a weapon attack with fire, or acid, or lightning, or cold, or something."`
        },
        {
            speaker: "pedro",
            text: `"Sounds great! Oooh, let's go with acid!"`
        },
        {
            speaker: null,
            text: `The prerequisites for Energy Strike are already basically taken care of: Truespeaker grants a Caster Level +1 bonus, and a bonus Talent that can be the Acid Seed, allowing Robry to cast the spell to add Acid to his weapon attack.`
        },
        {
            speaker: null,
            text: `Next Kelani reviews Core Feats that are available by Level 2 and warrior-ish. There are a few choices, such as Dazing Strike, Flurry Attack, Cleave, and Expert Parry, and the latter two are even particularly good for a Heavy Blade wielder; this is looking to be a choice with too many good options until Kelani notices a somewhat unusual option that particularly fits with something Pedro said earlier.`
        },
        {
            speaker: "kelani",
            text: `"OK, what do you think about the Battle Banter Feat? Your Kits don't let you take it at Level 1, but anyone can take it at Level 2, and it would let you capitalize in combat on being a clever talker. And it can enhance your Energy Strikes."`
        },
        {
            speaker: "pedro",
            text: `(Looks at Feat) "I guess that sounds all right, although I'm not really sure what it does mechanically."`
        },
        {
            speaker: "kelani",
            text: `"Well, it is a little hard to explain all at once, since Momentum is a condition that can do a lot of things in different situations. But each turn in combat, you're likely to have one Action that you're not using to move or attack, and this Feat lets you use that action to banter with someone you're about to attack. If they can't resist your silver tongue, this lets you take away their Momentum or gain it yourself. And although you don't have any special ways to use Momentum yet, you can at least use it to cancel when a particularly strong attack would do something like Wound Robry."`
        },
        {
            speaker: "pedro",
            text: `"That does sound cool."`
        },
        {
            speaker: "kelani",
            text: `"Let's go with it, I think it'll make your character pretty unique! OK, that leaves Talents and some more Skill Ranks. Most characters want to start with either Light Armor Training or Mage Armor, for a bit of protection, but Soldiers are kind of an exception; they get light armor proficiency for free, and nothing prevents a Truespeaker from wearing armor. So unless you particularly want to spend a Talent on magic armor ..."`
        },
        {
            speaker: "pedro",
            text: `"Should I?"`
        },
        {
            speaker: "kelani",
            text: `"That's actually pretty debatable, Mage Armor would get you better protection at higher levels at the cost of a Willpower penalty. Personally, I tend to find the protection of light armor good enough for characters that aren't heavily focused on being a dedicated tank."`
        },
        {
            speaker: "pedro",
            text: `"OK, I'll trust you on that."`
        },
        {
            speaker: "kelani",
            text: `"That leaves you with three more Talents. Let's take Windfall to represent your wealthy family, that will give you more Wealth to start out with, and warrior-mages pretty much always want to take Battle-Cast at Level 2 because it's a prerequisite for the Level 3 Spellblade Kit. That leaves one 'free' Talent slot. Maybe you can use that to express what Robry did with his life before becoming an adventurer?"`
        },
        {
            speaker: "pedro",
            text: `"Well, I think he was kind of a rich dandy, he didn't have a productive trade or anything. Maybe, since he's a little rebellious, it could be a roguish Talent like pickpocketing or something?"`
        },
        {
            speaker: "kelani",
            text: `"That's fun!"`
        },
        {
            speaker: null,
            text: `Kelani notes down Legerdemain as Robry's final Talent. It doesn't have prerequisites, but keys off his Dexterity Skill, at least until he gets 4 Ranks of Dexterity. Kelani considers swapping a Trained Skill to Dexterity, but Knowledge is actually required to be Trained for Truespeaker and Speak Language, and Glibness seems more important to Robry's character concept than Dexterity, so she just takes two normal Ranks in Dexterity (one at each Level).`
        },
        {
            speaker: "kelani",
            text: `"Now your main remaining choices are 6 more Skill Ranks, Complications, and Equipment. Here, look at what your Skills look like so far and tell me what else you want to invest in. I suggest another Rank of Brawn at least; it's not a Trained Skill for you, but as any sort of warrior character, you probably want to at least max out normal Ranks in it, since it will eventually give you bonuses to how tough you are and how hard your sword hits."`
        },
        {
            speaker: null,
            text: `Pedro asks some questions about what the eleven different Skills mean, and then says that he doesn't want to be super great at Knowledge, as Robry's kind of a slacker academically. Besides Trained Skills Knowledge and Glibness, he can't go over 2 Ranks in any Skill at this Level, and kind of wants to be a jack-of-all-trades anyway. He takes the recommended second Rank of Brawn, and then puts his five remaining Ranks into Athletics (at Level 2, since he already took it at Level 1), Gadgetry, Nature, Perception, and Stealth.`
        },
        {
            speaker: null,
            text: `Robry's wealthy family and roguish, rebellious nature are good for at least a few Complications. Pedro decides that he's rebellious because he's still youthful enough to not be sure who he is, and puts "Motivation - Finding Himself" as his first Complication. Then he adds "Black Sheep" (indicating that his ruling family isn't happy with his choices) and "Robin Hood Complex" (he figures he can put his penchant for stealing money to noble purposes).`
        },
        {
            speaker: null,
            text: `For equipment, Kelani starts Robry out with ${RECOMMENDED_STARTING_WEALTH + 4} Wealth to represent a standard start plus his Windfall Talent, and buys the "standard" Adventuring Bundle: Explorer's Outfit (to wear), Backpack, Pouch, Dagger, Waterskin, Mess Kit, Tinderbox, Trowel, four Torches, three days of Rations, Bedroll, and 50-ft Manila Rope. Then she has him purchase an Arming Sword and Leather Armor. That would be a good start for most characters, but since Robry has the Brawn to carry a few more things, and all that stuff hardly made a dent in his elite Wealth (he's down to 14), she has him buy a Signet Ring, a Fancy Outfit, and a Shortbow, Quiver, and 20 Arrows.`
        },
        {
            speaker: null,
            text: `That about completes the character, just a few minor things to tidy up. Kelani and Pedro check whether Robry qualifies for any of the Archetypes of his two Kits (hint: he doesn't, so his Maximum Karma Pool remains at 2). And he gets to pick two more Languages to know, one by default and one from his Speak Language Talent. Pedro picks Aquan and Goblin, and adds them via the form at the bottom of the Configure Tab. He adjusts his Vitality Points to match their maximum value, organizes his Inventory with items in an order he likes (with some in the Backpack and Pouch), and calls it good!`
        }
    ]
};