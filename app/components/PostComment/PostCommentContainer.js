import { connect } from 'react-redux';
import { postNewComment } from '../../reducers/comments';
import React from 'react';
import PostComment from './PostComment';
import FormValidate from './FormValidate';

class NewCommentForm extends React.Component {

  render () {
    const handleChange = this.props.handleChange;

    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <input type="text" name="title" onChange={handleChange} />
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: function (inputValue) {
      const thunk = postNewComment(inputValue);
      dispatch(thunk);
    }
  };
};

const PostCommentContainer = connect(null, mapDispatchToProps)(wrapNewPlaylistForm(NewCommentForm));

function wrapNewPlaylistForm (InnerComponent) {
  return class extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        inputValue: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmitInterceptor = this.handleSubmitInterceptor.bind(this);
    }

    handleChange (evt) {
      const value = evt.target.value.toLowerCase();
      this.setState({
        inputValue: value
      });
    }

    handleSubmitInterceptor (evt) {
      evt.preventDefault();

      const value = this.state.inputValue;
      this.props.handleSubmit(value);
    }

    render () {
      return (
        <InnerComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmitInterceptor}
        />
      );
    }
  }
}


export default PostCommentContainer;
