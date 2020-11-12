import React from "react";
import Logo from "../assets/logo.png";
const Header = (props) => {
  console.log(props);
  return (
    <div className="container">
      <img className="logo " src={Logo} />
      <button onClick={() => {}}>s'inscrire</button>
      <button onClick={() => {}}>se connecter</button>
      <button onClick={() => {}}>vend t'es article</button>
    </div>
  );
};

export default Header;

// créer un composant Header dans lequel figurera le logo et trois boutons (s'inscrire, se connecter et vends tes articles ). Aucune intéraction dans ce composant pour l'instant !
