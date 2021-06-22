import React from "react";

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt: "" };
  }
  render() {
    return (
      <>
        <div style={{ width: "50%", height: "50%" }} class="input-group mb-3">
          <input
            value={this.state.txt}
            onChange={(e) => {
              this.setState({ txt: e.target.value });
            }}
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          ></input>
          <div class="input-group-append">
            <button
              onClick={() => {
                this.setState({ txt: "" });
              }}
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Reset
            </button>
          </div>
        </div>
        <p class="ml-3">{this.state.txt}</p>
      </>
    );
  }
}
export default First;
