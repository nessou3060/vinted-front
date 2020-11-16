import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = (setUser) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      //   console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        // Naviguer vers la route "/"
        history.push("/");
      } else {
        alert("ta fait une petit erreur ");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <h1>Se connecter </h1>
      <form onSubmiit={handleSubmit}>
        <input
          className="connecter1"
          type="text"
          placeholder="Adresse email "
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />

        <input
          className="connecter1"
          type="password"
          placeholder="Mot de passe "
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />

        <input className="connecter" type="submit" value="Se connecter " />
      </form>
      <Link to="/signup">Pas encore de compte ?inscrit toi !</Link>
    </div>
  );
};

export default Login;
