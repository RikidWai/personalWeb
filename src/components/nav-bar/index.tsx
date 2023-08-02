import React, { useState } from 'react';

import {
    AppBar,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import './styles.css';
import Scrollspy from 'react-scrollspy';

const scrollTo = async (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const scrollOffset = -3 * (window.innerWidth / 100) - 60;
        const scrollPosition = element.offsetTop;
        await window.scrollTo({ behavior: 'smooth', top: scrollPosition + scrollOffset });
    }
};

export type NavItem = {
    id: string;
    name: string;
};

type NavProps = {
    items: NavItem[];
};

function NavToggle(props: { toggleClicked: () => void }) {
    const { toggleClicked } = props;
    const theme = useTheme();

    return (
        <Button className='NavToggle' key='navDrawer' onClick={toggleClicked}>
            <AiOutlineMenu style={{ color: theme.palette.text.primary }} />
        </Button>
    );
}

function NavDrawer(props: NavProps & { isOpen: boolean; closeCallback: () => void }) {
    const { items, isOpen, closeCallback } = props;
    const drawList = (navItems: NavItem[]) => (
        <List>
            {navItems.map((item) => (
                <ListItem key={item.id} disablePadding>
                    <ListItemButton
                        onClick={async () => {
                            await scrollTo(item.id);
                            closeCallback();
                        }}
                    >
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '1.1rem' }}
                            primary={item.name}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

    return (
        <Drawer anchor='top' open={isOpen} onClose={closeCallback}>
            {drawList(items)}
        </Drawer>
    );
}

export default function NavBar(props: NavProps): React.ReactElement {
    const { items } = props;
    const [state, setState] = useState({ drawerOpen: false });
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const drawBig = (navItems: NavItem[]) => (
        <Scrollspy
            currentClassName='CurrentSection'
            offset={-85}
            items={navItems.map((item) => item.id)}
        >
            {navItems.map((item) => (
                <Button
                    className='NavButton'
                    key={item.id}
                    color='inherit'
                    onClick={async () => scrollTo(item.id)}
                >
                    {item.name}
                </Button>
            ))}
        </Scrollspy>
    );

    const toggleNav = () => {
        const { drawerOpen } = state;
        setState({ drawerOpen: !drawerOpen });
    };

    return (
        <AppBar position='sticky'>
            <Toolbar className='NavBar'>
                <Box display='flex'>
                    {matches ? drawBig(items) : <NavToggle toggleClicked={toggleNav} />}
                </Box>
            </Toolbar>
            <NavDrawer
                items={items}
                isOpen={state.drawerOpen}
                closeCallback={() => setState({ drawerOpen: false })}
            />
        </AppBar>
    );
}
