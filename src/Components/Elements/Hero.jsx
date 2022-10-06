import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const Hero = () => {
  return (
    <div className="container-fluid hero-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 nosifier text-white fw-bold text-center">
            <p className="nosifier-text">Halloween Floki</p>
          </div>
          <div className="col-md-6 hero-col2">
            <div className="card hero-card" >
              <div className="card-body text-center text-white">
                <h5 className="card-title pb-4">$FLOH Live Now!</h5>
                <button className="buy mb-4" type="submit">
                  {" "}
                  Buy{" "}
                </button> <br/>
                <FaTwitterSquare className="icons-twitter" />
                <FiSend className="icons-hero ms-3" />
                <p className="pt-4">Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
