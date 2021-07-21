import React from 'react';

const Kits = () => {
    return(
        <>
            <section>
                <h2>Brawler</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Athletics Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Fighting Level +1 or Stamina Points Pool +1</li>
                    <li>Vitality Points Pool +4</li>
                    <li>Stamina Points Pool +1</li>
                    <li>Gain a bonus Talent with the [Background] or [Monster] or [Proficiency] tag.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Nature Skill 1 Rank; Primitive Handiwork Talent.</li>
                    <li>A Complication that states the character is illiterate.</li>
                    <li>Athletics Skill 3 Ranks; Brawn Skill 3 Ranks; (Mighty Leap Talent or Steady Climber Talent or Swimmer Talent).</li>
                </ul>
            </section>
            <section>
                <h2>Catfolk</h2>
                <h4>[Ancestry] Kit</h4>
                <p><strong>Prerequisites:</strong> No other [Ancestry] Kits. This should be a character's first Kit.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Gain a "Claw" natural weapon: Range Melee 1; Impact Modifier -3; Slashing Damage; Bleed Number 6.</li>
                    <li>Gain a +1 Ancestry bonus to Reflex saves.</li>
                    <li>Gain a +1 Ancestry bonus to Speed. Boost your Speed Checks whenever you have Exerted. (You can freely Exert in combat with no other benefit, just to activate this ability, if you wish.)</li>
                    <li>Train your Perception or Stealth Skill. If Perception and Stealth are already Trained, you may immediately Retrain one of those Trained Skills.</li>
                    <li><strong>Low-Light Vision:</strong> Treat nonmagical dim lighting as brightly lit.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Athletics 3 Ranks; Catfall Talent.</li>
                    <li>Athletics 3 Ranks; Steady Climber Talent.</li>
                </ul>
            </section>
            <section>
                <h2>Dwarf</h2>
                <h4>[Ancestry] [Core] Kit</h4>
                <p><strong>Prerequisites:</strong> No other [Ancestry] Kits. This should be a character's first Kit.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Gain a +2 Ancestry bonus to Fortitude saves.</li>
                    <li>Boost your saving throws vs. poison and intoxication.</li>
                    <li>If you wear armor that gives you a Speed penalty (heavy armor or chainmail), and you are proficient with that armor, ignore the Speed penalty.</li>
                    <li><strong>Darkvision:</strong> Treat nonmagical darkness as if it were dimly lit.</li>
                    <li><strong>Stability:</strong> Boost your Athletics and Brawn Skill checks to maintain your footing.</li>
                </ul>
                <h4>Drawbacks:</h4>
                <ul>
                    <li>Incur a -1 penalty to your Speed.</li>
                    <li>Incur a -2 penalty to your Glibness skill.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Gadgetry 3 ranks; Artisan Talent (selecting brewing, stonemasonry, or some variety of metalsmithing) or Engineering Talent.</li>
                    <li>Favored Enemy Talent (selecting giants, goblinoids, or orcs).</li>
                    <li>Axe Master Kit or Hammer Master Kit.</li>
                </ul>
            </section>
            <section>
                <h2>Elf</h2>
                <h4>[Ancestry] [Core] Kit</h4>
                <p><strong>Prerequisites:</strong> No other [Ancestry] Kits. This should be a character's first Kit.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Gain a +2 Ancestry bonus to Reflex saves.</li>
                    <li>Gain a +1 Ancestry bonus to Speed.</li>
                    <li>Gain a +1 Ancestry bonus to Spellcraft.</li>
                    <li>Train your Perception Skill. If Perception is already Trained, you may immediately Retrain that Trained Skill.</li>
                    <li>Boost your saving throws vs. [Charm] effects.</li>
                    <li><strong>Low-Light Vision:</strong> Treat nonmagical dim lighting as brightly lit.</li>
                    <li><em>Extended Rest:</em> During an extended rest, you only need be inert for four hours. You can spend the other four hours doing calm activities (such as keeping watch, reading, meditating, or handicrafts).</li>
                </ul>
                <h4>Drawbacks:</h4>
                <ul>
                    <li>Incur a -2 Size penalty to your Brawn skill.</li>
                    <li>Incur a -1 Size penalty to your Armor Value.</li>
                    <li>Incur a -1 Size penalty to the Impact of your weapon attacks.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Martial Training Talent (selecting bows, heavy blades, or light blades).</li>
                    <li>Athletics 4 Ranks; Nature 1 Rank; Steady Climber Talent.</li>
                </ul>
            </section>
            <section>
                <h2>Guardian</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Fighting Level 2.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Fighting Level +1</li>
                    <li>Vitality Points Pool +4</li>
                    <li>Gain a bonus Talent with the [Proficiency] tag.</li>
                    <li><em>Free Action:</em> If a creature you are Pressuring attacks your ally (and you are not also a target of the same attack), gain Momentum.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Base Fortitude Save +3; Hold the Line Talent; a Complication related to your having a protective instinct towards others.</li>
                </ul>
            </section>
            <section>
                <h2>Halfling</h2>
                <h4>[Ancestry] [Core] Kit</h4>
                <p><strong>Prerequisites:</strong> No other [Ancestry] Kits. This should be a character's first Kit.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Gain a +1 Ancestry bonus to Speed.</li>
                    <li>Train your Dexterity skill. If Dexterity is already Trained, you may immediately Retrain that Trained Skill.</li>
                    <li>Boost your saving throws vs. Fear.</li>
                    <li>You are proficient with throwing small rocks (they do not count as improvised weapons for you). Treat them as a One-Handed weapon with an Impact Modifier of -1, Bludgeoning damage, Bleed Number 3, Range: Thrown 15 ft.</li>
                    <li><strong>Small Size:</strong> Gain +1 Size bonuses to Defense saves and Accuracy of weapon attacks. Boost checks where your being smaller than a compared creature is an advantage (e.g. hiding from them).</li>
                </ul>
                <h4>Drawbacks:</h4>
                <ul>
                    <li><strong>Small Size:</strong> Incur a -2 Size penalty to your Brawn skill. Incur -1 Size penalties to Armor Value, Impact of weapon attacks, and Speed. Drag checks where your being smaller than a compared creature is a disadvantage (e.g. maintaining your footing if they push you around).</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Legerdemain Talent.</li>
                    <li>Sling Training Talent.</li>
                </ul>
            </section>
            <section>
                <h2>Human Paragon</h2>
                <h4>[Ancestry] [Core] Kit</h4>
                <p><strong>Prerequisites:</strong> No other [Ancestry] Kits.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Gain a bonus Feat.</li>
                    <li>You start each Adventure with 2 Karma Points instead of 1.</li>
                    <li><strong>Stack 1st-Level Kits:</strong> If you took two Kits at Level 1 that give you non-stacking bonuses to your stats (such as Fighting Level, Caster Level, Coast Number, or VP), those bonuses now stack.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Heroic Surge Feat.</li>
                    <li>Base Willpower Save +4; (Factotum Kit or Magician Kit or Veteran's Grit Feat).</li>
                </ul>
            </section>
            <section>
                <h2>Orc</h2>
                <h4>[Ancestry] [Core] Kit</h4>
                <p><strong>Prerequisites:</strong> No other [Ancestry] Kits. This should be a character's first Kit.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Train your Brawn skill. If Brawn is already Trained, you may immediately Retrain that Trained Skill.</li>
                    <li>Gain a +1 Discipline bonus to the Accuracy of your weapon attacks.</li>
                    <li><strong>Low-Light Vision:</strong> Treat nonmagical dim lighting as brightly lit.</li>
                    <li><strong>Bully:</strong> Boost your skill checks to intimidate creatures who are not of a larger Size Category than your own.</li>
                </ul>
                <h4>Drawbacks:</h4>
                <ul>
                    <li>Incur a -2 penalty to your Glibness skill.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Furious Rage Feat.</li>
                    <li>Brawler Kit or Ruffian Kit or Shaman Kit.</li>
                </ul>
            </section>
            <section>
                <h2>Priest</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Lore of Divinity Talent.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Caster Level +1 or Coast Number +1</li>
                    <li>Vitality Points +2</li>
                    <li>Gain a bonus Talent with the [Ki] or [Seed] tag.</li>
                    <li>You may use your Willpower Save in place of your Spellcraft Check.</li>
                    <li>You may use your Awesome Check in place of your Knowledge Skill to know stuff about your own religion's traditions.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Knowledge Skill 3 Ranks; Healer Talent.</li>
                </ul>
            </section>
            <section>
                <h2>Rogue</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Courtly Manner Talent or Social Intuition Talent or Streetwise Talent.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Coast Number +1</li>
                    <li>Gain a bonus Talent with the [Luck] or [Skill Trick] tag.</li>
                    <li>Train an additional Skill.</li>
                    <li>You may Coast Glibness Skill checks, even under pressure.</li>
                    <li>Gain a Synergy bonus to your Awesome Check, based on Ranks in your Glibness Skill.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Snake-Tongued Talent.</li>
                    <li>Stealth Skill 6 Ranks; Disguises Talent.</li>
                </ul>
            </section>
            <section>
                <h2>Ruffian</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Brawn Skill 2 Ranks; Stealth Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Fighting Level +1</li>
                    <li>Vitality Points Pool +2</li>
                    <li>Gain a bonus Talent with the [Skill Trick] tag.</li>
                    <li>Train an additional Skill.</li>
                    <li><strong>Bully:</strong> Boost your skill checks to intimidate creatures who are not of a larger Size Category than your own.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Streetwise Talent.</li>
                    <li>(Base Fortitude Save +3 or Base Reflex Save +3); Athletics Skill 3 Ranks; Gadgetry Skill 2 Ranks; Sailor Talent.</li>
                </ul>
            </section>
            <section>
                <h2>Shaman</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Nature Skill 2 Ranks; (Lore of Divinity Talent or Lore of Nature Talent).</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Caster Level +1</li>
                    <li>Vitality Points +2</li>
                    <li>Gain a bonus Talent with the [Buff] or [Seed] tag.</li>
                    <li>Gain a Synergy bonus to the Impact of your Spell Attacks, based on Ranks in your Nature Skill.</li>
                </ul>
                <h4>Drawbacks:</h4>
                <p><strong>Wilds' Aversion:</strong> If you wear metallic armor or wield a metallic shield, you suffer a -2 penalty to your Spellcraft Checks and the Accuracy of your spell attacks.</p>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Glibness Skill 2 Ranks; (Warlock Kit or Wizard Kit); Bestow Curse Feat.</li>
                </ul>
            </section>
            <section>
                <h2>Soldier</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Base Fortitude Save +1; Athletics Skill 1 Rank; Brawn Skill 1 Rank; proficiency with a Martial weapon.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Fighting Level +1 or Coast Number +1</li>
                    <li>Vitality Points Pool +4</li>
                    <li>Boost your Knowledge skill checks related to military traditions (including rank hierarchies).</li>
                    <li><strong>Martial Weaponry:</strong> You are proficient with all martial weapons and with light armor. (You may immediately retrain the Light Armor Training Talent if you have it.)</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Stealth Skill 4 Ranks.</li>
                </ul>
            </section>
            <section>
                <h2>Spellblade</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Heroics Check +1; one Feat with the [Spell] tag; Battle-Cast Talent.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Fighting Level +1</li>
                    <li>Caster Level +1</li>
                    <li>Vitality Points +2</li>
                    <li>Gain a bonus Talent with the [Proficiency] or [Seed] tag.</li>
                    <li>When you would lose Concentration due to a Hazard being inflicted on you, you may attempt a TN 15 Willpower Save to cancel that Hazard.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Base Fortitude Save +3; (Mighty Constitution Talent or Steely Focus Talent).</li>
                </ul>
            </section>
            <section>
                <h2>Thief</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Dexterity Skill 1 Rank; Stealth Skill 2 Ranks.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Coast Number +1</li>
                    <li>Gain two bonus Talents with the [Skill Trick] tag.</li>
                    <li>Train an additional Skill.</li>
                    <li>You may Coast Dexterity Skill checks and Stealth Skill checks, even under pressure.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Athletics Skill 4 Ranks; Gadgetry Skill 3 Ranks; Lockpicking Talent; Steady Climber Talent.</li>
                </ul>
            </section>
            <section>
                <h2>Tiny Critter</h2>
                <h4>[Ancestry] [Monster] Kit</h4>
                <p><strong>Prerequisites:</strong> No other [Ancestry] Kits. This should be a character's first Kit.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Gain a "Bite" natural weapon: Range Melee 1; Impact Modifier -1; Piercing Damage; Bleed Number 5.</li>
                    <li>Gain a +1 Ancestry bonus to Speed.</li>
                    <li>Gain a +2 Ancestry bonus to Dexterity.</li>
                    <li><strong>Tiny Size:</strong> Gain +2 Size bonuses to Defense saves and Accuracy of weapon attacks. Boost checks where your being smaller than a compared creature is an advantage (e.g. hiding from them).</li>
                    <li><strong>Low-Light Vision:</strong> Treat nonmagical dim lighting as brightly lit.</li>
                    <li><strong>Stability:</strong> Boost your Athletics and Brawn Skill checks to maintain your footing.</li>
                </ul>
                <h4>Drawbacks:</h4>
                <ul>
                    <li><strong>Beast Type:</strong> Cannot speak normal languages. Illiterate. Limited in the Charisma, Dexterity, Gadgetry, Glibness, and Knowledge Skills.</li>
                    <li><strong>Tiny Size:</strong> Incur a -4 Size penalty to your Brawn skill. Incur -2 Size penalties to Armor Value, Impact of weapon attacks, and Speed. Drag checks where your being smaller than a compared creature is a disadvantage (e.g. maintaining your footing if they push you around).</li>
                    <li>Incur -2 penalties to your Gadgetry, Glibness, and Knowledge Skills.</li>
                </ul>
            </section>
            <section>
                <h2>Truespeaker</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Glibness Skill 1 Rank; Knowledge Skill 2 Ranks; Speak Language Talent.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Caster Level +1</li>
                    <li>Gain a bonus Talent with the [Seed] or [Skill Trick] tag.</li>
                    <li>Gain a Synergy bonus to the Accuracy of your Spell Attacks, based on Ranks in your Glibness Skill.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Word of Power Talent.</li>
                    <li>Glibness Skill 5 Ranks; Performer Talent.</li>
                    <li>Knowledge Skill 9 Ranks; Lore of History Talent; have used a [Creation] Ritual.</li>
                </ul>
            </section>
            <section>
                <h2>Wizard</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Knowledge Skill 1 Rank; Lore of Arcana Talent; must be literate.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Caster Level +1</li>
                    <li>Gain a bonus Talent with the [Buff] or [Seed] tag.</li>
                    <li>Gain a Synergy bonus to your Spellcraft Check, based on Ranks in your Knowledge Skill.</li>
                    <li>When you finish a Long Rest, you may immediately re-train one of your Feats. Both the Feat you lose and the Feat you gain must have the [Spell] tag and must be inscribed in a tome you have access to during your Long Rest.</li>
                </ul>
                <h4>Drawbacks:</h4>
                <p><strong>Armor Aversion:</strong> If you wear armor or wield a shield, you suffer a penalty to your Spellcraft Checks and the Accuracy of your spell attacks. This penalty is equal to the armor's and shield's penalties to Athletics, Dexterity, and Stealth skills, plus 1 if you are wearing armor, plus 1 if you wield a shield.</p>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Gadgetry Skill 3 Ranks; (Shaman Kit or Tinker Kit); Alchemy Talent.</li>
                </ul>
            </section>
        </>
    );
}
export default Kits;