import students from "../students";
import React, { Component } from "react";

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: "",
    };
  }
  componentDidMount() {
    let student = students[this.props.id];
    student.id = this.props.id;
    this.setState({ student: student });
  }

  render() {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item">ID: {this.state.student.id}</li>
          <li class="list-group-item">Name: {this.state.student.name}</li>
          <li class="list-group-item">Age: {this.state.student.age}</li>
        </ul>
      </div>
    );
  }
}

export default StudentDetails;
