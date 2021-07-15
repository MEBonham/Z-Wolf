import React from 'react';

const Kits = () => {
    return(
        <>
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
                    <li><strong>Stability:</strong> Boost your Athletics and Brawn skill checks to maintain your footing.</li>
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
                    <li>Train your Perception skill. If Perception is already Trained, you may immediately Retrain that Trained Skill.</li>
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
                <h2>Halfling</h2>
                <h4>[Ancestry] [Core] Kit</h4>
                <p><strong>Prerequisites:</strong> No other [Ancestry] Kits. This should be a character's first Kit.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Gain a +1 Ancestry bonus to Speed.</li>
                    <li>Train your Dexterity skill. If Dexterity is already Trained, you may immediately Retrain that Trained Skill.</li>
                    <li>Boost your saving throws vs. Fear.</li>
                    <li>You are proficient with throwing small rocks (they do not count as improvised weapons for you). Treat it as a One-Handed weapon with an Impact Modifier of -1, Bludgeoning damage, Bleed Number 3, Range: Thrown 15 ft.</li>
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
                    <li><strong>Bully:</strong> Boost your skill checks to intimidate creatures who are not a larger Size Category than you.</li>
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
                <h2>Soldier</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Base Fortitude Save +1; Athletics Skill 1 Rank; Brawn Skill 1 Rank; proficiency with a Martial weapon.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Fighting Level +1 or Coast Number +1</li>
                    <li>Vitality Points Pool +4</li>
                    <li>Boost your Knowledge skill checks related to military traditions (including rank hierarchies).</li>
                    <li><strong>Martial Weaponry:</strong> You are proficient with all martial weapons and with light armor. (You may immediately retrain the Light Armor Proficiency Talent if you have it.)</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Stealth Skill 4 Ranks.</li>
                </ul>
            </section>
            <section>
                <h2>Wizard</h2>
                <h4>[Core] Kit</h4>
                <p><strong>Prerequisites:</strong> Lore of Arcana Talent; must be literate.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Caster Level +1</li>
                    <li>Gain a bonus Talent with the [Buff] or [Seed] tag.</li>
                    <li>Gain a Synergy bonus to your Willpower Save, based on Ranks in your Knowledge Skill.</li>
                    <li>When you finish a Long Rest, you may immediately re-train one of your Feats. Both the Feat you lose and the Feat you gain must have the [Spell] tag and must be inscribed in a tome you have access to during your Long Rest.</li>
                </ul>
                <h4>Drawbacks:</h4>
                <ul>
                    <li><strong>Armor Aversion:</strong> If you wear armor or wield a shield, you suffer a penalty to your Spellcraft Checks and the Accuracy of your spell attacks. This penalty is equal to the armor's and shield's penalties to Athletics, Dexterity, and Stealth skills, plus 1 if you are wearing armor, plus 1 if you wield a shield.</li>
                </ul>
                <h4>Archetypes:</h4>
                <ul>
                    <li>Gadgetry Skill 3 Ranks; (Shaman Kit or Tinker Kit); Alchemy Talent.</li>
                </ul>
            </section>
        </>
    );
}
export default Kits;