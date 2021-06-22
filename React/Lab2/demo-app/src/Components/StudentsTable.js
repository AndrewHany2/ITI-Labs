import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

class StudentsTable extends Component {
  constructor() {
    super();
    this.state = { temp: false };
  }
  render() {
    return (
      <div class="row">
        {this.props.students.length === 0 ? (
          <div
            style={{ width: "50%" }}
            class="ms-4 mt-5 btn btn-info"
            role="alert"
          >
            No Students
          </div>
        ) : (
          <div class="col-8 offset-2">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {this.props.students.map((student, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>
                        <Link exact to={`/students/${index}`}>
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default StudentsTable;
