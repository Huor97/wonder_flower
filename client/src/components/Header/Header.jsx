import React, { useState } from 'react';
import Banner from './HeaderComponent/Banner';
import Nav from './HeaderComponent/Nav';

const Header = ({ loggin, setLoggin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const transitionNav = () => {
    window.scrollY > 300 ? setIsScrolled(true) : setIsScrolled(false);
  };

  const fixedNav = () => {
    window.scrollY > 900 ? setIsActive(true) : setIsActive(false);
  };

  useState(() => {
    document.addEventListener('scroll', transitionNav);
    document.addEventListener('scroll', fixedNav);
  });

  return (
    <div
      className={`z-10 ${
        isActive ? '' : 'fixed top-0 left-0 right-0 duration-700'
      }    ${
        isScrolled
          ? ' bg-green-900 shadow-lg shadow-blue-500/30 transition-colors duration-700 ease-in-out '
          : 'transparent'
      } `}
    >
      <Banner />

      <Nav loggin={loggin} setLoggin={setLoggin} />
    </div>
  );
};

export default Header;
