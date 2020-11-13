import React from "react";

import Logo from "../assets/logo.png";
const Header = (props) => {
  console.log(props);
  return (
    <div className="container">
      <img className="logo " src={Logo} />
      <div className="button">
        <button onClick={() => {}}>s'inscrire</button>
        <button onClick={() => {}}>se connecter</button>
        <button onClick={() => {}}>vend t'es article</button>
      </div>
    </div>
  );
};

export default Header;
