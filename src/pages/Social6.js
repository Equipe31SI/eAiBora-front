import React from "react";
import { Link } from "react-router-dom";
import BannerSocial from "../assets/social_img/social6.jpg";
import SocialFollow from "../components/SocialFollow";
import "../styles/Social.css";

function Social6() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerSocial})`, opacity: 0.8}}>
      <div className="headerContainer">
        <h1 style={{fontSize: 35, display: 'flex',  justifyContent:'center', alignItems:'center', color: 'Magenta'}}> Campeonato de Judô </h1>
        <p style={{fontSize: 20, color: 'Magenta'}}> Segunda, 3 de dezembro de 2021, às 9h</p>
        <p style={{fontSize: 20, color: 'Magenta'}}> Local: Av. Eng. Abdias de Carvalho, S/N - Ilha do Retiro, Recife</p>
        <p style={{fontSize: 15, color: 'Magenta'}}> Entrada: 1 Kilo de alimento não perecível</p>
        <p style={{fontSize: 15, color: 'Magenta'}}> A Federação Pernambucana de Judô irá realizar o Campeonato Estadual de Judô 2021. A competição, com apoio do Governo do Estado, terá a participação de 344 atletas (225 no masculino e 119 no feminino) e 16 técnicos, representando 22 clubes. As disputas acontecerão no ginásio Marcelino Lopes, na Ilha do Retiro.</p>
        <SocialFollow />
        <Link to="/menu">
        </Link>
      </div>
    </div>
  );
}

export default Social6;
