import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  console.log(props);
  return (
    <div>
      {props.offers.map((offer, i) => {
        // console.log(offer);
        return (
          <div key={i}>
            <spa className="name">{offer.owner.account.username}</spa>

            <img style={{ height: 80 }} src={offer.owner.account.avatar.url} />
            <div className="article">
              <Link to={`/offer/${offer._id}`} key={offer._id}>
                <img style={{ height: 180 }} src={offer.product_image.url} />
                <h3 className="prix">{offer.product_price}€</h3>
              </Link>
              {offer.product_details.map((detail, i) => {
                return (
                  <div key={i}>
                    <p className="taille">{detail.TAILLE}</p>
                    <p className="marque">{detail.MARQUE}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
