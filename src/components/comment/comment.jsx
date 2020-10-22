import React from "react";
import moment from "moment";
import {CommentProps} from "../../propTypes";
import PropTypes from "prop-types";

const Comment = ({maxRating, comment}) => {
  const {
    user,
    avatar,
    text,
    date,
    userRating
  } = comment;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ((userRating * 100 / maxRating) + `%`)}}></span>
            <span className="visually-hidden">{userRating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{moment(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

Comment.propTypes = {
  maxRating: PropTypes.number.isRequired,
  comment: PropTypes.shape(CommentProps).isRequired,
};

export default Comment;
