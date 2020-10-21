import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Property from "../property/property";
import {OfferProps} from "../../propTypes.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };

    this.onHeaderClick = (activeCard) => {
      this.setState({activeOffer: activeCard});
    };
  }

  _renderMainPage() {
    const {rentsCount, offers} = this.props;
    const {activeOffer} = this.state;

    if (activeOffer === null || activeOffer >= offers.length) {
      return (
        <Main
          rentsCount={rentsCount}
          offers={offers}
          onHeaderClick={this.onHeaderClick}
        />
      );
    }
    return (
      <Property
        offer={this.state.activeOffer}
      />);
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainPage()}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/offer/:id" render={(routeProps) => <Property routeProps={routeProps} offers={offers}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  rentsCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProps)).isRequired
};

export default App;
