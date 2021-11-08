import React from "react";
import { Link } from "react-router-dom";
import BannerSocial from "../assets/social_img/social1.jpg";
import "../styles/Social.css";

function Social() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerSocial})` }}>
      <div className="headerContainer">
        <h1 style={{fontSize: 35, color: "white", display: 'flex',  justifyContent:'center', alignItems:'center'}}> Campus Party 2022 </h1>
        <p style={{fontSize: 20, color: "white"}} > Sexta, 01 de julho de 2022, às 9h</p>
        <p style={{fontSize: 20, color: "white"}}> Local: Centro de Convenções </p>
        <p style={{fontSize: 15, color: "white"}}> Entrada: R$160 + R$ 35 (camping)</p>
        <p style={{fontSize: 15, color: "white"}}> 300 horas de conteúdo sobre tecnologia, inovação, criatividade, ciência, empreendedorismo e entretenimento digital. Tudo concentrado nos seis palcos, no Centro de Convenções de Pernambuco.</p>
        <Link to="/menu">
        </Link>
      </div>
    </div>
  );
}

export default Social;
