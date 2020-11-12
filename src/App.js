import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";

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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/http://localhost:3000">Home</Link>
            </li>
            <li>
              <Link to="/http://localhost:3000/offer/:id">Offer</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/http://localhost:3000/offer/:id">
            {/* <Offer /> */}
            <a>
              <Link to="/">Home</Link>
            </a>
          </Route>
          <Route path="/http://localhost:3000">
            <Home offers={data.offers} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
