import React from 'react';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App';

const theme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            secondary: '#b2c2e2'
        },
        background: {
            default: '#2c3034',
            paper: '#121212'
        }
    },
    typography: {
        h1: {
            fontSize: 'calc(1.625rem + 4.5vw)'
        },
        body1: {
            fontSize: '1rem'
        }
    }
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme>
                <App />
            </CssBaseline>
        </ThemeProvider>
    </React.StrictMode>
);
