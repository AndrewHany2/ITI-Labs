import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserById } from "../app/actions/actions";
import { Modal, Button } from "react-bootstrap";

function UserDetails({ history, match }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const userDelete = useSelector((state) => state.userDelete);

  useEffect(() => {
    const id = match.params.id;
    if (userDelete.success) {
      history.push("/");
    } else dispatch(getUserById(id));
  }, [userDelete.success]);

  return (
    <>
      {!userDetails.details ? (
        <div className="text-center">
          <div
            className="spinner-border"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          ></div>
        </div>
      ) : (
        <>
          <div style={{ display: "flex" }} className="mt-5">
            <ul
              className="list-group"
              style={{ alignSelf: "flex-start", flex: "0 0 60vw" }}
            >
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ml-2 mr-auto">
                  <div className="font-weight-bold">Name</div>
                  {userDetails.details.name}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ml-2 mr-auto">
                  <div className="font-weight-bold">Email</div>
                  {userDetails.details.email}
                </div>
              </li>
            </ul>
            <div className="align-self-end">
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  objectPosition: "50% 0%",
                }}
                src={`/${userDetails.details.userImage}`}
                alt="as"
              />
            </div>
          </div>
          <div style={{ display: "block" }} className="m-5">
            <button
              onClick={() => {
                history.push(`/edit/${match.params.id}`);
              }}
              type="button"
              className="btn btn-outline-warning "
            >
              Edit
            </button>
            <button
              onClick={handleShow}
              type="button"
              className="btn btn-outline-danger ml-3"
            >
              Delete
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Delete ?</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure about deleting ?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(deleteUser(userDetails.details._id));
                    handleClose();
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </>
      )}
    </>
  );
}

export default UserDetails;
