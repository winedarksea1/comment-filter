import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div>
    <div className="header">
      <h1>Welcome to the Comments Section</h1>
    </div>

    <div className="main-content">
      <h3>Comments</h3>
      <button type="button" className="btn btn-secondary btn-xs" id="all-comments-button">Get All Comments</button>
      <div className="list-group" id="comment-list">
        {
          props.comments.data ? props.comments.data.map(comment => (
            <div className="wrapper" key={comment.comment_id}>
              <Link to={`/comments/${comment.comment_id}`}>
                <div className="comment-wrapper">
                  <div className="list-group-item">{comment.message}</div>
                </div>
              </Link>
            </div>
          )) : (<p>No Comments</p>)
        }
      </div>
    </div>

  </div>
)
