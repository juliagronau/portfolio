import React from "react";

const Footer = () => {
  return (
    <footer id="contactanchor">
      <div className="row">
        <h5>Ich freue mich, von Dir zu hören</h5>
      </div>
      <div className="row">
        <p>Julia Gronau | juliagronau@web.de | +49 160 94 95 23 93</p>
      </div>
      <div className="row socialrow">
        <a
          href="https://www.linkedin.com/in/julia-gronau-webdevelopment-webanalyse/"
          target="blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
            alt="LinkedIn Logo"
            className="socialicons"
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
