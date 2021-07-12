import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Home';
import RpgBasics from './rules/RpgBasics';
import DiceMechanics from './rules/DiceMechanics';
import CharacterCreation from './rules/CharacterCreation';
import Karma from './rules/Karma';

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
    }
]);
export default MainRouting;