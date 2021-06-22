import React from "react";
import { withRouter } from "react-router-dom";

function Artist({ artist, history }) {
  return (
    <div class="col">
      <div class="card">
        <img
          src={`/images/covers/${artist.cover}.jpg`}
          class="card-img-top"
          alt="..."
        />
        <div
          class="card-body"
          onClick={() => {
            history.push(`/artists/${artist.id}`);
          }}
        >
          <h5 class="card-title text-center fw-bolder">{artist.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Artist);
