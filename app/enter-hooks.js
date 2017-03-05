import { receiveComments } from './reducers/comments';
//import { receiveComment } from './reducers/singleComment';
import store from './store';
import axios from 'axios';

// export const onAppEnter = () => {
//   return fetch('/api/comments')
//   .then(res => res.json())
//   .then(comments => {
//     let commentsAction = receiveComments(comments);
//     store.dispatch(commentsAction);
//   });
// };

export const fetchComments = () => dispatch => {
  axios.get('/api/comments')
  .then(res => dispatch(receiveComments(res)))
  .catch(err => console.error('Fetching comments unsuccessful', err));
};
