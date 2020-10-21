import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {OfferProps} from "../../propTypes";

export default class Cards extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this.handleHover = (activeCard) => {
      this.setState({activeOffer: activeCard});
    };
  }

  render() {
    const {offers, onHeaderClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, id) => (
          <Card
            key={id}
            offer={offer}
            onHeaderClick={onHeaderClick}
            onMouseOverCard={this.handleHover}
          />
        ))}
      </div>
    );
  }
}

Cards.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProps)).isRequired,
  onHeaderClick: PropTypes.func.isRequired
};
