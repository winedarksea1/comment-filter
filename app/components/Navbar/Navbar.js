import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
          <nav id="navbar" class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">WebSiteName</a>
              </div>
            </div>
          </nav>
        </div>
      )
    }
};
