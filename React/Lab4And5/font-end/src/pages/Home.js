import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers } from "../app/actions/actions";

class Home extends Component {
  componentDidMount() {
    this.props.getUsers();
    console.log(this.props.users);
  }
  render() {
    return (
      <div className="row">
        <div
          style={{ width: "50%" }}
          className="input-group mb-3 col-6 offset-3 mt-3"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Filter By Name"
            aria-label="Filter By Name"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Filter
          </button>
        </div>
        {this.props.users ? (
          <div>
            {this.props.users[0].name}
            {this.props.users[0].age}{" "}
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return { users: state.users.list };
  },
  (dispatch) => {
    return bindActionCreators({ getUsers }, dispatch);
  }
)(Home);
