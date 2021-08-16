import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Home';
import RpgBasics from './rules/RpgBasics';
import DiceMechanics from './rules/DiceMechanics';
import CharacterCreation from './rules/CharacterCreation';
import Karma from './rules/Karma';
import Wealth from './rules/Wealth';
import Gear from './rules/Gear';
import NewKit from './library/NewKit';
import NewFeat from './library/NewFeat';
import NewTalent from './library/NewTalent';
import Kits from './library/Kits';
import Feats from './library/Feats';
import Talents from './library/Talents';
import CharSheetShell from './charSheets/CharSheetShell';
import Fighter from './bestiary/Fighter';
import Mage from './bestiary/Mage';
import Thief from './bestiary/Thief';
import Cleric from './bestiary/Cleric';
import CaveRat from './bestiary/CaveRat';
import Ankithlakith from './bestiary/Ankithlakith';

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
        path: "/library/newkit",
        element: <NewKit />
    },
    {
        path: "/library/kits",
        element: <Kits />
    },
    {
        path: "/library/newfeat",
        element: <NewFeat />
    },
    {
        path: "/library/feats",
        element: <Feats />
    },
    {
        path: "/library/newtalent",
        element: <NewTalent />
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
    },
    {
        path: "/bestiary/cleric",
        element: <Cleric />
    },
    // {
    //     path: "/bestiary/ankithlakith",
    //     element: <Ankithlakith />
    // },
    {
        path: "/bestiary/caverat",
        element: <CaveRat />
    },
    {
        path: "/bestiary/:slug",
        element: <CharSheetShell />
    }
]);
export default MainRouting;