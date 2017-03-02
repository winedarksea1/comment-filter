const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
const initialComments = [];

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments
  };
};

export default function commentsReducer(state = initialComments, action) {
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    default: return state;
  }
}
