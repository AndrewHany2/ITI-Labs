import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../app/actions/actions";

function Register({ history }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const userAddingStatus = useSelector((state) => state.users.userAdded);

  const uploadImageHandler = () => {
    const fd = new FormData();
    fd.append("name", name);
    fd.append("age", age);
    fd.append("userImage", img);
    return fd;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(userAddingStatus);
    if (userAddingStatus) history.push("/");
  });
  return (
    <>
      <div style={{ width: "50%" }} className="m-3">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="formFile" className="form-label">
            Default file input example
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={(event) => {
              setImg(event.target.files[0]);
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const fd = uploadImageHandler();
            dispatch(postUser(fd));
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Register;
