import React from 'react';

import MainRouting from './MainRouting';

const App = () => {
    return(
        <div className="App">
            <header>
                <h1>Z-Wolf RPG</h1>
            </header>
            <section>
                <MainRouting />
            </section>
            <footer>
                <p>&copy; {new Date().getFullYear()} M. Everett Bonham</p>
            </footer>
        </div>
    );
}
export default App;