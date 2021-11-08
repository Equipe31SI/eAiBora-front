import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price, link }) {
  return (
    <Link to={link}>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
    </Link>
  );
}

export default MenuItem;
