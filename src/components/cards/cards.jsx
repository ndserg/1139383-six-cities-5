import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {OfferProps, CardClassestProps} from "../../propTypes";

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
    const {offers, cardClasses, onHeaderClick} = this.props;

    return (
      <div className={`places__list ${cardClasses.cardsList}`}>
        {offers.map((offer, id) => (
          <Card
            key={id}
            offer={offer}
            cardClasses={cardClasses}
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
  cardClasses: PropTypes.shape(CardClassestProps).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};
