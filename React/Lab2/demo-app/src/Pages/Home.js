import React, { Component } from "react";
import Register from "../Components/Register";
import StudentsTable from "../Components/StudentsTable";

class Home extends Component {
  constructor() {
    super();

    this.state = { students: [], register: false };
  }

  submitCallback = (student) => {
    let studentsTemp = this.state.students;
    studentsTemp.push(student);
    this.setState({ students: studentsTemp, register: false });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            let temp = this.state.register;
            this.setState({ register: !temp });
          }}
        >
          Register
        </button>
        {this.state.register ? (
          <Register submitCallback={this.submitCallback}></Register>
        ) : null}

        <StudentsTable students={this.state.students}></StudentsTable>
      </div>
    );
  }
}

export default Home;
