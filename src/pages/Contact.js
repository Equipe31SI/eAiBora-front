import React from "react";
import Violao from "../assets/violao.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Violao})` }}
      ></div>
      <div className="rightSide">

        <form id="contact-form" method="POST">
        <h1 style={{fontSize: 35}}> Contato </h1>
          <label htmlFor="name">Nome e Sobrenome</label>
          <input name="name" placeholder="Digite o seu nome" type="text" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Digite o seu email" type="email" />

          <label htmlFor="data">Local, data e hora do evento</label>
          <input name="data" placeholder="Informe aqui" type="text" />

          <label htmlFor="message">Descrição do Evento</label>
          <textarea
            rows="6"
            placeholder="Descreva o evento"
            name="message"
            required></textarea>
          
          <button type="submit"> Enviar </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
