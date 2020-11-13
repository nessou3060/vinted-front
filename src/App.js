import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Header from "./composant/Header";
import "./App.css";
import Offer from "./containers/Offer";

export default function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
      <Header></Header>
      <div>
        <Switch>
          <Route path="/offer/:id">
            <Offer offers={data.offers} />
          </Route>
          <Route path="/">
            <Home offers={data.offers} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
