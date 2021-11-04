import React from 'react';
import Header from './components/Header';

const Layout1 = ({ children }) => (
    <React.Fragment>
        <Header />

        {children}

    </React.Fragment>
);

export default Layout1;
