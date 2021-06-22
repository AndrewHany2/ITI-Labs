import React from "react";

function NotFound({ history }) {
  return (
    <div class="alert alert-danger d-flex align-items-center" role="alert">
      <div>404 Not Found</div>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          history.push("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
