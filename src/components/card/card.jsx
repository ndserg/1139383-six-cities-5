import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {OfferProps} from "../../propTypes";

const Card = ({offer, onHeaderClick, onMouseOverCard}) => {
  const {
    label,
    inBookmarks,
    maxRating,
    rating,
    images,
    price,
    priceText,
    name,
    type
  } = offer;

  const handleHover = () => {
    onMouseOverCard(offer);
  };

  const handleHeaderClick = (evt) => {
    evt.preventDefault();

    onHeaderClick(offer);
  };

  return (
    <article className="cities__place-card place-card"
      onMouseOver={handleHover}>

      {label === `none` ? `` :
        <div className="place-card__mark">
          <span>
            {label}
          </span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
          </div>
          <button className={`place-card__bookmark-button button` + (inBookmarks ? ` place-card__bookmark-button--active` : ``)} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ((Math.round(rating) * 100 / maxRating) + `%`)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 onClick={handleHeaderClick} className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape(OfferProps).isRequired,

  onHeaderClick: PropTypes.func.isRequired,
  onMouseOverCard: PropTypes.func.isRequired
};

export default Card;
