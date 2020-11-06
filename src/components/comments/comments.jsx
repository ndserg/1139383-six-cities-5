import React from "react";
import Comment from "../comment/comment";
import PropTypes from "prop-types";
import {COMMENTS} from "../../mocks/comments";

const Comments = ({offer}) => {
  const OFFER_COMMENTS = COMMENTS.filter((comment) => (offer.id === comment.offer));

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{OFFER_COMMENTS.length}</span></h2>
      <ul className="reviews__list">
        {OFFER_COMMENTS.map((comment) => (<Comment key={comment.id} maxRating={offer.maxRating} comment={comment}/>))}
      </ul>
    </React.Fragment>
  );
};

Comments.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default Comments;
