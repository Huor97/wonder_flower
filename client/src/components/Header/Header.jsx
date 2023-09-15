import React from "react";
import Banner from "./HeaderComponent/Banner";
import Nav from "./HeaderComponent/Nav";
import Bandeau from "../Home/Articl/Bandeau";

const Header = ({ loggin, setLoggin }) => {
  console.log("header", loggin);

  return (
    <>
      <Banner />
      <Nav loggin={loggin} setLoggin={setLoggin} />
      <Bandeau />
    </>
  );
};

export default Header;
