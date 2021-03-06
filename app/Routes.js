import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import { fetchComments } from './enter-hooks';
import AllCommentsContainer from './components/AllComments/AllCommentsContainer';
import AllComments from './components/AllComments/AllComments';
import Navbar from './components/Navbar/Navbar';
import AppContainer from './components/App/AppContainer';
import SingleCommentContainer from './components/SingleComment/SingleCommentContainer';
import { onSingleCommentEnter } from './reducers/singleComment';
import PostCommentContainer from './components/PostComment/PostCommentContainer';
import store from './store';
/* -----------------    COMPONENT     ------------------ */


const Routes = ({ fetchInitialData }) => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} onEnter={fetchInitialData}>
      <IndexRoute component={AllCommentsContainer} />
      <Route path="/navbar" component={Navbar} />
      <Route path="/AllComments" component={AllCommentsContainer} />
      <Route path="/comments/:id" component={SingleCommentContainer} onEnter={onSingleCommentEnter} />
      <Route path="PostComment" component={PostCommentContainer} />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
 fetchInitialData: () => {
    dispatch(fetchComments())
    // what other data might we want to fetch on app load?
  }
})

export default connect(mapProps, mapDispatch)(Routes);
