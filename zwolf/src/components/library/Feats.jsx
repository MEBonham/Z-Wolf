import React from 'react';

const Feats = () => {
    return(
        <>
            <section>
                <h2>Cleave</h2>
                <h4>[Core] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Fighting Level 1.</p>
                <p><strong>Activity:</strong> 1 Action</p>
                <h4>Effect:</h4>
                <p>When you have Momentum and you inflict a Hazard with a melee weapon attack, immediately make another standard attack with the same weapon against a different target. You don't need Momentum if the weapon involved is a Heavy Blade (other than a Saber) or an Axe.</p>
            </section>
            <section>
                <h2>Rhino's Charge</h2>
                <h4>[Core] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Base Fortitude Save +1; Athletics Skill 1 Rank; Brawn Skill 3 Ranks.</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h4>Effect:</h4>
                <p>When you have Momentum, make a Charge special attack. Immediately after this Charge is resolved, make a Shove special attack at the same target. If the Charge attack inflicted a Hazard or the target was successfully Shoved, expend Momentum.</p>
                <h4>Benefit:</h4>
                <p>When you make a Shove special attack, you do not provoke an opportunity attack from the target.</p>
            </section>
            <section>
                <h2>Toughness</h2>
                <h4>[Boost] [Core] Feat</h4>
                <p><strong>Prerequisites:</strong> Base Fortitude Save +1.</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h4>Effect:</h4>
                <p>Exert (spend one Stamina Point, only once per Short Rest) to heal Vitality Points equal to half your Vitality Points Pool.</p>
                <h4>Benefit:</h4>
                <p>Gain a +1 Discipline bonus to your Armor Value.</p>
            </section>
        </>
    );
}
export default Feats;