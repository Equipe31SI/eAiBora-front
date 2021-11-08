import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/recife.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Iae, bora? </h1>
        <p> CULTURA EM MOVIMENTO </p>
        <Link to="/menu">
          <button> Ver Eventos </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
