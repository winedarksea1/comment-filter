'use strict';

import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';


export default class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
