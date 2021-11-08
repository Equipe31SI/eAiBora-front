import React from "react";
import { Link } from "react-router-dom";
import BannerSocial from "../assets/social_img/social4.jpg";
import "../styles/Social.css";

function Social4() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerSocial})` }}>
      <div className="headerContainer">
        <h1 style={{fontSize: 35, display: 'flex',  justifyContent:'center', alignItems:'center'}}> Recife Jazz Festival </h1>
        <p style={{fontSize: 20}}> Quinta, 13 de janeiro de 2022, às 18h</p>
        <p style={{fontSize: 20}}> Local: Cais do Imperador</p>
        <p style={{fontSize: 15}}> Entrada: gratuita</p>
        <p style={{fontSize: 15}}> Especialistas no assunto, executam um repertório de standards enfatizando a obra de John Coltrane, Thelonious Monk, Miles Davis, Charlie Parker e Tom Jobim, ao mesmo tempo em que o público pode contemplar a bela vista do Capibaribe nos fins de tarde dos sábados e das quintas-feiras, sempre às 18h.</p>
        <Link to="/menu">
        </Link>
      </div>
    </div>
  );
}

export default Social4;
