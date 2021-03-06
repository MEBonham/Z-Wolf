import React from 'react';

import player from '../../media/example-playgroup/PedroAvatar.png';
import charArt from '../../media/Robry.png';

const Robry = () => {
    return(
        <>
            <img src={player} alt="player portrait" />
            <img src={charArt} alt="character portrait" />
            <h2>Robry</h2>
            <h3>Level 3 Mageknight</h3>
            <p><strong>Kits:</strong> Soldier, Truespeaker, Spellblade; <strong>Feats:</strong> Energy Strike, Battle Banter, Cleave; <strong>Talents:</strong> Martial Training (heavy blades), Speak Language, Windfall, Legerdemain, Acid Seed, Battle-Cast, Snake-Tongued, Lightning Seed.</p>
            <p><strong>Vitality Points:</strong> 18 / 18; <strong>Stamina Points:</strong> 4 / 4; <strong>Karma Points:</strong> 1 / 2</p>
            <p><strong>Armor Value:</strong> 5; <strong>Resistance Value:</strong> 9</p>
            <p><strong>Heroics Check:</strong> +1; <strong>Awesome Check:</strong> +7; <strong>Spellcraft Check:</strong> +3; <strong>Speed Check:</strong> +0</p>
            <h3>Saving Throws</h3>
            <p><strong>Defense:</strong> +1; <strong>Fortitude:</strong> +1; <strong>Reflex:</strong> +1; <strong>Willpower:</strong> +3</p>
            <h3>Skills (Coast Number 4)</h3>
            <p><strong>Athletics:</strong> +0; <strong>Brawn:</strong> +0; <strong>Charisma:</strong> +0; <strong>Dexterity:</strong> +0; <strong>Gadgetry:</strong> +0; <strong>Glibness:</strong> +0; <strong>Insight:</strong> +0; <strong>Knowledge:</strong> +0; <strong>Nature:</strong> +0; <strong>Perception:</strong> +0; <strong>Stealth:</strong> +0</p>
            <h3>Equipment</h3>
            <p><strong>Wealth:</strong> 4</p>
            <p>Leather Armor, Common Outfit, Saber, Dagger, Waterskin, Pouch</p>
            <p>Satchel: Mess Kit, Tinderbox, Trowel, Torch [x4], Rations [x2]</p>
            <p>Pouch: Lockpicks</p>
            <h3>Attacks</h3>
            <p><strong>Saber:</strong> Range Melee 3; Impact Modifier -2; Piercing or Slashing Damage; Accuracy 8; Bleed Number 5.</p>
            <p><strong>Dagger:</strong> Range Melee 1 or Thrown 15 ft; Impact Modifier -3; Piercing and Slashing Damage; Accuracy 8; Bleed Number 5.</p>
            <p><strong>Claw:</strong> Range Melee 1; Impact Modifier -3; Slashing Damage; Accuracy 8; Bleed Number 6.</p>
            <p><strong>Unarmed Strike:</strong> Range Melee 1; Impact Modifier -4; Bludgeoning Damage; Accuracy 3; Bleed Number 4.</p>
            <h3>[Dominant] Actions</h3>
            <p><strong>Stunt Attack:</strong> Move up to 30 ft. If this movement involves an Athletics Skill check with a result of at least 5 (or 9 with off-hand holding something), make a melee weapon attack at the end of your movement. If you expend Momentum, use Athletics result in place of attack's normal Accuracy. If your attack is made with a Light Blade weapon, the attack also enjoys Combat Advantage.</p>
            <h3>Actions</h3>
            <p><strong>Dirty Trick:</strong> With Momentum, Daze a creature within 15 ft; expend Momentum if it passes a TN 5 Reflex Save. At the end of your turn, it can attempt a TN 5 Fortitude Save to end the Dazed condition; otherwise, Dazed lasts until the start of your next turn.</p>
            <h3>Reactions</h3>
            <p><strong>Dodge:</strong> Use Reflex Save in place of Defense Save to oppose an attack. If the save succeeds, Resist the attack's effects. This does not use up your Reaction if you expend Momentum.</p>
            <h3>Passive</h3>
            <ul>
                <li><strong>Catfolk:</strong> Boost Speed Checks whenever Exerted.</li>
                <li><strong>Low-Light Vision:</strong> Treat nonmagical dim lighting as brightly lit.</li>
                <li><strong>Rogue:</strong> Coast Glibness Skill checks.</li>
                <li><strong>Streetwise:</strong> Use Knowledge Skill or Heroics Check (Uncapped) to know info about neighborhood with at least a year's exposure. Coast skill checks to play card or dice games, cheating where applicable.</li>
                <li><strong>Steady Climber:</strong> Coast Athletics Skill checks to climb.</li>
                <li><strong>Lockpicking:</strong> Use Dexterity Skill (Uncapped) to pick locks. Coast Dexterity Skill checks to pick locks.</li>
                <li><strong>Bully:</strong> Boost skill checks to intimidate Medium or smaller creatures.</li>
                <li><strong>Mighty Leap:</strong> Coast Athletics Skill checks to jump.</li>
            </ul>
            <h3>Special</h3>
            <p><strong>Lucky Attitude:</strong> When rolling Initiative, attempt a TN 15 Awesome Check to gain Momentum.</p>
        </>
    );
}
export default Robry;