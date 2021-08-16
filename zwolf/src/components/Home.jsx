import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <h1>Welcome to Z-Wolf RPG</h1>
            <p>Z-Wolf is an original high-fantasy-adventure Role-Playing Game. Essentially it's how I would re-make <em>Dungeons & Dragons</em> if I were in charge of the universe.</p>
            <p>Z-Wolf is designed to be played using a Virtual Tabletop, such as Foundry VTT. I believe this is the way of the future for many RPG players. Some of the rules, such as the basic die roll and the gridless tactical combat that Z-Wolf is designed around, will be annoyingly clunky without the aid of computer automation provided by a good VTT.</p>
            <nav className="toc">
                <h1>Table of Contents</h1>
                <h2>Monsters & Characters</h2>
                <ul>
                    <li>
                        <Link to="/bestiary/fighter">Pre-Built PC: Fighter</Link>
                    </li>
                    <li>
                        <Link to="/bestiary/mage">Pre-Built PC: Mage</Link>
                    </li>
                    <li>
                        <Link to="/bestiary/thief">Pre-Built PC: Thief</Link>
                    </li>
                    <li>
                        <Link to="/bestiary/cleric">Pre-Built PC: Cleric</Link>
                    </li>
                    <li>
                        <Link to="/bestiary/ankithlakith">Example PC: Ankithlakith</Link>
                    </li>
                    <li>
                        <Link to="/bestiary/caverat">Example Cave Rat Monster</Link>
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
                </ul>
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
                    <li>
                        <Link to="/rules/gear">Adventuring Equipment</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Home;