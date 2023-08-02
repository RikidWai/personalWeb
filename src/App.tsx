import React from 'react';

import './App.css';
import NavBar, { NavItem } from './components/nav-bar';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import History from './sections/History';
import Projects from './sections/Projects';

const navItems: NavItem[] = [
    { name: 'About Me', id: 'About' },
    { name: 'Projects', id: 'Projects' },
    { name: 'History', id: 'History' },
    { name: 'Get In Touch', id: 'Contact' }
];

function App(): React.ReactElement {
    return (
        <div className='App'>
            <NavBar items={navItems} />
            <div className='Content'>
                <AboutMe />
                <Projects />
                <History />
                <Contact />
            </div>
        </div>
    );
}

export default App;
