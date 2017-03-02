import { connect } from 'react-redux';
import AllComments from './AllComments';

const mapStateToProps = function (state) {
  return {
    comments: state.comments
  };
};


const AllCommentsContainer = connect(mapStateToProps, null)(AllComments);
export default AllCommentsContainer;
