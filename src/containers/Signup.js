import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",

        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log("rrrr", response.data);
      if (response.data.token) {
        setUser(response.data.token);
        // Naviguer vers "/" Home
        history.push("/");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup">
      <h1>S'inscrire</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="nom"
          type="text"
          placeholder="Nom d'utilisateur "
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <input
          className="nom"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input
          className="nom"
          type="password"
          placeholder="Mot de passe "
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <br />

        <input type="checkbox" />
        <span>S'inscrire à notre newsletter</span>

        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>

        <input type="submit" value="S'inscrire" />
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
