import React, { Component } from "react";
import UsersList from "../components/UsersList";
import Filter from "../components/Filter";

class Home extends Component {
  render() {
    return (
      <>
        <Filter></Filter>
        <UsersList></UsersList>
      </>
    );
  }
}

export default Home;
