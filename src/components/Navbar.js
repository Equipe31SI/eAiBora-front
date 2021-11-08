import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo"/>
        <div className="hiddenLinks">
          <Link to="/"> Início </Link>
          <Link to="/menu"> Eventos </Link>
          <Link to="/about"> Sobre </Link>
          <Link to="/contact"> Contato </Link>
          <Link to="/login"> Login </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Início </Link>
        <Link to="/menu"> Eventos </Link>
        <Link to="/about"> Sobre </Link>
        <Link to="/contact"> Contato </Link>
        <Link to="/login"> Login </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
