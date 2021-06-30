import React from "react";
import { useDispatch } from "react-redux";
import { filterUsersByName } from "../app/actions/actions";
import { InputGroup, FormControl } from "react-bootstrap";

function Filter(props) {
  const dispatch = useDispatch();
  return (
    <>
      <InputGroup
        style={{ width: "50%" }}
        className="input-group mb-3 col-6 offset-3 mt-3"
      >
        <FormControl
          placeholder="Filter by name"
          aria-label="Filter by name"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            dispatch(filterUsersByName(e.target.value));
          }}
        />
      </InputGroup>
    </>
  );
}

export default Filter;
