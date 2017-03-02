import { combineReducers } from 'redux';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  comments: commentsReducer
});

export default rootReducer;
