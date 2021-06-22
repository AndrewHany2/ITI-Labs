import React, { useState } from "react";
import Form from "react-validation/build/form";

function Register(props) {
  const[name,setName]=useState("")
    const[age,setAge]=useState("")
  return (
    <>
      <Form>
        <div style={{ width: "50%" }} class="m-3">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" value={name} onClick={(e)=>{setName(e.target.value)}}/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" >
              Age
            </label>
            <input type="text" class="form-control" value={age} onClick={(e)=>{setAge(e.target.value)}}/>
          </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Default file input example</label>
              <input class="form-control" type="file" id="formFile"/>
            </div>
        </div>
      </Form>
    </>
  );
}

export default Register;
