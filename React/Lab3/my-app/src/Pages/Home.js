import React, { useEffect, useState } from "react";
import Artist from "../Components/Artist";

function Home() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/artists")
      .then((response) => response.json())
      .then((data) => setArtists(data));
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/images/cover.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "10rem",
          color: "white",
        }}
      >
        MUSIC-DB
      </div>
      <h1 class="text-center">Browse the artists</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {artists.map((artist, index) => {
          return <Artist key={index} artist={artist}></Artist>;
        })}
      </div>
    </>
  );
}

export default Home;
