import React from "react";
import { Link } from "react-router-dom";
import BannerSocial from "../assets/social_img/social3.jpg";
import "../styles/Social.css";

function Social3() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerSocial})` }}>
      <div className="headerContainer">
        <h1 style={{fontSize: 35, display: 'flex',  justifyContent:'center', alignItems:'center'}}> Atletismo nas escolas </h1>
        <p style={{fontSize: 20}}> Sábado, 18 de dezembro de 2021, às 10h</p>
        <p style={{fontSize: 20}}> Local: Ginásio de Esportes Geraldo Magalhães (Geraldão) </p>
        <p style={{fontSize: 15}}> Entrada: gratuita</p>
        <p style={{fontSize: 15}}> O atletismo dentro do contexto escolar pode ser considerado um conteúdo de fundamental importância, pois as capacidades e habilidades motoras por ele exploradas servem de auxilio e de base para o aprimoramento e a execução de movimentos que serão utilizados em outras modalidades esportivas. Nesse evento, iremos reunir uma competição envolvendo diversas escolas pré-selecionadas da cidade do Recife.</p>
        <Link to="/menu">
        </Link>
      </div>
    </div>
  );
}

export default Social3;
