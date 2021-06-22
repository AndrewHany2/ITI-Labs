import { connect } from "react-redux";
import * as actions from "../actions";

import React, { Component } from "react";

class users extends Component {
  render() {
    return <>{this.renderUsers(this.props)}</>;
  }
  renderUsers({ users }) {
    if (users) {
      return users.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
          </div>
        );
      });
    } else return <p>Loading..</p>;
  }
}

export default users;
