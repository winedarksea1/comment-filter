'use strict';

import React from 'react';
//import FormError from './FormError';

export default ({ handleSubmit, handleChange, error, name, disabled }) => (
  <div className="well">
    <form
      className="form-horizontal"
      noValidate
      name="playlistForm"
      onSubmit={handleSubmit}>
      <fieldset>
        <legend>New Comment</legend>
        <div className="form-group">
          <label htmlFor="title" className="col-xs-2 control-label">Write Comment</label>
          <div className="col-xs-10">
            <input
              className="form-control"
              name="title"
              type="text"
              required
              onChange={handleChange}
              value={name} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button
              type="submit"
              className="btn btn-success"
              disabled={disabled}>
              Post
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
);
