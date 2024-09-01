import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Favorites from "../../components/Favorites/Favorites";

function Home() {
  return (
    <div>
      <Header />

      <Favorites />
    </div>
  );
}

export default Home;
