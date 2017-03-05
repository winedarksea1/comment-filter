import { connect } from 'react-redux';
import SingleComment from './SingleComment';

const mapStateToProps = (state) => ({
  singleComment: state.singleComment
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchSingleCommentData: () => {
//     dispatch(fetchSingleComment);
//   }
// });

const SingleCommentContainer = connect(mapStateToProps, null)(SingleComment);
export default SingleCommentContainer;
