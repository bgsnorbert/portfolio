import React from "react";
import "./style.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer>
      <div> &copy; {currentDate} bn. </div>
    </footer>
  );
};

export default Footer;
