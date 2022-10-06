import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container-fluid footer-container"></div>
        <div className="container">
          <hr />
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Copyright © 2022. All rights reserved by Halloween Floki. Contact:
          hello@halloweenfloki.co
        </div>
      </footer>
    </>
  );
};

export default Footer;
