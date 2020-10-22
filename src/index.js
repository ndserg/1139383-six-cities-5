import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {OFFERS} from "./mocks/offers";

const Settings = {
  RENTS_COUNT: 312
};

ReactDOM.render(
    <App
      rentsCount={Settings.RENTS_COUNT}
      offers={OFFERS}
    />,
    document.querySelector(`#root`)
);
