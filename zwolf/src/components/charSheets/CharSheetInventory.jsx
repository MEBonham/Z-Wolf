import React from 'react';

import useChar from '../../hooks/CreatureStore';

const CharSheetInventory = () => {
    const cur = useChar((state) => state.cur);

    return (
        <section className="tab inventory">
            <header>
                <h2>Inventory</h2>
                <div>
                    <h3>Wealth: {cur.wealth}</h3>
                </div>
            </header>
            <div className="floatRight">
                <button>Add Wealth</button>
                <input type="number" className="short" />
                <button>Lose Wealth</button>
            </div>
        </section>
    );
}

export default CharSheetInventory;