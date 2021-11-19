import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaPen } from 'react-icons/fa';

function MenuItem({ image, name, price, link }) {
  return (
    <Link to={link}>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> <FaPen class="editIcon" size={25} /> <FaTrash class="delIcon" size={25} /> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
    </Link>
  );
}

export default MenuItem;
