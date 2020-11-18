import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      //   console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>ca charge !!!!!</p>
  ) : (
    <div className="offer">
      <img className="photo2" src={data.product_image.secure_url} />

      <div className="info">
        <h3 className="prix2">{data.product_price}€</h3>
        {data.product_details.map((elem, i) => {
          const keys = Object.keys(elem); // ["MARQUE"]

          console.log(keys[0]);
          return (
            <div key={i} className="info1">
              <p className="info4">{keys[0]}</p>{" "}
              <p className="info5">{elem[keys[0]]}</p>
              {/* <p>{elem.TAILLE}</p>
            <p>{elem.ÉTAT}</p>
            <p>{elem.COULEUR}</p>
            <p>{elem.EMPLACEMENT}</p> */}
            </div>
          );
        })}
        <div className="info2">
          <p>{data.product_name}</p>
          <p>{data.product_description}</p>
          <p>{data.owner.account.username}</p>

          <Link
            to={{
              pathname: "/payment",
              state: { title: data.product_name, price: data.product_price },
            }}
          >
            <button className="buton5" onClick={() => {}}>
              Acheter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
