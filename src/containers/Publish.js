import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const history = useHistory();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("price", price);
  formData.append("picture", file);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);

      if (response.data) {
        // Naviguer vers "/" Home
        history.push("/");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {}
  };

  return token ? (
    <form onSubmit={handleSubmit}>
      <div className="global1">
        <div className="input">
          <h2>Vends ton article</h2>
          <div className="ajt">
            <label className="ajt1" htmlFor="file">
              + Ajouter une photo
            </label>
          </div>
          <input
            id="file"
            className="input1"
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>
        <br />
        <div className="titedes">
          <h3>titre</h3>
          <input
            type="text"
            placeholder="ex chemise blanche"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <br />
          <h3>Décris ton article</h3>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="ex: porté quelquefois, taille correctement"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <br />
        <div className="marque2">
          <h3>Marque</h3>
          <input
            type="text"
            placeholder="ex: Zara"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
          <br />
          <h3>Taille</h3>
          <input
            type="text"
            placeholder="ex: L / 40 / 12"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
          <br />
          <h3>Couleur</h3>
          <input
            type="text"
            placeholder="ex: Fushia"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <br />
          <h3>Etat</h3>
          <input
            type="text"
            placeholder="Neuf avec étiquette"
            value={condition}
            onChange={(event) => setCondition(event.target.value)}
          />

          <br />
          <h3>Lieu</h3>

          <input
            type="text"
            placeholder="ex: Paris"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <br />
        <div className="prix6">
          <h3>Prix</h3>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <br />
        <button className="sub" type="submit">
          Ajouter
        </button>
      </div>
    </form>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { fromPublish: true },
      }}
    />
  );
};

export default Publish;
