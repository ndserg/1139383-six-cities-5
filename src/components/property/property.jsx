import React from "react";
import PropTypes from "prop-types";
import Comments from "../comments/comments";
import Map from "../map/map";
import Review from "../review/review";
import Cards from "../cards/cards";
import {propertyCardClasses} from "../../componentClasses";
import {OfferProps} from "../../propTypes";

class Property extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };

    this.onHeaderClick = (activeCard) => {
      this.setState({activeOffer: activeCard});
    };
  }

  render() {
    const {routeProps, offers} = this.props;
    const offer = offers.find(({id}) => id === Number(routeProps.match.params.id));

    const maxOffersCount = 3;
    const relativeOffers = (offers.length > maxOffersCount) ? offers.slice(0, maxOffersCount) : offers;

    const {
      owner,
      consumerItems,
      bedrooms,
      maxGuests,
      label,
      inBookmarks,
      maxRating,
      rating,
      images,
      price,
      priceText,
      name,
      type,
      text
    } = offer;

    const {
      firstName,
      avatar,
      isSuper,
    } = owner;

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image, id) => (
                  <div key={id} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {label === `none` ? `` :
                  <div className="property__mark">
                    {label}
                  </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {name}
                  </h1>
                  <button className={`property__bookmark-button button` + (inBookmarks ? ` property__bookmark-button--active` : ``)} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: ((rating * 100 / maxRating) + `%`)}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms > 1 ? bedrooms + ` Bedrooms` : bedrooms + ` Bedroom`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {maxGuests > 1 ? `Max ` + maxGuests + ` adults` : `Max ` + maxGuests + ` adult`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;{priceText}</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {consumerItems.map((item, id) => (
                      <li key={id} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper` + (isSuper ? ` property__avatar-wrapper--pro` : ``)}>
                      <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {firstName}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {text}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <Comments offer={offer} />
                  <Review />
                </section>
              </div>
            </div>
            <Map offers={relativeOffers} mapClass={`property__map`}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <Cards
                offers={relativeOffers}
                cardClasses={propertyCardClasses}
                onHeaderClick={this.onHeaderClick}
              />;
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProps)).isRequired,
  routeProps: PropTypes.object.isRequired,
};

export default Property;
