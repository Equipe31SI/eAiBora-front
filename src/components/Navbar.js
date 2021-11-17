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

  let loginLogout

  if (!window.sessionStorage.token) {
    loginLogout = <Link to="/login"> Login </Link>
  }else {
    loginLogout = <Link onClick={logout}> Logout </Link>
  }

  async function logout (){
    window.sessionStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo"/>
        <div className="hiddenLinks">
          <Link to="/"> Início </Link>
          <Link to="/menu"> Eventos </Link>
          <Link to="/about"> Sobre </Link>
          <Link to="/contact"> Contato </Link>
          {loginLogout}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Início </Link>
        <Link to="/menu"> Eventos </Link>
        <Link to="/about"> Sobre </Link>
        <Link to="/contact"> Contato </Link>
        {loginLogout}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
