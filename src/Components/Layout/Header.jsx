import React from "react";

const Header = () => {
  return (
    <>
    <div className="container-fluid bg-dark sticky-top">
        <div className="container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
         <img src="assets/hollow.png" alt="logo" width={70}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-bold ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="/">
                Tokenomics
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="/">
                Roadmap
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="/">
                Document
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="/">
                FAQ
              </a>
            </li>
            <li className="nav-item text-uppercase ms-4">
              <a className="nav-link" href="/">
                Mint Floh Raffle net
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </div>
    </>
  );
};

export default Header;