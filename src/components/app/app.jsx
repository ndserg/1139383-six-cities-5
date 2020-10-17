import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Login from "../login/login.jsx";
import Favorites from "../favorites/favorites.jsx";
import Offer from "../offer/offer.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main rentsCount={rentsCount}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id?">
          <Offer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
