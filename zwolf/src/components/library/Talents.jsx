import React from 'react';

const Talents = () => {
    return(
        <>
            <section>
                <h2>Acid Seed</h2>
                <h4>[Core] [Seed] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <p>As an Action, you can enable yourself to cast your Spells using the Acid Seed. This lasts until you activate another Seed of magic or become unconscious.</p>
            </section>
            <section>
                <h2>Artisan</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> see table.</p>
                <h4>Benefits:</h4>
                <p>You know a discipline of artisanship, as described on one row of the table below. (You can take this Talent multiple times to select multiple rows of the table.) The table will indicate one or two key Skills for your discipline. You can use the worst of these skills to earn additional Wealth during downtime. You can also use one of these skills (GM's discretion, or the worst of them if unsure), Uncapped, to attempt tasks matching the discipline's description.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Discipline</th>
                            <th>Description of Tasks</th>
                            <th>Key Skill(s)</th>
                            <th>Prerequisite</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Armorer</td>
                            <td>Crafting armor and shields.</td>
                            <td>Gadgetry, Brawn</td>
                            <td>Artisan Talent (blacksmith)</td>
                        </tr>
                        <tr>
                            <td>Blacksmith</td>
                            <td>Metalsmithing with iron (or other nonprecious, common metals).</td>
                            <td>Gadgetry, Brawn</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Bookbinder</td>
                            <td>Crafting books. (Note that the accessibility of printing technology in your campaign setting may have a serious impact on how long bookbinding tasks can take.)</td>
                            <td>Gadgetry, Knowledge</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Brewer</td>
                            <td>Crafting alcoholic beverages.</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Carpenter</td>
                            <td>Crafting items of wood (not bows, crossbows, arrows, or bolts).</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Chandler</td>
                            <td>Crafting candles, other wax products, and soap.</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Cobbler</td>
                            <td>Crafting shoes.</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Cook</td>
                            <td>Crafting food.</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Finesmith</td>
                            <td>Crafting items of precious metals, including gold, silver, bronze, and pewter.</td>
                            <td>Gadgetry, Dexterity</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Fletcher</td>
                            <td>Crafting bows, crossbows, arrows, and bolts.</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Glazier</td>
                            <td>Crafting items of glass.</td>
                            <td>Gadgetry, Dexterity</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Jeweler</td>
                            <td>Crafting items of gemstones.</td>
                            <td>Gadgetry, Perception</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Leatherworker</td>
                            <td>Crafting items of leather (not shoes).</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Locksmith</td>
                            <td>Crafting items of fine machinery, e.g. locks or clockwork.</td>
                            <td>Gadgetry, Dexterity</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Painter</td>
                            <td>Crafting paintings.</td>
                            <td>Gadgetry, Dexterity</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Potter</td>
                            <td>Crafting items of clay or ceramics.</td>
                            <td>Gadgetry, Dexterity</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Shipwright</td>
                            <td>Crafting sailing vehicles or components of them.</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Stonemason</td>
                            <td>Crafting items of stone, including structures.</td>
                            <td>Gadgetry, Brawn</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Tailor</td>
                            <td>Crafting clothing.</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Tanner</td>
                            <td>Crafting leather or items of taxidermy.</td>
                            <td>Gadgetry, Nature</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Weaponsmith</td>
                            <td>Crafting weapons (not bows or crossbows).</td>
                            <td>Gadgetry, Brawn</td>
                            <td>Artisan Talent (blacksmith)</td>
                        </tr>
                        <tr>
                            <td>Weaver</td>
                            <td>Crafting cloth, rope, or items of cloth (not clothing).</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Wheelwright</td>
                            <td>Crafting land vehicles or components of them.</td>
                            <td>Gadgetry</td>
                            <td>none</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Aura Sight</h2>
                <h4>[Buff] [Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <h4>Benefits:</h4>
                <p>As a [Dominant] Action, you can enable yourself to see magical auras up to 60 ft away as long as you maintain Concentration. This does not help you find magical things that would be hidden from your view (e.g. a creature successfully using the Stealth skill while wearing magic items), and illusionary magic that creates the appearance of a nonmagical object includes masking its magical aura from this ability.</p>
                <p>Once you can see a magical aura, Knowledge Skill checks can be used to attempt to discern the magic's function, at least in general categories.</p>
            </section>
            <section>
                <h2>Battle-Cast</h2>
                <h4>[Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Heroics Check +1; one Feat with the [Spell] tag.</p>
                <h4>Benefits:</h4>
                <p>When your saving throw against an Opportunity Attack (provoked by your spellcasting) succeeds, you Resist the attack's effects. You can use your Willpower Save in place of your Defense Save against such an attack.</p>
            </section>
            <section>
                <h2>Bestride</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Athletics Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <p>You can Coast Athletics and Nature Skill checks related to riding a mount, even under pressure. (This includes checks to control a mount in combat, or to avoid being dismounted.)</p>
            </section>
            <section>
                <h2>Cantrips</h2>
                <h4>[Buff] [Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1; Dexterity Skill 1 Rank; two Talents with the [Seed] tag.</p>
                <h4>Benefits:</h4>
                <p>As a [Dominant] Action, you can create a minor display of magic, such as a flash of light of a certain color, a clap of dramatic noise, or a translucent handheld-sized illusion floating above your palm. The GM may allow you to come up with other effects of similar magnitude to these. The most common mechanical benefit of these tricks is to let you use your Spellcraft Check in place of a skill check to impress an audience, especially if the performance is of a sort based on misdirection and flourishes.</p>
                <p>Ongoing changes to an object made by Cantrips (such as moderately altering their temperature or taste) can last about an hour.</p>
            </section>
            <section>
                <h2>Cold Seed</h2>
                <h4>[Core] [Seed] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <p>As an Action, you can enable yourself to cast your Spells using the Cold Seed. This lasts until you activate another Seed of magic or become unconscious.</p>
            </section>
            <section>
                <h2>Courtly Manner</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Glibness Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <p>You can use your Glibness Skill (Uncapped) to make a first impression on aristocrats or nobles. (These people are an insular group, so making a first impression on them is normally Capped.)</p>
                <p>For purposes of Coasting, your skill checks to navigate social situations are not considered "under pressure" merely because of interacting with someone of lofty societal status. You can Coast such skill checks unless you are "under pressure" in some other way.</p>
            </section>
            <section>
                <h2>Engineering</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Knowledge Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <p>You can use the worst of your Gadgetry and Knowledge Skills to earn additional Wealth during downtime. You can also use one of these skills (GM's discretion, or the worst of them if unsure), Uncapped, to analyze or craft structures or larger items of machinery (e.g. siege weapons).</p>
            </section>
            <section>
                <h2>Farmer</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <p>You can use your Nature Skill to earn additional Wealth during downtime. You can also use your Nature skill, Uncapped, to farm crops or handle common domesticated animals.</p>
            </section>
            <section>
                <h2>Filthy Squalor</h2>
                <h4>[Monster] Talent</h4>
                <p><strong>Prerequisites:</strong> Bite natural weapon.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Boost your Fortitude Saves vs. Filth Fever disease or starvation.</li>
                    <li>A creature taking a rest after being hit (or critted) by your Bite natural weapon must make a Fortitude Save or contract the Filth Fever Disease. The TN of this saving throw is 6 + your Base Fortitude Save bonus.</li>
                </ul>
            </section>
            <section>
                <h2>Fire Seed</h2>
                <h4>[Core] [Seed] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <p>As an Action, you can enable yourself to cast your Spells using the Fire Seed. This lasts until you activate another Seed of magic or become unconscious.</p>
            </section>
            <section>
                <h2>Haggler</h2>
                <h4>[Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Glibness Skill 1 Rank; (Gadgetry Skill 2 Ranks or Knowledge Skill 3 Ranks or Streetwise Talent).</p>
                <h4>Benefits:</h4>
                <p>When you roll Wealth rolls to buy or sell something, you may change one d6 that rolled 1-4 to a success instead.</p>
            </section>
            <section>
                <h2>Healer</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Your Knowledge Skill checks to provide medical care are Uncapped, and can be Coasted. (Normally, this is a Capped activity that cannot be Coasted.)</li>
                    <li>If you have at least 3 Ranks of Knowledge Skill, you can use your Nature Skill in place of your Knowledge Skill to provide medical care.</li>
                </ul>
            </section>
            <section>
                <h2>Hold the Line</h2>
                <h4>[Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Fighting Level 2.</p>
                <h4>Benefits:</h4>
                <p>Your Opportunity Attacks, if provoked by the target's movement, deal +1d6 Impact.</p>
            </section>
            <section>
                <h2>Imbued Lantern</h2>
                <h4>[Buff] [Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <h4>Benefits:</h4>
                <p>As a [Dominant] Action, you can cause a touched Tiny or smaller object to radiate light, illuminating a 20-ft radius in bright light and a further 20-ft radius in dim light.</p>
                <p>The illuminating property lasts for about an hour, or until you use this ability on another object or dismiss the effect as an Action.</p>
                <p>If you try to touch an object held or worn by a hostile creature, the intended target can make a Defense Save as if opposing your Unarmed Strike attack. On a successful Save, you fail to alight the intended object.</p>
            </section>
            <section>
                <h2>Keen Smell</h2>
                <h4>Talent</h4>
                <p><strong>Prerequisites:</strong> Perception Skill 1 Rank; (Orc Kit or Beast Type trait or Giant Type trait).</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Boost your Perception Skill checks to notice or locate things with a strong or distinctive scent.</li>
                    <li>You may use your Perception Skill in place of your Nature Skill to track creatures, using their scent instead of visual cues.</li>
                </ul>
            </section>
            <section>
                <h2>Legerdemain</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5 or Dexterity Skill 4 Ranks.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>When you lift carried items off a victim's person discretely, the target's TN to promptly notice the theft is equal to your Dexterity check result.</li>
                    <li>If you have at least 4 ranks of Dexterity, you may use your Glibness skill in place of your Dexterity skill to steal items off a victim's person.</li>
                    <li>When you perform acts of "stage magic," you can coast your Dexterity checks for the sleight of hand involved.</li>
                </ul>
                <h4>Normal:</h4>
                <p>You can use your Dexterity skill (Uncapped) to pick a pocket or otherwise lift an item, but the Perception TN for the victim to promptly notice the theft is only 6.</p>
            </section>
            <section>
                <h2>Light Armor Training</h2>
                <h4>[Core] [Proficiency] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <p>You are proficient with light armor (and chainmail).</p>
                <h4>Normal:</h4>
                <p>Wearing light armor nonproficiently incurs a -2 penalty to attack Accuracy and a -1 penalty to Speed Checks. Wearing chainmail nonproficiently incurs a -4 penalty to attack Accuracy and a -2 penalty to Speed Checks.</p>
            </section>
            <section>
                <h2>Lightning Seed</h2>
                <h4>[Core] [Seed] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <p>As an Action, you can enable yourself to cast your Spells using the Lightning Seed. This lasts until you activate another Seed of magic or become unconscious.</p>
            </section>
            <section>
                <h2>Lockpicking</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5 or Dexterity Skill 3 Ranks.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Your Gadgetry Skill checks to pick locks are Uncapped, and can be Coasted. (Normally, this is a Capped activity that cannot be Coasted.)</li>
                    <li>If you have at least 4 Ranks of Gadgetry Skill, you can use your Dexterity Skill in place of your Gadgetry Skill to pick locks.</li>
                </ul>
            </section>
            <section>
                <h2>Lore of Arcana</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Knowledge Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>You can make Knowledge Skill checks (Uncapped) about the workings of magic, an esoteric subject that is normally Capped.</li>
                    <li>You can Coast Knowledge Skill checks about the workings of magic.</li>
                    <li>You can perform Rituals with the [Arcane] tag, as long as you meet their other requirements.</li>
                </ul>
            </section>
            <section>
                <h2>Lore of Divinity</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>You can Coast Knowledge Skill checks about religions, cosmology, and extraplanar beings associated with religion (e.g. gods, angels, demons).</li>
                    <li>You can perform Rituals with the [Divine] tag, as long as you meet their other requirements.</li>
                </ul>
            </section>
            <section>
                <h2>Mage Armor</h2>
                <h4>[Buff] [Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1; one Feat with the [Spell] tag.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Gain a +2 Item bonus to your Armor Value.</li>
                    <li>As part of an Extended Rest, you can activate or deactivate the armor's <strong>Consuming Mode</strong>. This mode incurs a -1 penalty to your Willpower Save, but increases the Armor Value bonus depending on your Caster Level: +3 at Caster Level 2-4, +4 at Caster Level 5-8, or +5 at Caster Level 9.</li>
                </ul>
            </section>
            <section>
                <h2>Martial Training</h2>
                <h4>[Core] [Proficiency] Talent</h4>
                <p><strong>Prerequisites:</strong> Select one Category of weapons (Axes, Bows, Clubs, Crossbows, Flails, Heavy Blades, Light Blades, Polearms, or Spears). (You can take this Talent multiple times to select multiple Categories.</p>
                <h4>Benefits:</h4>
                <p>You are proficient with Martial-grade weapons of the selected Category. (If a Martial weapon has more than one Category, you only need one of them in order to be proficient.)</p>
            </section>
            <section>
                <h2>Performer</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5 or Glibness Skill 3 Ranks.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Your skill checks to impress an audience are Uncapped. (For example, you can use Athletics to dance; Dexterity to juggle or perform sleight-of-hand; Glibness to orate or perform comedy; or Nature to demonstrate animal handling stunts. Brawn, Gadgetry, and Knowledge are more situational, but may also apply at the GM's discretion.) Normally, these are sufficiently different from normal uses of Skills that the check is Capped.</li>
                    <li>You can Coast skill checks to perform with a musical instrument you have proficiency with, even under pressure.</li>
                    <li>You can use your Glibness Skill (or other skills, at the GM's discretion) to earn additional Wealth during downtime.</li>
                </ul>
            </section>
            <section>
                <h2>Radiant Seed</h2>
                <h4>[Core] [Seed] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <p>As an Action, you can enable yourself to cast your Spells using the Radiant Seed. This lasts until you activate another Seed of magic or become unconscious.</p>
            </section>
            <section>
                <h2>Runted</h2>
                <h4>[Monster] Talent</h4>
                <p><strong>Prerequisites:</strong> This Talent can only be taken at Level 1.</p>
                <h4>Benefits:</h4>
                <p>Gain a +1 Untyped bonus to Speed.</p>
                <p><strong>Size Category -1:</strong> Gain +1 Size bonuses to Defense saves and Accuracy of weapon attacks. Boost checks where your being smaller than a compared creature is an advantage (e.g. hiding from them).</p>
                <h4>Drawbacks:</h4>
                <p><strong>Size Category -1:</strong> Incur a -2 Size penalty to your Brawn skill. Incur -1 Size penalties to Armor Value, Impact of weapon attacks, and Speed. Drag checks where your being smaller than a compared creature is a disadvantage (e.g. maintaining your footing if they push you around).</p>
            </section>
            <section>
                <h2>Sailor</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Athletics Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>You can use your Gadgetry Skill (Uncapped) to handle watercraft.</li>
                    <li>You can Coast Gadgetry Skill checks to tie knots, even under pressure.</li>
                    <li>You can use your Knowledge Skill (Uncapped) to navigate long distances over water using the stars.</li>
                    <li>You can use your Glibness Skill (Uncapped) to make a first impression on other sailors. (Sailors are an insular group, so making a first impression on them is normally Capped.)</li>
                    <li>Boost your Athletics Skill checks to balance on a rocking surface.</li>
                    <li>Boost your Fortitude Saves vs. seasickness.</li>
                </ul>
            </section>
            <section>
                <h2>Shield Training</h2>
                <h4>[Core] [Proficiency] Talent</h4>
                <p><strong>Prerequisites:</strong> Fighting Level 1.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>You are proficient at wielding a shield.</li>
                    <li>While wielding a Full Shield in one hand, the Accuracy of your melee weapon attacks with a weapon in another hand gains a +1 bonus.</li>
                </ul>
                <h4>Normal</h4>
                <p>Wielding a shield nonproficiently incurs a -2 penalty to Athletics, Dexterity, and Stealth checks, as well as Spellcraft checks and spell attack Accuracy. Nonproficient shield bash attacks have an Impact modifier of -3, rather than the Impact Modifier shown on the Shields table.</p>
            </section>
            <section>
                <h2>Steady Climber</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> none.</p>
                <h4>Benefits:</h4>
                <p>You can Coast Athletics Skill checks related to climbing, even under pressure.</p>
            </section>
            <section>
                <h2>Streetwise</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Glibness Skill 1 Rank or Stealth Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>If you have inhabited a neighborhood for at least a year, you can use your Knowledge skill (uncapped) to provide information about the area. You can use your Heroics Check instead, if that is better.</li>
                    <li>You can Coast Glibness Skill checks to collect rumors in a social setting, even under pressure.</li>
                    <li>You can Coast Insight or Knowledge Skill checks, as applicable, to play skill-based card or dice games. (You can also Coast Dexterity or Glibness Skill checks to cheat at almost any card or dice game, although a Perception check that matches your skill check can still catch you cheating.)</li>
                </ul>
            </section>
            <section>
                <h2>Swimmer</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Base Fortitude Save +1 or Athletics Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <p>You can Coast Athletics Skill checks related to swimming, even under pressure (e.g. in dangerous water conditions).</p>
            </section>
            <section>
                <h2>Trapfinder</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5; Gadgetry Skill 1 Rank; Perception Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>You can Coast Gadgetry Skill checks to disable traps. This is normally considered a high-pressure activity.</li>
                    <li>You can use your Gadgetry Skill (Uncapped) to disable magical traps, as if they were nonmagical.</li>
                    <li>You can Coast Perception Checks to detect the presence of traps, even under pressure. (You are therefore assumed to be using this ability always, unless the GM rules you are particularly distracted as a Complication Trigger.)</li>
                </ul>
            </section>
            <section>
                <h2>Urchin</h2>
                <h4>[Background] [Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Streetwise Talent. This Talent can only be taken at Level 1.</p>
                <h4>Benefits:</h4>
                <ul>
                    <li>Boost your Fortitude Saves vs. Filth Fever disease or starvation.</li>
                    <li>If you have spent a lot of time in an urban area before becoming an adventurer, Boost your Knowledge checks to know information about that area.</li>
                </ul>
                <h4>Drawbacks:</h4>
                <p>Reduce your starting Wealth Score by -2.</p>
            </section>
        </>
    );
}
export default Talents;