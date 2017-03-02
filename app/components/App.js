import React from 'react';
import Navbar from './Navbar/Navbar';
import AllComments from './AllComments/AllCommentsContainer';

export default function () {

  return (
    <div id="main" className="container-fluid">

      <div className="col-xs-10">
        <AllComments />
      </div>
    </div>
  )
}
