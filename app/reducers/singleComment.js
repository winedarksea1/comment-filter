const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
import axios from 'axios';
import store from '../store';
let singleComment = [];

export const receiveComment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment: comment
});

export const onSingleCommentEnter = function (nextRouterState) {
  let id = nextRouterState.params.id;
  let thunk = fetchSingleComment(id);
  store.dispatch(thunk);
};

export const fetchSingleComment = (id) => dispatch => {
  axios.get(`/api/comments/${id}`)
  .then(res => dispatch(receiveComment(res.data)))
  .catch(err => console.error('Fetching comment unsuccessful', err));
};

// export const fetchSingleComment = function (id) {
//   const thunk = function (dispatch) {
//     fetch(`/api/comments/${id}`)
//       .then(res => res.json())
//       .then(comment => {
//         const commentsAction = receiveComment(comment);
//         dispatch(commentsAction);
//       });
//   };
//   return thunk;
// };

export default function singleCommentReducer(state = singleComment, action) {
  switch(action.type) {
    case RECEIVE_SINGLE_COMMENT:
      return action.comment;
    default: return state;
  }
}
