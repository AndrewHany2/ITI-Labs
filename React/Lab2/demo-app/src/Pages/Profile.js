import React from "react";
import StudentDetails from "../Components/StudentDetails";

function Profile(props) {
  return (
    <div>
      <StudentDetails id={props.match.params.id}></StudentDetails>
    </div>
  );
}

export default Profile;
