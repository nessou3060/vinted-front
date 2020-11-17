import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Logo from "../assets/logo.png";
const Header = (props) => {
  const { token, setUser } = props;
  const history = useHistory();
  console.log(props.token);
  return (
    <div className="container">
      <Link to="/">
        <img className="logo " src={Logo} />

        {token ? (
          <Link to="/publish">
            <button className="buton22" onClick={() => {}}>
              Commencer a vendre
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="buton2" onClick={() => {}}>
              Commencer a vendre
            </button>
          </Link>
        )}
      </Link>

      <input
        className="recherche"
        type="text"
        placeholder="  Recherche des articles"
      ></input>

      <div className="glob">
        {token ? (
          <button
            className="buton12"
            onClick={() => {
              setUser(null);
              history.push("/");
            }}
          >
            Se déconnecter
          </button>
        ) : (
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
          </div>
        )}

        <div className="glob2">
          {token ? (
            <Link to="/publish">
              <button className="buton2" onClick={() => {}}>
                vend t'es article
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="buton2" onClick={() => {}}>
                vend t'es article
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
