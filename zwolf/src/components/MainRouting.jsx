import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Home';
import RpgBasics from './rules/RpgBasics';
import DiceMechanics from './rules/DiceMechanics';
import CharacterCreation from './rules/CharacterCreation';
import Karma from './rules/Karma';
import Wealth from './rules/Wealth';
import Gear from './rules/Gear';
import Kits from './library/Kits';
import Feats from './library/Feats';
import Talents from './library/Talents';
import Fighter from './bestiary/Fighter';
import Mage from './bestiary/Mage';
import Thief from './bestiary/Thief';

const MainRouting = () => useRoutes([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/rules/rpgbasics",
        element: <RpgBasics />
    },
    {
        path: "/rules/dicemechanics",
        element: <DiceMechanics />
    },
    {
        path: "/rules/charactercreation",
        element: <CharacterCreation />
    },
    {
        path: "/rules/karma",
        element: <Karma />
    },
    {
        path: "/rules/wealth",
        element: <Wealth />
    },
    {
        path: "/rules/gear",
        element: <Gear />
    },
    {
        path: "/library/kits",
        element: <Kits />
    },
    {
        path: "/library/feats",
        element: <Feats />
    },
    {
        path: "/library/talents",
        element: <Talents />
    },
    {
        path: "/bestiary/fighter",
        element: <Fighter />
    },
    {
        path: "/bestiary/mage",
        element: <Mage />
    },
    {
        path: "/bestiary/thief",
        element: <Thief />
    }
]);
export default MainRouting;