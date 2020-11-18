import React from "react";
import { Link } from "react-router-dom";
import Photo from "../assets/photo.jpeg";
const Home = (props) => {
  console.log(props);
  const { token } = props;
  console.log(token);
  return (
    <div>
      <div className="mam">
        <img className="photo" src={Photo} />

        <div className="b21">
          <h2>Prêts à faire du tri dans vos placards ?</h2>
          {token ? (
            <Link to="/publish">
              <button className="b22" onClick={() => {}}>
                Commencer a vendre
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="b22" onClick={() => {}}>
                Commencer a vendre
              </button>
            </Link>
          )}
        </div>
      </div>
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
