import React from "react";
import Comment from "../comment/comment";
import PropTypes from "prop-types";
import {COMMENTS} from "../../mocks/comments";

const Comments = ({offer}) => {

  return (
    <ul className="reviews__list">
      {COMMENTS.map((comment) => (offer.id === comment.offer ?
        <Comment key={comment.id} maxRating={offer.maxRating} comment={comment}/> : ``))}
    </ul>
  );
};

Comments.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default Comments;
