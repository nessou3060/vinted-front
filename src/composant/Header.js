import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
const Header = (props) => {
  console.log(props);
  return (
    <div className="container">
      <Link to="/">
        <img className="logo " src={Logo} />
      </Link>
      <div className="button">
        <Link to="/signup">
          <button className="buton1" onClick={() => {}}>
            s'inscrire
          </button>
        </Link>
        <Link to="/login">
          <button className="buton1" onClick={() => {}}>
            se connecter
          </button>
        </Link>
        <button className="buton2" onClick={() => {}}>
          vend t'es article
        </button>
      </div>
    </div>
  );
};
export default Header;
