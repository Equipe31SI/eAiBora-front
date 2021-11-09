import React from "react";
import { Link } from "react-router-dom";
import BannerSocial from "../assets/social_img/social5.jpg";
import SocialFollow from "../components/SocialFollow";
import "../styles/Social.css";

function Social5() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerSocial})` }}>
      <div className="headerContainer">
        <h1 style={{fontSize: 35, display: 'flex',  justifyContent:'center', alignItems:'center'}}> FICR no mercado tecnológico </h1>
        <p style={{fontSize: 20, color: 'black' }}> Segunda, 7 de março de 2022, às 18h30</p>
        <p style={{fontSize: 20, color: 'black' }}> Local: Avenida Caxangá, 3841 - Iputinga - Recife</p>
        <p style={{fontSize: 15, color: 'white' }}> Entrada: gratuita</p>
        <p style={{fontSize: 15, color: 'white' }}> O evento proporcionará aos universitários adquirir e por em práticas conhecimentos vistos em sala de aula, além de terem oportunidades de realizar novos negócios com empresas de destaque no mercado na região metropolitana.</p>
        <SocialFollow />
        <Link to="/menu">
        </Link>
      </div>
    </div>
  );
}

export default Social5;
