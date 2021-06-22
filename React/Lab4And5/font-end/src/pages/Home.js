import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div class="row">
        <div
          style={{ width: "50%" }}
          class="input-group mb-3 col-6 offset-3 mt-3"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Filter By Name"
            aria-label="Filter By Name"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Filter
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
