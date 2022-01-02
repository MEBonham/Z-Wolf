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
import NewItem from './library/NewItem';
import Kits from './library/Kits';
import Feats from './library/Feats';
import Talents from './library/Talents';
import Items from './library/Items';
import ExampleScene from './examples/ExampleScene';
import CharSheetShell from './charSheets/CharSheetShell';
import Fighter from './bestiary/Fighter';
import Mage from './bestiary/Mage';
import Thief from './bestiary/Thief';
import Cleric from './bestiary/Cleric';
import CaveRat from './bestiary/CaveRat';
import BestiaryMenu from './bestiary/BestiaryMenu';
import LegalStuff from './LegalStuff';

const MainRouting = () => useRoutes([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/legal",
        element: <LegalStuff />
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
        element: <NewKit editMode={false} />
    },
    {
        path: "/library/kits",
        element: <Kits />
    },
    {
        path: "/library/kits/edit/:slug",
        element: <NewKit editMode={true} />
    },
    {
        path: "/library/newfeat",
        element: <NewFeat editMode={false} />
    },
    {
        path: "/library/feats",
        element: <Feats />
    },
    {
        path: "/library/feats/edit/:slug",
        element: <NewFeat editMode={true} />
    },
    {
        path: "/library/newtalent",
        element: <NewTalent editMode={false} />
    },
    {
        path: "/library/talents",
        element: <Talents />
    },
    {
        path: "/library/talents/edit/:slug",
        element: <NewTalent editMode={true} />
    },
    {
        path: "/library/newitem",
        element: <NewItem editMode={false} />
    },
    {
        path: "/library/items",
        element: <Items />
    },
    {
        path: "/library/items/edit/:slug",
        element: <NewItem editMode={true} />
    },
    {
        path: "/examples/:chapter",
        element: <ExampleScene />
    },
    {
        path: "/bestiary",
        element: <BestiaryMenu />
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