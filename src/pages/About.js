import React from "react";
import Encontro from "../assets/encontro.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Encontro})` }}
      ></div>
      <div className="aboutBottom">
        <h1> SOBRE </h1>
        <p className="aboutText">
        Oferecemos uma plataforma digital que canaliza de forma rápida e fácil os eventos culturais na cidade de Recife.<br />
        Aqui, os usuários serão informados de atos, celebrações e festejos por toda a cidade.<br />
        É a inserção da tecnologia com a cultura, incentivando as atividades presenciais pós-pandemia.<br />
        Fomentando a integração de artistas e grupos regionais com os cidadãos.
        </p>
      </div>
    </div>
  );
}

export default About;
