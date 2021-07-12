import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Home';

const MainRouting = () => useRoutes([
    {
        path: "/",
        element: <Home />
    }
]);
export default MainRouting;