import { combineReducers } from 'redux';
import commentsReducer from './comments';
import singleCommentReducer from './singleComment';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  comments: commentsReducer,
  singleComment: singleCommentReducer
});

export default rootReducer;
