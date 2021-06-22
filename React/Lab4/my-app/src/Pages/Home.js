import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends Component {
  render() {
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, actions)(Home);
