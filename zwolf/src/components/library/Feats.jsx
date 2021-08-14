import React from 'react';

import { SpecialBlock } from '../../styling/StyleBank';

const Feats = () => {
    return(
        <>
            <SpecialBlock>
                <h2>Battle Banter</h2>
                <h4>[Boost] [Core] Feat</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5 or Heroics Check bonus +1.</p>
                <p><strong>Activity:</strong> 1 Action</p>
                <h3>Effect:</h3>
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
            </SpecialBlock>
            <SpecialBlock>
                <h2>Bestow Curse</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1; one applicable Talent with the [Seed] tag.</p>
                <p><strong>Applicable Seeds:</strong> Animal, Luck, Mind, Shadow</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h3>[Basic] Effect:</h3>
                <p>Make a Spell Attack against one creature: Range 30 ft, Impact Modifier -4, damage type determined by your active Seed, Bleed Number 5.</p>
                <p>Targets oppose this attack with a Willpower Save. Compare Impact to the target's Heroics Check bonus, instead of the target's AV, to determine Secondary Effects. If this attack inflicts a Hazard, use the provided Hazard Menu.</p>
                <h3>[Basic] Seed Effects:</h3>
                <ul>
                    <li><strong>Animal:</strong> The attack deals Necrotic Damage. If the target would be Dropped by the attack, the target instead is transformed into a Tiny or smaller, virtually harmless animal for approximately 5 minutes. This is a [Shapeshift] effect.</li>
                    <li><strong>Luck:</strong> The attack deals Psychic Damage.</li>
                    <li><strong>Mind:</strong> The attack deals Psychic Damage.</li>
                    <li><strong>Shadow:</strong> The attack deals Necrotic and Psychic Damage. If you cast the spell with Melee 1 Range, and allow the target to (optionally) use their Defense Save instead of their Willpower Save to oppose the attack, add +1d8 Impact to the attack.</li>
                </ul>
                <h3>[Advanced] Effect:</h3>
                <p>Choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>The attack's Range increases to 120 ft, and its Impact is Boosted.</li>
                        <li>The attack's effects that last for approximately 5 minutes last approximately 3 days instead.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                        <li>The attack has a Special Augment for the purposes of inflicting Hazards.</li>
                    </ul>
                </p>
                <h3>[Advanced] Seed Effects:</h3>
                <ul>
                    <li><strong>Luck:</strong> If the attack inflicts a Hazard, gain Momentum.</li>
                    <li><strong>Mind:</strong> If the attack has a Special Augment, it is a [Fear] effect.</li>
                    <li><strong>Shadow:</strong> If the attack has a Special Augment, it is a [Fear] effect.</li>
                </ul>
                <h3>Special Hazard Menu</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Requirement</th>
                            <th>Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>No Requirement.</td>
                            <td>The target is Blinded until the end of your next turn.</td>
                        </tr>
                        <tr>
                            <td>Bleed Number triggered.</td>
                            <td>The target is Blinded for approximately 5 minutes.</td>
                        </tr>
                        <tr>
                            <td>The target has Momentum.</td>
                            <td>The target loses Momentum, and cannot expend Momentum to cancel Hazards inflicted by this attack.</td>
                        </tr>
                        <tr>
                            <td>This spell has a Special Augment option.</td>
                            <td>The target becomes Shaken for approximately 5 minutes, and cannot expend Momentum to cancel Hazards inflicted by this attack.</td>
                        </tr>
                        <tr>
                            <td>You have at least Caster Level 4 and cast this spell using the Shadow Seed. The target is Off-Guard. Bleed Number triggered.</td>
                            <td>The target dies.</td>
                        </tr>
                    </tbody>
                </table>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Cleave</h2>
                <h4>[Core] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Fighting Level 1.</p>
                <p><strong>Activity:</strong> 1 Action</p>
                <h3>Effect:</h3>
                <p>When you have Momentum and you inflict a Hazard with a melee weapon attack, immediately make another standard attack with the same weapon against a different target. You don't need Momentum if the weapon involved is a Heavy Blade (other than a Saber) or an Axe.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Dazing Strike</h2>
                <h4>[Core] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Fighting Level 2.</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h3>Effect:</h3>
                <p>Make a melee weapon attack or a Charge Special Attack. The target of this attack may (optionally) use their Fortitude Save in place of their Defense Save to oppose this attack. If this attack inflicts a Hazard, the target is also Dazed until the start of your next turn.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Dirty Trick</h2>
                <h4>[Boost] [Core] Feat</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5.</p>
                <p><strong>Activity:</strong> 1 Action</p>
                <h3>Effect:</h3>
                <p>If you have Momentum, cause one creature within 15 ft to be Dazed. The victim can attempt to make a Reflex Save (with a TN equal to your Coast Number) to make you expend Momentum.</p>
                <p>The Dazed condition from this effect lasts until the end of your turn if the victim succeeds on a Fortitude Save (with a TN equal to your Coast Number), or at the start of your next turn otherwise.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Dodge</h2>
                <h4>[Core] [Counter] [Grace] Feat</h4>
                <p><strong>Prerequisites:</strong> Athletics Skill 3 Ranks.</p>
                <p><strong>Activity:</strong> Reaction, or Free with expenditure of Momentum</p>
                <h3>Effect:</h3>
                <p>When you are targeted by an attack that is opposed by your Defense Save, you may use your Reflex Save instead of your Defense Save to oppose that attack. If your saving throw (of either sort) succeeds, you also Resist the attack's effects.</p>
                <h3>Benefit:</h3>
                <p>Gain a +1 Discipline Bonus to your Reflex Save.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Energy Blast</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1; one applicable Talent with the [Seed] tag.</p>
                <p><strong>Applicable Seeds:</strong> Acid, Air, Cold, Earth, Fire, Lightning, Radiant, Water, Weave</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h3>[Basic] Effect:</h3>
                <p>Make a Spell Attack against one creature or object: Range 30 ft, Impact Modifier +0, damage type determined by your active Seed, Bleed Number 4.</p>
                <p>Creature-targets oppose this attack with a Defense Save. If this attack inflicts a Hazard, use the standard Hazard Menu.</p>
                <p>This attack deals "splash damage": the target may choose one creature or object within 5 ft of it that becomes another target of the attack.</p>
                <h3>[Basic] Seed Effects:</h3>
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
                <h3>[Advanced] Effect:</h3>
                <p>Choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>The attack's Range increases to 120 ft, and its Impact is Boosted.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other. "Splash damage" allows each target to choose an additional target, but no splash-target can be targeted by the attack more than once.</li>
                    </ul>
                </p>
                <h3>[Advanced] Seed Effects:</h3>
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
            </SpecialBlock>
            <SpecialBlock>
                <h2>Energy Strike</h2>
                <h4>[Core] [Spell] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1; one applicable Talent with the [Seed] tag.</p>
                <p><strong>[Basic] Applicable Seeds:</strong> Acid, Air, Cold, Fire, Lightning, Radiant, Shadow</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h3>[Basic] Effect:</h3>
                <p>Casting this Spell does not provoke Opportunity Attacks. Make a weapon attack, changing the Damage Type to a different type depending on the Seed you use to cast this Spell.</p>
                <h3>[Basic] Seed Effects:</h3>
                <ul>
                    <li><strong>Acid:</strong> The attack deals Acid Damage.</li>
                    <li><strong>Air:</strong> The attack deals Bludgeoning Damage.</li>
                    <li><strong>Cold:</strong> The attack deals Cold Damage.</li>
                    <li><strong>Fire:</strong> The attack deals Fire Damage.</li>
                    <li><strong>Lightning:</strong> The attack deals Lightning Damage.</li>
                    <li><strong>Radiant:</strong> The attack deals Radiant Damage.</li>
                    <li><strong>Shadow:</strong> The attack deals Necrotic Damage.</li>
                </ul>
                <p><strong>[Advanced] Applicable Seeds:</strong> Acid, Air, Cold, Fire, Lightning, Mind, Plant, Radiant, Shadow, Weave</p>
                <h3>[Advanced] Effect:</h3>
                <p>Casting this Spell does not provoke Opportunity Attacks. Make a weapon attack, choosing one of the following enhancements to it:
                    <ul>
                        <li>The attack's Impact increases by +1d6. The attack deals its normal Damage Type <em>and</em> the Damage Type associated with the Seed used to cast this Spell.</li>
                        <li>If the attack is a melee attack, its Range increases by Melee +2. The attack deals only the Damage Type associated with the Seed used to cast this Spell.</li>
                        <li>If the attack is a melee attack, its Range increases by Melee +2, and its Impact increases by +1d6. The attack deals only the Damage Type associated with the Seed used to cast this Spell. Drag your Willpower Save to stay Suffused after casting this Spell.</li>
                    </ul>
                </p>
                <h3>[Advanced] Seed Effects:</h3>
                <ul>
                    <li><strong>Acid:</strong> The associated Damage Type is Acid Damage.</li>
                    <li><strong>Air:</strong> The associated Damage Type is Bludgeoning Damage.</li>
                    <li><strong>Cold:</strong> The associated Damage Type is Cold Damage.</li>
                    <li><strong>Fire:</strong> The associated Damage Type is Fire Damage.</li>
                    <li><strong>Lightning:</strong> The associated Damage Type is Lightning Damage.</li>
                    <li><strong>Mind:</strong> The associated Damage Type is Psychic Damage.</li>
                    <li><strong>Plant:</strong> The associated Damage Type is Piercing Damage.</li>
                    <li><strong>Radiant:</strong> The associated Damage Type is Radiant Damage.</li>
                    <li><strong>Shadow:</strong> The associated Damage Type is Necrotic Damage.</li>
                    <li><strong>Weave:</strong> The associated Damage Type is Thunder Damage.</li>
                </ul>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Evoke Fortune</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <p><strong>[Basic] Applicable Seeds:</strong> Luck, Mind, Radiant</p>
                <p><strong>Activity:</strong> 1 Action</p>
                <h3>[Basic] Effect:</h3>
                <p>Target an ally within 30 ft and attempt a TN 13 Spellcraft Check. On a success, the target gains Momentum.</p>
                <h3>[Basic] Seed Effects:</h3>
                <ul>
                    <li><strong>Luck:</strong> If the target is Shaken, the spell (if successful) can remove the Shaken condition instead of granting Momentum.</li>
                    <li><strong>Mind:</strong> If you are the (only) target, casting this spell does not provoke Opportunity Attacks.</li>
                    <li><strong>Radiant:</strong> If the (only) target is within 5 ft of you, casting this spell does not provoke Opportunity Attacks.</li>
                </ul>
                <h3>[Advanced] Effect:</h3>
                <p>You can cast the spell even if you do not have one of its Applicable Seeds active. The target can be up to 60 ft away from you. If a target is Shaken, the spell (if successful) can remove the Shaken condition instead of granting Momentum. In addition, choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>Boost your Spellcraft Check.</li>
                        <li>Cast the spell using two [Dominant] Actions. Automatically succeed on your Spellcraft Check.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                    </ul>
                </p>
                <h3>[Advanced] Seed Effects:</h3>
                <ul>
                    <li><strong>Luck:</strong> You may use your Awesome Check in place of your Spellcraft Check.</li>
                </ul>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Healing Embrace</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1; Charisma Skill 2 Ranks; one applicable Talent with the [Seed] tag.</p>
                <p><strong>Applicable Seeds:</strong> Animal, Mind, Plant, Radiant, Shadow, Water</p>
                <p><strong>[Basic] Activity:</strong> 1 Action</p>
                <h3>[Basic] Effect:</h3>
                <p>Target an ally within 30 ft. That ally, if able to Exert, may Exert to regain Vitality Points equal to half their Vitality Points Pool (rounded up).</p>
                <p>You can use this spell with a non-applicable Seed if that Seed is appropriate to the nature of the target: Acid Seed for an Ooze Type creature; Air, Earth, Fire for an Elemental Type creature of the correct affiliation. The GM is ultimately the arbiter of this interaction.</p>
                <h3>[Basic] Seed Effects:</h3>
                <ul>
                    <li><strong>Animal:</strong> The target must not be of the Undead Type.</li>
                    <li><strong>Mind:</strong> The target must be yourself.</li>
                    <li><strong>Plant:</strong> The target must not be of the Undead Type.</li>
                    <li><strong>Radiant:</strong> The target must not be of the Undead Type.</li>
                    <li><strong>Shadow:</strong> The target must be of the Undead Type.</li>
                    <li><strong>Water:</strong> The target must not be of the Undead Type or have the Fire Energy Association.</li>
                </ul>
                <p><strong>[Advanced] Activity:</strong> 1 [Dominant] Action</p>
                <h3>[Advanced] Effect:</h3>
                <p>Target an ally within 5 ft. That ally can either lose the Dropped condition (but will still be Prone, typically) or regain Vitality Points equal to half their Vitality Points Pool (rounded up). After all other effects, if the ally is Dying, they gain the Stable condition. In addition, choose one of the following enhancements to the spell:
                    <ul>
                        <li>If Dying, the target may attempt a TN 12 Fortitude Save to lose the Dying condition (but still be Wounded).</li>
                        <li>If not Dying, the target may attempt a TN 12 Fortitude Save to lose the Wounded condition.</li>
                        <li>Target a number of additional allies up to half your Level (rounded down), who need not be within 5 ft of you. All targets must be within 30 ft of each other. Some targets may recover from being Dropped while other targets regain VP.</li>
                    </ul>
                </p>
                <h3>[Advanced] Seed Effects:</h3>
                <ul>
                    <li><strong>Animal:</strong> If the target wishes, you can negate a [Shapeshift] effect on them.</li>
                    <li><strong>Mind:</strong> If the spell affects more than one target, only one of them need be yourself.</li>
                    <li><strong>Plant:</strong> The target can lose the Prone condition.</li>
                    <li><strong>Radiant:</strong> If the initial target is within 5 ft, casting this spell does not provoke Opportunity Attacks. Alternatively, the initial target can be up to 30 ft away from you, but no target can be more than 45 ft away from you.</li>
                    <li><strong>Shadow:</strong> The target must either be of the Undead Type or have the Blighted condition.</li>
                    <li><strong>Water:</strong> In place of having the target make a Fortitude Save, you can attempt a TN 16 skill check for first aid.</li>
                </ul>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Pile On</h2>
                <h4>[Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Base Reflex Save +2; (Insight 3 Ranks or Beast Type trait).</p>
                <p><strong>Activity:</strong> Reaction</p>
                <h3>Effect:</h3>
                <p>When you are flanking a creature and your flanking ally hits (or crits) that creature with a melee attack, and either you or your flanking ally has Momentum, make a melee attack against the flanked creature.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Rhino's Charge</h2>
                <h4>[Core] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Base Fortitude Save +1; Athletics Skill 1 Rank; Brawn Skill 3 Ranks.</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h3>Effect:</h3>
                <p>When you have Momentum, make a Charge special attack. Immediately after this Charge is resolved, make a Shove special attack at the same target. If the Charge attack inflicted a Hazard or the target was successfully Shoved, expend Momentum.</p>
                <h3>Benefit:</h3>
                <p>When you make a Shove special attack, you do not provoke an opportunity attack from the target.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Sneak Attack</h2>
                <h4>[Core] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Coast Number 5; Stealth Skill 3 Ranks.</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h3>Effect:</h3>
                <p>Make a weapon attack. If the target has not yet acted in this encounter, it is Off-Guard against this attack even if it is not Surprised. If the target is Surprised, Dazed, or Stunned, or if you were hidden from the target at the start of your turn, this attack adds +1d4 Impact (or +1d6 if using a Light Blade weapon). If this attack inflicts a Hazard during a surprise round, attempt an Awesome Check (TN 12) to gain Momentum.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Spell Ward</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <p><strong>Applicable Seeds:</strong> Cold, Fire, Illusory, Luck, Mind, Radiant, Shadow, Weave</p>
                <p><strong>[Basic] Activity:</strong> 1 Action plus Concentration</p>
                <h3>[Basic] Effect:</h3>
                <p>Target an ally within 30 ft. That ally has a Ward placed on it, which lasts as long as you maintain concentration, to a maximum of about 5 minutes.</p>
                <p>When the Warded creature is the target of a Spell Attack or Vim Attack, they may use your Spellcraft Check in place of their normal saving throw against that attack.</p>
                <h3>[Basic] Seed Effects:</h3>
                <ul>
                    <li><strong>Cold:</strong> The Ward functions only against attacks that deal Cold Damage or Fire Damage.</li>
                    <li><strong>Fire:</strong> The Ward functions only against attacks that deal Cold Damage or Fire Damage.</li>
                    <li><strong>Illusory:</strong> The Ward functions only against [Divination] effects.</li>
                    <li><strong>Mind:</strong> The Ward functions only against attacks opposed by a Willpower Save.</li>
                    <li><strong>Radiant:</strong> The Ward functions only against attacks that deal Necrotic Damage or Radiant Damage.</li>
                    <li><strong>Shadow:</strong> The Ward functions only against attacks that deal Necrotic Damage or Radiant Damage.</li>
                </ul>
                <p><strong>[Advanced] Activity:</strong> 1 [Dominant] Action plus Concentration</p>
                <h3>[Advanced] Effect:</h3>
                <p>You can cast the spell even if you do not have one of its Applicable Seeds active. Restrictions on the effect due to [Basic] Seed Effects are lifted. Choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>When the Warded creature is the target of a Spell Attack or Vim Attack, they may roll their normal Saving Throw <em>and</em> your Spellcraft Check, and use the better result.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                    </ul>
                </p>
                <h3>Benefit:</h3>
                <p>Gain a +1 Discipline Bonus to your Spellcraft Check.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Stunt Attack</h2>
                <h4>[Core] [Grace] [Strike] Feat</h4>
                <p><strong>Prerequisites:</strong> Base Reflex Save +2 or Brawn Skill 4 Ranks.</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h3>Effect:</h3>
                <p>Move your normal striding distance. If this movement involves an Athletics Check with a result of at least 9 (or 5 if you have a free hand), make a melee weapon attack at the end of your movement. You may expend Momentum to use your Athletics result in place of this attack's normal Accuracy. If your attack is made with a Light Blade weapon, the attack also enjoys Combat Advantage.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Toughness</h2>
                <h4>[Boost] [Core] Feat</h4>
                <p><strong>Prerequisites:</strong> Base Fortitude Save +1.</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action</p>
                <h3>Effect:</h3>
                <p>Exert (spend one Stamina Point, only once per Short Rest) to heal Vitality Points equal to half your Vitality Points Pool.</p>
                <h3>Benefit:</h3>
                <p>Gain a +1 Discipline bonus to your Armor Value.</p>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Vanish</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <p><strong>[Basic] Applicable Seeds:</strong> Air, Illusory, Mind, Shadow</p>
                <p><strong>Activity:</strong> 1 [Dominant] Action plus Concentration</p>
                <h3>[Basic] Effect:</h3>
                <p>Target an ally within 5 ft. That ally becomes Invisible, which lasts until expended by the Invisible creature completing an Attack. If not expended, the effect lasts as long as you maintain concentration, to a maximum of about 5 minutes.</p>
                <h3>[Basic] Seed Effects:</h3>
                <ul>
                    <li><strong>Illusory:</strong> The Invisible creature may use your Spellcraft Check in place of their Stealth Skill.</li>
                    <li><strong>Shadow:</strong> If you are the target of this spell, you can choose for it to be a non-[Dominant] Action to cast. In this case, the spell lasts until the end of your next turn.</li>
                </ul>
                <h3>[Advanced] Effect:</h3>
                <p>You can cast the spell even if you do not have one of its Applicable Seeds active. In addition, choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>The effect does not end when the Invisible creature attacks.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                    </ul>
                </p>
                <h3>[Advanced] Seed Effects:</h3>
                <ul>
                    <li><strong>Illusory:</strong> The Invisible creature may use your Spellcraft Check in place of their Stealth Skill.</li>
                    <li><strong>Shadow:</strong> If you are the sole target of this spell, you can choose for it to be a non-[Dominant] Action to cast. The effect retains its normal duration.</li>
                </ul>
            </SpecialBlock>
            <SpecialBlock>
                <h2>Weapon Ward</h2>
                <h4>[Core] [Spell] Feat</h4>
                <p><strong>Prerequisites:</strong> Caster Level 1.</p>
                <p><strong>[Basic] Applicable Seeds:</strong> Air, Cold, Earth, Illusory, Luck, Plant, Weave</p>
                <p><strong>[Basic] Activity:</strong> 1 Action plus Concentration</p>
                <h3>[Basic] Effect:</h3>
                <p>Target an ally within 30 ft. That ally has a Ward placed on it, which lasts as long as you maintain concentration, to a maximum of about 5 minutes.</p>
                <p>When the Warded creature is the target of a weapon attack, they may use your Spellcraft Check in place of their Defense Save against that attack.</p>
                <h3>[Basic] Seed Effects:</h3>
                <ul>
                    <li><strong>Air:</strong> The Ward functions only against ranged attacks.</li>
                    <li><strong>Illusory:</strong> The Ward functions only against attackers who rely primarily on sight to aim their attack.</li>
                </ul>
                <p><strong>[Advanced] Applicable Seeds:</strong> Acid, Air, Cold, Earth, Fire, Illusory, Lightning, Luck, Plant, Radiant, Shadow, Weave</p>
                <p><strong>[Advanced] Activity:</strong> 1 [Dominant] Action plus Concentration</p>
                <h3>[Advanced] Effect:</h3>
                <p>Choose one of the following enhancements to the [Basic] Effect:
                    <ul>
                        <li>When the Warded creature is the target of a weapon attack, they may roll their Defense Save <em>and</em> your Spellcraft Check, and use the better result.</li>
                        <li>Target a number of creatures or objects up to 1 + half your Level (rounded down). All targets must be within 30 ft of each other.</li>
                    </ul>
                </p>
                <h3>[Advanced] Seed Effects:</h3>
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
                <h3>Benefit:</h3>
                <p>Gain a +1 Discipline Bonus to your Spellcraft Check.</p>
            </SpecialBlock>
        </>
    );
}
export default Feats;