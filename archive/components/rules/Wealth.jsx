import React from 'react';

const Wealth = () => {
    return(
        <>
            <h2>Wealth and Treasure</h2>
            <p>Characters have a Wealth statistic. Unlike most statistics on a character sheet, this does not represent a modifier to be added to a d12 roll, nor a TN for a d12 roll. Instead, it represents how many d6s a character has to represent their monetary assets, political favors, and haggling skills.</p>
            <p>When buying or selling, the player rolls d6s equal to their Wealth score, and counts the number of "failures" (1-3 results), or the number of "successes" (5-6 results). Results of 4 are neutral.</p>
            <h3>Buying Stuff</h3>
            <p>When you wish to purchase an item, you stand to lose Wealth score equal to (the item's Price rating - your successes). You cannot gain Wealth from making a purchase.</p>
            <h3>Selling Stuff</h3>
            <p>When you wish to sell an item, you stand to gain Wealth score equal to (the item's Price rating - your failures). You cannot lose Wealth from making a sale, but you also cannot gain more Wealth (at the maximum) than half the item's Price rating (rounded up).</p>
            <p>If you do not like the results of your buying or selling Wealth rolls, you can always keep your previous Wealth score and the transaction doesn't happen. You can try again when the GM determines that there has been enough of a change in the local market situation.</p>
            <h3>Giving Money</h3>
            <p>When one entity gives money to another entity, they must set an effective Price rating of the quantity they are giving. They lose Wealth as if buying an item of that Price, and the beneficiary gains Wealth as if selling an item of the same Price.</p>
            <p>Simply giving away <em>all</em> of one's Wealth drops the effective score to zero; the beneficiary gains Wealth as if selling an item of Price equal to the lost Wealth plus the number of successes the giver can roll.</p>
            <h3>Buying in Bulk</h3>
            <p>When buying many copies of an item, it is not recommended to purchase them one at a time, for sake of convenience, realism, and game balance alike. The GM can make exceptions if you truly are shopping around for separate items with sufficient time and access to a sufficient market.</p>
            <p>Normally, buying 10x of an item raises its effective Price from 1 to 3; or from 2 to 5; or from 3-8 by +4; or by +5 for items that start off at a Price greater than 8.</p>
        </>
    );
}
export default Wealth;