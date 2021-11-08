import React from "react";
import { Link } from "react-router-dom";
import BannerSocial from "../assets/social_img/social2.png";
import "../styles/Social.css";

function Social2() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerSocial})` }}>
      <div className="headerContainer">
        <h1 style={{fontSize: 35, display: 'flex',  justifyContent:'center', alignItems:'center'}}> Educação Pós-pandemia </h1>
        <p style={{fontSize: 20}}> Segunda, 23 de novembro de 2021, às 18h30</p>
        <p style={{fontSize: 20}}> Local: Online </p>
        <p style={{fontSize: 15}}> Entrada: gratuita</p>
        <p style={{fontSize: 15}}> A importancia de estar atento às tendências que vieram para ficar, o que permite que as escolas se preparem para oferecer aulas de forma hibrida e eficiente para os seus estudantes. Mais informações em sympla.com.br.</p>
        <Link to="/menu">
        </Link>
      </div>
    </div>
  );
}

export default Social2;
