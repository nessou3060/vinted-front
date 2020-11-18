import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";
import Home from "./containers/Home";
import Header from "./composant/Header";
import "./App.css";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/login";
import Footer from "./composant/Footer";
import Publish from "./containers/Publish";
// import Payment from "./containers/Payment";

export default function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      Cookie.remove("userToken");
      // Repasser le state token à null
      setToken(null);
    }
  };
  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <Router>
      <Header token={token} setUser={setUser}></Header>
      <div>
        <Switch>
          <Route path="/offer/:id">
            <Offer offers={data.offers} />
          </Route>

          <Route path="/signup">
            <Signup setUser={setUser}></Signup>
          </Route>

          <Route path="/login">
            <Login setUser={setUser}></Login>
          </Route>
          <Route path="/publish">
            <Publish token={token}></Publish>
          </Route>
          {/* <Route path="/payment">
            <Payment></Payment>
          </Route> */}
          <Route path="/">
            <Home token={token} offers={data.offers} />
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}
