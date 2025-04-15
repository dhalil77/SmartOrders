import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20"> 
            <Navbar />
            <main className="max-w-7xl mx-auto px-4">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
