import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../app/actions/actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FILE_SIZE = 1024 * 1024 * 20;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: yup.string().email(),
  img: yup
    .mixed()
    .test("fileSize", "File too large", (value) => {
      try {
        if (value.length === 0) {
          return true;
        } else return value[0].size <= FILE_SIZE;
      } catch (error) {
        console.log(error);
      }
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      try {
        if (value.length === 0) {
          return true;
        } else return SUPPORTED_FORMATS.includes(value[0].type);
      } catch (err) {}
    }),
});

function EditUSer({ history }) {
  const userEdit = useSelector((state) => state.userEdit);
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: userDetails.details.name,
      email: userDetails.details.email,
      img: "",
    },
  });

  const uploadImageHandler = (data) => {
    const fd = new FormData();
    fd.append("name", data.name);
    fd.append("id", userDetails.details._id);
    fd.append("email", data.email);
    fd.append("userImage", data.img[0]);
    return fd;
  };

  const onSubmit = (d) => {
    const fd = uploadImageHandler(d);
    dispatch(editUser(fd));
  };

  useEffect(() => {
    if (!userDetails.success) {
      history.push("/");
    }
    if (userEdit.success) {
      history.push("/");
    }
  });

  return (
    <>
      {userEdit.loading ? (
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
              <img
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "50% 0%",
                }}
                src={`http://localhost:8000/${userDetails.details.userImage}`}
                alt="as"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                change your photo
              </label>
              <input
                className={
                  errors.img ? "form-control is-invalid" : "form-control"
                }
                type="file"
                id="formFile"
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

export default EditUSer;
