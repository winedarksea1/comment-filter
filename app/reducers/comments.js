import axios from 'axios';
import browserHistory from 'react-router';

const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';
const initialComments = [];

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments
  };
};

export const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment: comment
});

export const postNewComment = comment => dispatch => {
  var body = {
  sender_id: String(Math.round(Math.random() * 100000000)),
  comment_id: String(Math.round(Math.random() * 100000000)),
  message: comment,
  parent_id: String(Math.round(Math.random() * 100000000)),
  verb: "add",
  post_id: String(Math.round(Math.random() * 100000000)),
  created_time: Math.round(Math.random() * 100000000)
  };

  axios.post('api/comments', body)
  .then(comment => dispatch(receiveNewComment(comment)))
  //.then(comment => browserHistory.push(`comments/${commend.id}`))
  .catch(err => console.error('fetching comment unsuccessful', err));
};

export default function commentsReducer(state = initialComments, action) {
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_NEW_COMMENT:
      return [...state, action.comment];
    default: return state;
  }
}
