import React from 'react';

import useChar from '../../hooks/CreatureStore';

const CharSheetMain = () => {
    const cur = useChar((state) => state.cur);

    return (
        <section className="tab main">
            <table>
                <thead>
                    <tr>
                        <th colSpan='2'>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Athletics</td>
                        <td>{cur.stats.Athletics >= 0 ? "+" : null}{cur.stats.Athletics}</td>
                    </tr>
                    <tr>
                        <td>Brawn</td>
                        <td>{cur.stats.Brawn >= 0 ? "+" : null}{cur.stats.Brawn}</td>
                    </tr>
                    <tr>
                        <td>Charisma</td>
                        <td>{cur.stats.Charisma >= 0 ? "+" : null}{cur.stats.Charisma}</td>
                    </tr>
                    <tr>
                        <td>Dexterity</td>
                        <td>{cur.stats.Dexterity >= 0 ? "+" : null}{cur.stats.Dexterity}</td>
                    </tr>
                    <tr>
                        <td>Gadgetry</td>
                        <td>{cur.stats.Gadgetry >= 0 ? "+" : null}{cur.stats.Gadgetry}</td>
                    </tr>
                    <tr>
                        <td>Glibness</td>
                        <td>{cur.stats.Glibness >= 0 ? "+" : null}{cur.stats.Glibness}</td>
                    </tr>
                    <tr>
                        <td>Insight</td>
                        <td>{cur.stats.Insight >= 0 ? "+" : null}{cur.stats.Insight}</td>
                    </tr>
                    <tr>
                        <td>Knowledge</td>
                        <td>{cur.stats.Knowledge >= 0 ? "+" : null}{cur.stats.Knowledge}</td>
                    </tr>
                    <tr>
                        <td>Nature</td>
                        <td>{cur.stats.Nature >= 0 ? "+" : null}{cur.stats.Nature}</td>
                    </tr>
                    <tr>
                        <td>Perception</td>
                        <td>{cur.stats.Perception >= 0 ? "+" : null}{cur.stats.Perception}</td>
                    </tr>
                    <tr>
                        <td>Stealth</td>
                        <td>{cur.stats.Stealth >= 0 ? "+" : null}{cur.stats.Stealth}</td>
                    </tr>
                </tbody>
            </table>
            <section className="verbs">
                <h2>Verbs</h2>
            </section>
        </section>
    );
}

export default CharSheetMain;