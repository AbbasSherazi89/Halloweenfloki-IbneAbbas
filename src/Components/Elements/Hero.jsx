import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
const Hero = () => {
  return (
    <div id="hero" className="container-fluid hero-container">
      <div className="container">
        <div className="row hero-row">
          <div className="col-md-6 nosifier text-white fw-bold text-center">
            <p className="nosifier-text">Halloween Floki</p>
          </div>
          <div className="col-md-6 hero-col2">
            <div className="card hero-card">
              <div className="card-body text-center text-white herocard-body">
                <h5 className="card-title pb-4">$FLOH Live Now!</h5>
                <button className="btn rounded-5 border buy" type="submit">
                  {" "}
                  Buy{" "}
                </button> <br/>
                <div className="d-block">
                <FaTwitterSquare className="icons-twitter" />
                <IoIosSend className="icons-hero ms-3" />
                </div>
                <p className="pt-4 text-center lastText-hero">Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
