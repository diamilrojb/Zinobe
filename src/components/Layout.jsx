import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Main from './Main';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='Usuario'>
    <Menu />
    <Logo />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
);

export default Layout;
