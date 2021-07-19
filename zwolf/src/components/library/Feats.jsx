import React from 'react';

const Feats = () => {
    return(
        <>
            <section>
                <h2>Battle Banter</h2>
                <h4>[Boost] [Core] Feat</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5 or Heroics Check bonus +1.</p>
                <p><strong>Activity:</strong> 1 Action</p>
                <h4>Effect:</h4>
                <p>Target a creature who can understand a language. If you hit (or crit) that creature with a melee attack before the end of your turn, the target must make a Willpower Save (TN = 6 + your Glibness Skill modifier). On a failure, you may inflict a special Hazard on the creature from the following menu:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Requirement</th>
                            <th>Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The target has Momentum.</td>
                            <td>The target loses Momentum, and cannot expend Momentum to cancel Hazards inflicted by this attack.</td>
                        </tr>
                        <tr>
                            <td>The target does not have Momentum.</td>
                            <td>You gain Momentum.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Cleave</h2>
                <h4>[Core] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Fighting Level 1.</p>
                <p><strong>Activity:</strong> 1 Action</p>
                <h4>Effect:</h4>
                <p>When you have Momentum and you inflict a Hazard with a melee weapon attack, immediately make another standard attack with the same weapon against a different target. You don't need Momentum if the weapon involved is a Heavy Blade (other than a Saber) or an Axe.</p>
            </section>
            <section>
                <h2>Dodge</h2>
                <h4>[Core] [Counter] [Grace] Feat</h4>
                <p><strong>Prerequisites:</strong> Athletics Skill 3 Ranks.</p>
                <p><strong>Activity:</strong> Reaction, or Free with expenditure of Momentum</p>
                <h4>Effect:</h4>
                <p>When you are targeted by an attack that is opposed by your Defense Save, you may use your Reflex Save instead of your Defense Save to oppose that attack. If your saving throw (of either sort) succeeds, you also Resist the attack's effects.</p>
                <h4>Benefit:</h4>
                <p>Gain a +1 Discipline Bonus to your Reflex Save.</p>
            </section>
            <section>
                <h2>Energy Blast</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1; one applicable Talent with the [Seed] tag.</p>
                <p><strong>Applicable Seeds:</strong> Acid, Air, Cold, Earth, Fire, Lightning, Radiant, Water, Weave</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h4>[Basic] Effect:</h4>
                <p>Make a Spell Attack against one creature or object: Range 30 ft, Impact Modifier +0, damage type determined by your active Seed, Bleed Number 4.</p>
                <p>Creature-targets oppose this attack with a Defense Save. If this attack inflicts a Hazard, use the standard Hazard Menu.</p>
                <p>This attack deals "splash damage": the target may choose one creature or object within 5 ft of it that becomes another target of the attack.</p>
                <h4>[Basic] Seed Effects:</h4>
                <ul>
                    <li><strong>Acid:</strong> The attack deals Acid Damage.</li>
                    <li><strong>Air:</strong> The attack deals Bludgeoning Damage.</li>
                    <li><strong>Cold:</strong> The attack deals Cold Damage.</li>
                    <li><strong>Earth:</strong> The attack deals Bludgeoning and Slashing Damage.</li>
                    <li><strong>Fire:</strong> The attack deals Fire Damage.</li>
                    <li><strong>Lightning:</strong> The attack deals Lightning Damage.</li>
                    <li><strong>Radiant:</strong> The attack deals Radiant Damage.</li>
                    <li><strong>Water:</strong> The attack deals Bludgeoning Damage.</li>
                    <li><strong>Weave:</strong> The attack deals Force Damage. The attack's Impact is Dragged.</li>
                </ul>
                <h4>[Advanced] Effect:</h4>
                <p>Choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>The attack's Range increases to 120 ft, and its Impact is Boosted.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other. "Splash damage" allows each target to choose an additional target, but no splash-target can be targeted by the attack more than once.</li>
                    </ul>
                </p>
                <h4>[Advanced] Seed Effects:</h4>
                <ul>
                    <li><strong>Acid:</strong> The attack's Bleed Number increases to 6.</li>
                    <li><strong>Cold:</strong> Until the start of your next turn, targets' Speed Checks are Dragged.</li>
                    <li><strong>Lightning:</strong> Choose one of the following options:
                    <ul>
                        <li>The attack deals Thunder Damage rather than Lightning Damage.</li>
                        <li>The attack does not deal "splash damage."</li>
                        <li>Targets made primarily of metal or wearing primarily-metal armor Drag their Defense Save against the attack.</li>
                    </ul></li>
                    <li><strong>Weave:</strong> If the attack is a "miss," it still has the effects of a "hit."</li>
                </ul>
            </section>
            <section>
                <h2>Evoke Fortune</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <p><strong>[Basic] Applicable Seeds:</strong> Luck, Mind, Radiant</p>
                <p><strong>Activity:</strong> 1 Action</p>
                <h4>[Basic] Effect:</h4>
                <p>Target an ally within 30 ft and attempt a TN 13 Spellcraft Check. On a success, the target gains Momentum.</p>
                <h4>[Basic] Seed Effects:</h4>
                <ul>
                    <li><strong>Luck:</strong> If the target is Shaken, the spell (if successful) can remove the Shaken condition instead of granting Momentum.</li>
                    <li><strong>Mind:</strong> If you are the (only) target, casting this spell does not provoke Opportunity Attacks.</li>
                    <li><strong>Radiant:</strong> If the (only) target is within 5 ft of you, casting this spell does not provoke Opportunity Attacks.</li>
                </ul>
                <h4>[Advanced] Effect:</h4>
                <p>You can cast the spell even if you do not have one of its Applicable Seeds active. The target can be up to 60 ft away from you. If a target is Shaken, the spell (if successful) can remove the Shaken condition instead of granting Momentum. In addition, choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>Boost your Spellcraft Check.</li>
                        <li>Cast the spell using two [Dominant] Actions. Automatically succeed on your Spellcraft Check.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                    </ul>
                </p>
                <h4>[Advanced] Seed Effects:</h4>
                <ul>
                    <li><strong>Luck:</strong> You may use your Awesome Check in place of your Spellcraft Check.</li>
                </ul>
            </section>
            <section>
                <h2>Healing Embrace</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1; Insight Skill 2 Ranks; one applicable Talent with the [Seed] tag.</p>
                <p><strong>Applicable Seeds:</strong> Animal, Mind, Plant, Radiant, Shadow, Water</p>
                <p><strong>[Basic] Activity:</strong> 1 Action</p>
                <h4>[Basic] Effect:</h4>
                <p>Target an ally within 30 ft. That ally, if able to Exert, may Exert to regain Vitality Points equal to half their Vitality Points Pool (rounded up).</p>
                <p>You can use this spell with a non-applicable Seed if that Seed is appropriate to the nature of the target: Acid Seed for an Ooze Type creature; Air, Earth, Fire for an Elemental Type creature of the correct affiliation. The GM is ultimately the arbiter of this interaction.</p>
                <h4>[Basic] Seed Effects:</h4>
                <ul>
                    <li><strong>Animal:</strong> The target must not be of the Undead Type.</li>
                    <li><strong>Mind:</strong> The target must be yourself.</li>
                    <li><strong>Plant:</strong> The target must not be of the Undead Type.</li>
                    <li><strong>Radiant:</strong> The target must not be of the Undead Type.</li>
                    <li><strong>Shadow:</strong> The target must be of the Undead Type.</li>
                    <li><strong>Water:</strong> The target must not be of the Undead Type or have the Fire Energy Association.</li>
                </ul>
                <p><strong>[Advanced] Activity:</strong> 1 [Dominant] Action</p>
                <h4>[Advanced] Effect:</h4>
                <p>Target an ally within 5 ft. That ally can either lose the Dropped condition (but will still be Prone, typically) or regain Vitality Points equal to half their Vitality Points Pool (rounded up). After all other effects, if the ally is Dying, they gain the Stable condition. In addition, choose one of the following enhancements to the spell:
                    <ul>
                        <li>If Dying, the target may attempt a TN 12 Fortitude Save to lose the Dying condition (but still be Wounded).</li>
                        <li>If not Dying, the target may attempt a TN 12 Fortitude Save to lose the Wounded condition.</li>
                        <li>Target a number of additional allies up to half your Level (rounded down), who need not be within 5 ft of you. All targets must be within 30 ft of each other. Some targets may recover from being Dropped while other targets regain VP.</li>
                    </ul>
                </p>
                <h4>[Advanced] Seed Effects:</h4>
                <ul>
                    <li><strong>Animal:</strong> If the target wishes, you can negate a [Shapeshift] effect on them.</li>
                    <li><strong>Mind:</strong> If the spell affects more than one target, only one of them need be yourself.</li>
                    <li><strong>Plant:</strong> The target can lose the Prone condition.</li>
                    <li><strong>Radiant:</strong> If the initial target is within 5 ft, casting this spell does not provoke Opportunity Attacks. Alternatively, the initial target can be up to 30 ft away from you, but no target can be more than 45 ft away from you.</li>
                    <li><strong>Shadow:</strong> The target must either be of the Undead Type or have the Blighted condition.</li>
                    <li><strong>Water:</strong> In place of having the target make a Fortitude Save, you can attempt a TN 16 skill check for first aid.</li>
                </ul>
            </section>
            <section>
                <h2>Pile On</h2>
                <h4>[Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Base Reflex Save +2; (Insight 3 Ranks or Beast Type trait).</p>
                <p><strong>Activity:</strong> Reaction</p>
                <h4>Effect:</h4>
                <p>When you are flanking a creature and your flanking ally hits (or crits) that creature with a melee attack, and either you or your flanking ally has Momentum, make a melee attack against the flanked creature.</p>
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
                <h2>Sneak Attack</h2>
                <h4>[Core] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5; Stealth Skill 3 Ranks.</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h4>Effect:</h4>
                <p>Make a weapon attack. If the target has not yet acted in this encounter, it is Off-Guard against this attack even if it is not Surprised. If the target is Surprised, Dazed, or Stunned, or if you were hidden from the target at the start of your turn, this attack adds +1d4 Impact (or +1d6 if using a Light Blade weapon). If this attack inflicts a Hazard during a surprise round, attempt an Awesome Check (TN 12) to gain Momentum.</p>
            </section>
            <section>
                <h2>Spell Ward</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <p><strong>Applicable Seeds:</strong> Cold, Fire, Illusory, Luck, Mind, Radiant, Shadow, Weave</p>
                <p><strong>[Basic] Activity:</strong> 1 Action plus Concentration</p>
                <h4>[Basic] Effect:</h4>
                <p>Target an ally within 30 ft. That ally has a Ward placed on it, which lasts as long as you maintain concentration, to a maximum of about 5 minutes.</p>
                <p>When the Warded creature is the target of a Spell Attack or Vim Attack, they may use your Spellcraft Check in place of their normal saving throw against that attack.</p>
                <h4>[Basic] Seed Effects:</h4>
                <ul>
                    <li><strong>Cold:</strong> The Ward functions only against attacks that deal Cold Damage or Fire Damage.</li>
                    <li><strong>Fire:</strong> The Ward functions only against attacks that deal Cold Damage or Fire Damage.</li>
                    <li><strong>Illusory:</strong> The Ward functions only against [Divination] effects.</li>
                    <li><strong>Mind:</strong> The Ward functions only against attacks opposed by a Willpower Save.</li>
                    <li><strong>Radiant:</strong> The Ward functions only against attacks that deal Necrotic Damage or Radiant Damage.</li>
                    <li><strong>Shadow:</strong> The Ward functions only against attacks that deal Necrotic Damage or Radiant Damage.</li>
                </ul>
                <p><strong>[Advanced] Activity:</strong> 1 [Dominant] Action plus Concentration</p>
                <h4>[Advanced] Effect:</h4>
                <p>You can cast the spell even if you do not have one of its Applicable Seeds active. Restrictions on the effect due to [Basic] Seed Effects are lifted. Choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>When the Warded creature is the target of a Spell Attack or Vim Attack, they may roll their normal Saving Throw <em>and</em> your Spellcraft Check, and use the better result.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                    </ul>
                </p>
                <h4>Benefit:</h4>
                <p>Gain a +1 Discipline Bonus to your Spellcraft Check.</p>
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
            <section>
                <h2>Vanish</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <p><strong>[Basic] Applicable Seeds:</strong> Air, Illusory, Mind, Shadow</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action plus Concentration</p>
                <h4>[Basic] Effect:</h4>
                <p>Target an ally within 5 ft. That ally becomes Invisible, which lasts until expended by the Invisible creature completing an Attack. If not expended, the effect lasts as long as you maintain concentration, to a maximum of about 5 minutes.</p>
                <h4>[Basic] Seed Effects:</h4>
                <ul>
                    <li><strong>Illusory:</strong> The Invisible creature may use your Spellcraft Check in place of their Stealth Skill.</li>
                    <li><strong>Shadow:</strong> If you are the target of this spell, you can choose for it to be a non-[Dominant] Action to cast. In this case, the spell lasts until the end of your next turn.</li>
                </ul>
                <h4>[Advanced] Effect:</h4>
                <p>You can cast the spell even if you do not have one of its Applicable Seeds active. In addition, choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>The effect does not end when the Invisible creature attacks.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                    </ul>
                </p>
                <h4>[Advanced] Seed Effects:</h4>
                <ul>
                    <li><strong>Illusory:</strong> The Invisible creature may use your Spellcraft Check in place of their Stealth Skill.</li>
                    <li><strong>Shadow:</strong> If you are the sole target of this spell, you can choose for it to be a non-[Dominant] Action to cast. The effect retains its normal duration.</li>
                </ul>
            </section>
            <section>
                <h2>Weapon Ward</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <p><strong>[Basic] Applicable Seeds:</strong> Air, Cold, Earth, Illusory, Luck, Plant, Weave</p>
                <p><strong>[Basic] Activity:</strong> 1 Action plus Concentration</p>
                <h4>[Basic] Effect:</h4>
                <p>Target an ally within 30 ft. That ally has a Ward placed on it, which lasts as long as you maintain concentration, to a maximum of about 5 minutes.</p>
                <p>When the Warded creature is the target of a weapon attack, they may use your Spellcraft Check in place of their Defense Save against that attack.</p>
                <h4>[Basic] Seed Effects:</h4>
                <ul>
                    <li><strong>Air:</strong> The Ward functions only against ranged attacks.</li>
                    <li><strong>Illusory:</strong> The Ward functions only against attackers who rely primarily on sight to aim their attack.</li>
                </ul>
                <p><strong>[Advanced] Applicable Seeds:</strong> Acid, Air, Cold, Earth, Fire, Illusory, Lightning, Luck, Plant, Radiant, Shadow, Weave</p>
                <p><strong>[Advanced] Activity:</strong> 1 [Dominant] Action plus Concentration</p>
                <h4>[Advanced] Effect:</h4>
                <p>Choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>When the Warded creature is the target of a weapon attack, they may roll their Defense Save <em>and</em> your Spellcraft Check, and use the better result.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                    </ul>
                </p>
                <h4>[Advanced] Seed Effects:</h4>
                <ul>
                    <li><strong>Acid:</strong> An attacker who targets a Warded creature with a natural weapon takes Incidental Acid Damage equal to your Heroics Check bonus. A non-natural weapon that is used to attack the Warded creature is struck by an automatic Sunder special attack (Impact Modifier +0, Acid Damage).</li>
                    <li><strong>Air:</strong> This Seed can now affect melee attacks as well as ranged attacks.</li>
                    <li><strong>Cold:</strong> An attacker who targets a Warded creature (with a melee attack) takes Incidental Cold Damage equal to your Heroics Check bonus. The Warded creature Resists Fire Damage delivered by weapon attacks.</li>
                    <li><strong>Earth:</strong> The Warded creature Resists Bludgeoning, Piercing, and Slashing damage delivered by weapon attacks.</li>
                    <li><strong>Fire:</strong> An attacker who targets a Warded creature (with a melee attack) takes Incidental Fire Damage equal to your Heroics Check bonus. The Warded creature Resists Cold Damage delivered by weapon attacks.</li>
                    <li><strong>Illusory:</strong> The Ward functions only against attackers who rely primarily on sight to aim their attack.</li>
                    <li><strong>Lightning:</strong> An attacker who targets a Warded creature (with a melee attack) takes Incidental Lightning Damage equal to your Heroics Check bonus.</li>
                    <li><strong>Plant:</strong> An attacker who targets a Warded creature (with a melee attack) takes Incidental Piercing Damage equal to your Heroics Check bonus. The Warded creature Resists Cold Damage delivered by weapon attacks.</li>
                    <li><strong>Radiant:</strong> If this Spell targets one creature and they are within 5 ft of you, casting this spell does not provoke Opportunity Attacks. An attacker who targets a Warded creature (with a melee attack) takes Incidental Radiant Damage equal to your Heroics Check bonus.</li>
                    <li><strong>Shadow:</strong> An attacker who targets a Warded creature (with a melee attack) takes Incidental Necrotic Damage equal to your Heroics Check bonus.</li>
                </ul>
                <h4>Benefit:</h4>
                <p>Gain a +1 Discipline Bonus to your Spellcraft Check.</p>
            </section>
        </>
    );
}
export default Feats;