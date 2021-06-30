import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../app/actions/actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FILE_SIZE = 1024 * 1024 * 20;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: yup.string().required().email(),
  img: yup
    .mixed()
    .test("required", "profile image is required", (value) => {
      return value && value.length > 0;
    })
    .test("fileSize", "File too large", (value) => {
      try {
        return value && value[0].size <= FILE_SIZE;
      } catch (error) {}
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      try {
        return value && SUPPORTED_FORMATS.includes(value[0].type);
      } catch (err) {}
    }),
});

function Register({ history }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      img: "",
    },
  });

  const userCreate = useSelector((state) => state.userCreate);
  const dispatch = useDispatch();

  const uploadImageHandler = (data) => {
    const fd = new FormData();
    fd.append("name", data.name);
    fd.append("email", data.email);
    fd.append("userImage", data.img[0]);
    return fd;
  };

  const onSubmit = (d) => {
    const fd = uploadImageHandler(d);
    dispatch(createUser(fd));
  };

  useEffect(() => {
    if (userCreate.success) {
      history.push("/");
    }
  });

  return (
    <>
      {userCreate.loading ? (
        <div className="text-center">
          <div
            className="spinner-border"
            style={{ width: "10rem", height: "10rem" }}
            role="status"
          ></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ width: "50%" }} className="m-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={
                  errors.name ? "form-control is-invalid" : "form-control"
                }
                {...register("name")}
              />
              <div className="valid-feedback">Looks good!</div>
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                {errors.name?.message}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="text"
                className={
                  errors.email ? "form-control is-invalid" : "form-control"
                }
                {...register("email")}
              />
              <div className="valid-feedback">Looks good!</div>
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                {errors.email?.message}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                upload your photo
              </label>
              <input
                className={
                  errors.img ? "form-control is-invalid" : "form-control"
                }
                type="file"
                id="formFile"
                onClick={(e) => {
                  console.log(e.target.files[0]);
                }}
                {...register("img")}
              />
              <div className="valid-feedback">Looks good!</div>
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                {errors.img?.message}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Register;
