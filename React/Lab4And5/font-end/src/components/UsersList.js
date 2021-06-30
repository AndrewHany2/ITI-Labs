import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers, filterUsersByName } from "../app/actions/actions";
import { withRouter } from "react-router-dom";

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.filterUsersByName();
  }
  render() {
    return (
      <>
        <div>
          {this.props.filteredUsers ? (
            <div>
              <ol className="list-group">
                {this.props.filteredUsers.map((user, index) => {
                  return (
                    <li
                      onClick={(e) => {
                        this.props.history.push(`/profile/${user._id}`);
                      }}
                      style={{ cursor: "pointer" }}
                      key={index}
                      className="list-group-item d-flex justify-content-center"
                    >
                      <div className="ml-2 mr-auto">
                        <div className="font-weight-bold">{user.name}</div>
                      </div>
                      <div>
                        <img
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                            objectPosition: "50% 0%",
                          }}
                          src={`/${user.userImage}`}
                          alt="as"
                        />
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
export default connect(
  (state) => {
    return { filteredUsers: state.filteredUsers.list };
  },
  (dispatch) => {
    return bindActionCreators({ getUsers, filterUsersByName }, dispatch);
  }
)(withRouter(UsersList));
