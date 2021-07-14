import React from 'react';

const Talents = () => {
    return(
        <>
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
                <h2>Bestride</h2>
                <h4>[Core] [Skill Trick] Talent</h4>
                <p><strong>Prerequisites:</strong> Athletics Skill 1 Rank.</p>
                <h4>Benefits:</h4>
                <p>You can Coast Athletics and Nature Skill checks related to riding a mount, even under pressure. (This includes checks to control a mount in combat, or to avoid being dismounted.)</p>
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
                <h2>Hold the Line</h2>
                <h4>[Core] Talent</h4>
                <p><strong>Prerequisites:</strong> Fighting Level 2.</p>
                <h4>Benefits:</h4>
                <p>Your Opportunity Attacks, if provoked by the target's movement, deal +1d6 Impact.</p>
            </section>
            <section>
                <h2>Martial Training</h2>
                <h4>[Core] [Proficiency] Talent</h4>
                <p><strong>Prerequisites:</strong> Select one Category of weapons (Axes, Bows, Clubs, Crossbows, Flails, Heavy Blades, Light Blades, Polearms, or Spears). (You can take this Talent multiple times to select multiple Categories.</p>
                <h4>Benefits:</h4>
                <p>You are proficient with Martial-grade weapons of the selected Category. (If a Martial weapon has more than one Category, you only need one of them in order to be proficient.)</p>
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
        </>
    );
}
export default Talents;