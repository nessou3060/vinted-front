import React from "react";
import Header from "../composant/Header";
const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Header></Header>
      {props.offers.map((offer, i) => {
        return (
          <div>
            <h1 className="name">{offer.owner.account.username}</h1>
            <img style={{ height: 80 }} src={offer.owner.account.avatar.url} />
            <img style={{ height: 180 }} src={offer.product_image.url} />
            <h3>{offer.product_price}€</h3>

            {offer.product_details.map((detail, i) => {
              return (
                <div>
                  <p className="taille">{detail.TAILLE}</p>
                  <p className="detail">{detail.MARQUE}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
