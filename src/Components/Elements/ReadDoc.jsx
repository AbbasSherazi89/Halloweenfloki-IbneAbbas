import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const ReadDoc = () => {
  return (
    <>
      <div id="document" className="container-fluid readfluid-cont">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="card card-read p-4">
                <div className="card-body">
                  <p className="fw-bold mb-3 line-heading"> Whitepaper</p>
                  <h3 className="card-title">Read Our Documents</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 read-img">
                        <AiFillCheckCircle className="check-icon" /> KYC
                      </div>
                      <div className="col-md-3 read-img">
                        <AiFillCheckCircle className="check-icon" /> Audit
                      </div>
                      <div className="col-md-3 read-img">
                        <AiFillCheckCircle className="check-icon" /> Whitepaper
                      </div>
                      {/* <div className="col-md-2 read-img"></div> */}
                      <div className="col-md-3 read-img">
                        <img
                          className="img-fluid"
                          src="assets/hollow.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-warning dropdown-toggle text-white"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Download
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadDoc;
