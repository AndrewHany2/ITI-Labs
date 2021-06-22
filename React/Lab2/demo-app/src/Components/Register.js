import React, { Component } from "react";
import students from "../students";
class Register extends Component {
  constructor() {
    super();
    this.state = { name: "Andrew", age: "" };
  }
  handleSubmit = () => {
    let student = { name: this.state.name, age: this.state.age };
    this.props.submitCallback(student);
    students.push(student);
  };
  render() {
    return (
      <div className="ms-3" style={{ width: "50%" }}>
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="inputName"
              className="form-control"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputAge" className="col-sm-2 col-form-label">
            Age
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputAge"
              value={this.state.age}
              onChange={(e) => {
                this.setState({ age: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Register;
