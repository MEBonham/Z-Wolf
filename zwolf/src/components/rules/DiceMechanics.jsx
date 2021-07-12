import React from 'react';

const DiceMechanics = () => {
    return(
        <>
            <h2>Dice Mechanics</h2>
            <p>Z-Wolf is designed entirely around twelve-sided (or "dodecahedral") dice, called d12s for short.</p>
            <p>When an RPG tells you to roll dice, it usually uses NdS notation, where N is the number of dice and S is the number of sides those dice have. For example, in Z-Wolf you usually roll three twelve-sided dice, or 3d12.</p>
            <h2>Basic Z-Wolf Checks</h2>
            <p>A "normal" die roll in Z-Wolf is 3d12, followed by taking the middle number of the three results, adding a number from your character sheet to the number rolled, and comparing the result to a Target Number (TN).</p>
            <p>Rolling three dice and taking the middle (or median) result means that rolling middling numbers is much more common, while rolling high or low numbers happens more seldom.</p>
            <p>Numbers you add to a die result are called "bonuses" (for positive numbers), "penalties" (for negative numbers), or just "modifiers" (all of the above or even zero).</p>
            <h3>Natural Die Results</h3>
            <p>Sometimes (especially when rolling a "Saving Throw" to resist an attack), the number you roll on your d12, before adding any modifiers to it, can have special effects if it is particularly high or low.</p>
            <h2>Boosting and Dragging</h2>
            <p>Sometimes there are favorable or unfavorable circumstances to something your character is trying to do, either because the rules say so or just because the GM rules it. Rather than keeping track of additional numbers to add or subtract to a die roll ad hoc, in Z-Wolf your roll can be "boosted" or "dragged" to reflect these circumstances.</p>
            <h3>Boosted Rolls</h3>
            <p>Roll 2d12 and take the higher result as your Natural Die Result, adding modifiers to it normally.</p>
            <p>Boosts do not "stack." If your roll is boosted by more than one favorable circumstance, you still roll only 2d12.</p>
            <h3>Dragged Rolls</h3>
            <p>Roll 2d12 and take the lower result as your Natural Die Result, adding modifiers to it normally.</p>
            <p>Drags do not "stack." If your roll is dragged by more than one unfavorable circumstance, you still roll only 2d12.</p>
            <h3>Boosted AND Dragged Rolls</h3>
            <p>If both positive and negative circumstances apply to your roll (any number of either), the results become less predictible than normal. Roll just a single d12 and use the result as your Natural Die Result, adding modifiers to it normally.</p>
            <h2>Coasting</h2>
            <p>Your character has a statistic called her Coast Number. Sometimes the rules allow her to "coast" a d20 roll. In this case, roll the d12s normally (3d20 and take the middle result unless the roll is boosted or dragged), but if the Natural Die Result is lower than her Coast Number, use her Coast Number instead of the Natural Die Result to determine the outcoome. Add any modifiers to the Coast Number normally, and compare the final number to the TN normally.</p>
            <p>Coasting is intended mainly to prevent heroes from making embarrassing mistakes at easy tasks. By default, a character is allowed to "coast" most rolls that involve a Skill, as long as she is not under pressure. The worst results of her actions can be avoided by taking her time to be careful.</p>
            <p>Many special abilities allow characters to "coast" Skill checks that they could not normally "coast," even if they are under pressure. This makes them more heroic.</p>
            <h2>Roll Replacement</h2>
            <p>Many special abilities let you use one statistic "in place of" another when rolling dice. This means you use the less standard statistic's modifiers in place of the standard statistics modifiers when determining your die roll result.</p>
            <p>Your character has a statistic called his Awesome Check. It is a high statistic and is primarily intended to be used with Roll Replacement, letting him get great die roll results when he has very favorable circumstances.</p>
            <p>For example, all characters have the option to use the Total Defense action in combat. After using this ability, a character can use his Awesome Check in place of his Defense Save until the start of his next turn. If he has an Awesome Check of +7 and a Defense Save of +4, when he is attacked he can roll 3d12, take the middle die result, and add 7 to it to determine how effective his Defense is. His normal Defense modifier of +4 is irrelevant in this situation.</p>
            <p>Roll Replacement can be "transitive." For example, if a character has one special ability to use Willpower in place of Defense, and another special ability to use Perception in place of Willpower, then the player can use Perception in place of Defense if both special abilities would normally apply to the situation.</p>
            <h3>Capped Rolls</h3>
            <p>Normally, Roll Replacement is optional, so you can just use it when it improves your situation. An exception is "capped" die rolls, which represent your character attempting to do something that normally requires special training, but doesn't have the training in question.</p>
            <p>Your character has a statistic called his Heroics Check. It represents basic competency at just about everything, but is not a very high statistic. For Capped rolls, use this Heroics Check in place of a normal die roll, only if the overall modifier is reduced by this replacement. (This is effectively a penalty.)</p>
            <p>For example, Gunnzo the Goblin is a high-level character who is generally good at using items (tying knots, assembling clockwork, mixing up chemicals in a beaker), but hasn't gotten around to learning how locks work specifically. His Gadgetry Skill is +9, but his Heroic Bonus is only +3. If he attempts to pick a lock, he has to use the +3 modifier to his die roll instead of the +9.</p>
        </>
    );
}
export default DiceMechanics;