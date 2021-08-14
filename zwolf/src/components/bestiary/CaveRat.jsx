import React from 'react';

const CaveRat = () => {
    return(
        <>
            <h1>Cave Rat</h1>
            <h2>Level 1 Vermin</h2>
            <p><strong>Kits:</strong> Tiny Critter, Brawler; <strong>Feats:</strong> Pile On; <strong>Talents:</strong> Runted, Steady Climber, Swimmer, Keen Smell, Filthy Squalor.</p>
            <p><strong>VP Pool:</strong> 11; <strong>SP Pool:</strong> 5</p>
            <p><strong>Armor Value:</strong> 0; <strong>Resistance Value:</strong> 5</p>
            <p><strong>Heroics Check:</strong> +0; <strong>Awesome Check:</strong> +5; <strong>Spellcraft Check:</strong> +0; <strong>Speed Check:</strong> -1</p>
            <h2>Saving Throws</h2>
            <p><strong>Defense:</strong> +3; <strong>Fortitude:</strong> +0; <strong>Reflex:</strong> +2; <strong>Willpower:</strong> +0</p>
            <h2>Skills (Coast Number 4)</h2>
            <p><strong>Athletics:</strong> +3; <strong>Brawn:</strong> -5; <strong>Charisma:</strong> +0; <strong>Dexterity:</strong> +2; <strong>Gadgetry:</strong> -2; <strong>Glibness:</strong> -2; <strong>Insight:</strong> +1; <strong>Knowledge:</strong> -2; <strong>Nature:</strong> +1; <strong>Perception:</strong> +3; <strong>Stealth:</strong> +1</p>
            <h2>Equipment</h2>
            <p><strong>Wealth:</strong> 1</p>
            <h2>Attacks</h2>
            <p><strong>Bite:</strong> Range Melee 1; Impact Modifier -4; Piercing Damage; Accuracy 10; Bleed Number 5.</p>
            <p><strong>Unarmed Strike:</strong> Range Melee 1; Impact Modifier -7; Bludgeoning Damage; Accuracy 6; Bleed Number 3.</p>
            <h2>Reactions</h2>
            <p><strong>Pile On:</strong> When you are flanking a creature and your flanking ally hits (or crits) that creature with a melee attack, and either you or your flanking ally has Momentum, make a melee attack against the flanked creature.</p>
            <section className="typicalList">
                <h2>Passive</h2>
                <ul>
                    <li><strong>Diminutive Size:</strong> Boosted or Dragged rolls relating to size comparisons with other creatures.</li>
                    <li><strong>Filthy Squalor:</strong> Boost Fortitude Saves vs. Filth Fever Disease or starvation.</li>
                    <li><strong>Keen Smell:</strong> Boost Perception Skill checks to notice or locate things with strong or distinctive scents. Use Perception in place of Nature to track creatures.</li>
                    <li><strong>Low-Light Vision:</strong> Treat nonmagical dim lighting as brightly lit.</li>
                    <li><strong>Stability:</strong> Boost Athletics and Brawn Skill checks to maintain footing.</li>
                    <li><strong>Steady Climber:</strong> Coast Athletics Skill checks to climb.</li>
                    <li><strong>Swimmer:</strong> Coast Athletics Skill checks to swim.</li>
                </ul>
            </section>
            <h2>Special</h2>
            <p><strong>Filthy Squalor (TN 6):</strong> A creature taking a rest after being hit (or critted) by your Bite natural weapon must make a Fortitude Save or contract the Filth Fever Disease.</p>
        </>
    );
}
export default CaveRat;