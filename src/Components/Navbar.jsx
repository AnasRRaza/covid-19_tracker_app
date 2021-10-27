import React from 'react';
import CovidImage from "../images/image.png";

const Navbar = () => {
  return (
    <div className="ImageContainer">
      <img className="CovidImage" src={CovidImage} alt="Covid" />
    </div>
  )
}

export default Navbar;
