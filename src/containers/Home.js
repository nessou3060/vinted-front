import React from "react";
import { Link } from "react-router-dom";
import Photo from "../assets/photo.jpeg";
const Home = (props) => {
  console.log(props);
  return (
    <div>
      <img className="photo" src={Photo} />
      <div className="home">
        {props.offers.map((offer, i) => {
          return (
            <div key={i}>
              <div className="home2">
                <spa className="name">{offer.owner.account.username}</spa>

                <img
                  className="avatar"
                  style={{ height: 80 }}
                  // chager lurl dans cloudinary url
                  // src={
                  //   offer.owner.account.avatar.secure_url
                  //     ? offer.owner.account.avatar.secure_url
                  //     : null
                  // }
                />
                <div className="article">
                  <Link to={`/offer/${offer._id}`} key={offer._id}>
                    <img className="url" src={offer.product_image.url} />
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
