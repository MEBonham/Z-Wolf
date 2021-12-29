import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <h1>Welcome to Z-Wolf RPG</h1>
            <p>Z-Wolf is an original high-fantasy-adventure Role-Playing Game. Essentially it's how I would re-make <em>Dungeons &amp; Dragons</em> if I were in charge of the universe.</p>
            <p>Z-Wolf is designed to be played using this website for automation. At least a light Virtual Tabletop is also recommended, so that measuring movement distances without a grid doesn't become arduous. I think playing with electronic aids is the way of the future for TTRPGs, and is particularly convenient with Z-Wolf's dice system.</p>
            <nav className="toc">
                <h1>Table of Contents</h1>
                <div className="columns">
                    <div>
                        <h2>Rules</h2>
                        <ul>
                            <li>
                                <Link to="/rules/rpgbasics">Tabletop RPG Basics</Link>
                            </li>
                            <li>
                                <Link to="/rules/dicemechanics">Dice Mechanics</Link>
                            </li>
                            <li>
                                <Link to="/rules/charactercreation">Creating a Character</Link>
                            </li>
                            <li>
                                <Link to="/rules/karma">Earning and Using Karma Points</Link>
                            </li>
                            <li>
                                <Link to="/rules/wealth">Wealth and Treasure</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Demo Characters</h2>
                        <ul>
                            <li>
                                <Link to="/bestiary/ankithlakith">Example PC: Ankithlakith</Link>
                            </li>
                            <li>
                                <Link to="/bestiary/znibbi">Example PC: Znibbi</Link>
                            </li>
                        </ul>
                        <h2>System Library</h2>
                        <ul>
                            <li>
                                <Link to="/library/kits">Kits</Link> <Link to="/library/newkit">(add)</Link>
                            </li>
                            <li>
                                <Link to="/library/feats">Feats</Link> <Link to="/library/newfeat">(add)</Link>
                            </li>
                            <li>
                                <Link to="/library/talents">Talents</Link> <Link to="/library/newtalent">(add)</Link>
                            </li>
                            <li>
                                <Link to="/library/items">Items</Link> <Link to="/library/newitem">(add)</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Home;