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
      <div className="input-file-div">
        <label htmlFor="file">Ajouter une photo</label>
        <label htmlFor="file">+</label>
        <input
          id="file"
          className="input-file"
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
      </div>
      <br />
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="description"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <br />
      <input
        type="text"
        placeholder="brand"
        value={brand}
        onChange={(event) => setBrand(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="size"
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="condition"
        value={condition}
        onChange={(event) => setCondition(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <br />
      <input
        type="number"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <button type="submit">Valider</button>
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
