import React from "react";

function Student(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
  );
}

export default Student;
