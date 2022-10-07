import React from "react";
import {Link} from "react-scroll"
const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark sticky-top">
          <div className="container">
            <a href="/">
              <div >
                <img  src="assets/hollow.png" alt=" " width={70} />
              </div>
            </a>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav fw-bold ms-auto">
                <li className="nav-item ms-4">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="tokenomics">
                  Tokenomics
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="roadmap">
                  Roadmap
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="document">
                  Document
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link" to="faq">
                  FAQ
                  </Link>
                </li>
                <li className="nav-item text-uppercase rounded-5 border ms-4">
                  <Link className="nav-link " href="/login">
                  Mint Floh Raffle net
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
