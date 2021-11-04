import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';

const T3dTheme = ({ children }) => {
    const theme =createMuiTheme();

    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
};

export default T3dTheme;
