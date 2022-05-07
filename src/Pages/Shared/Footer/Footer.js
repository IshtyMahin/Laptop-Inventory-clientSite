import React from "react";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer id="footer" className="text-center bg-dark text-white d-flex flex-column align-items-center py-3 bold">
      <p> <small>Copyright <span className="text-danger">&copy; {year} </span> Ishty.All right reserved</small></p>
      
    </footer>
  );
};

export default Footer;