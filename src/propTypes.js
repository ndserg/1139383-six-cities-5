import PropTypes from 'prop-types';

export const OfferProps = {
  id: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
  consumerItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  inBookmarks: PropTypes.bool.isRequired,
  maxRating: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  priceText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export const CommentProps = {
  id: PropTypes.number.isRequired,
  offer: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  userRating: PropTypes.number.isRequired,
};
