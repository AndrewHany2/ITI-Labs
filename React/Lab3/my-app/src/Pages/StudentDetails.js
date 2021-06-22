import React, { useEffect, useState } from "react";

function StudentDetails(props) {
  const [artist, setArtist] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/artists/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setArtist(data);
        setLoading(false);
      });
  }, [props.match.params.id]);
  return loading ? (
    <div className="text-center">
      <div
        className="spinner-border"
        style={{ width: "15rem", height: "15rem" }}
        role="status"
      ></div>
      <p className="h1">Loading...</p>
    </div>
  ) : (
    <div className="container text-center">
      <h1
        className="fw-bold"
        onClick={() => {
          props.history.push("/");
        }}
      >
        MUSIC DB
      </h1>
      <hr style={{ color: "blue" }}></hr>
      <img
        src={`/images/covers/${artist.cover}.jpg`}
        alt={`${artist.name}`}
        width="250px"
        height="250px"
      />
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>
      <div className="card-group row-cols-2">
        {artist.albums.map((album, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`/images/albums/${album.cover}.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentDetails;
