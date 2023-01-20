import NavBar from '@/modules/nav_bar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    );
};

export default Layout;