import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      <img style={{ height: 180 }} src={data.product_image.secure_url} />

      {data.product_details.map((elem, i) => {
        const keys = Object.keys(elem); // ["MARQUE"]
        console.log(keys[0]);
        return (
          <div key={i}>
            <p>
              {keys[0]} {elem[keys[0]]}
            </p>
            {/* <p>{elem.TAILLE}</p>
            <p>{elem.ÉTAT}</p>
            <p>{elem.COULEUR}</p>
            <p>{elem.EMPLACEMENT}</p> */}
          </div>
        );
      })}

      <p>{data.product_name}</p>
      <p>{data.product_description}</p>
      <p>{data.owner.account.username}</p>
    </div>
  );
};

export default Offer;
