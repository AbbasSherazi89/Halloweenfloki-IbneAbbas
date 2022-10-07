import React from "react";
import {FaTwitterSquare} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
const Tokenomics = () => {
  return (
    <>
      <div id="about" className="container-fluid tokenomic-container ">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="fw-bold mb-5 line-heading">
              <p>
                 _____WHAT IS HALLOWEEN FLOKI
              </p>
              </div>
              <h3 className="token-h3 mb-5">
                From the Team That Brought You Valentine Floki
              </h3>
              <p className="token-p mb-5">
                Halloween Floki (FLOH) is a meme cryptocurrency token operating
                on the BEP-20 Blockchain technology (Binance Smart Chain). With
                the great experience, knowledge and wisdom of the core team,
                FLOH will attempt to peak at the highest market cap a Floki
                sub-project has ever reached, all while distributing BUSD
                rewards every day to its holders.
              </p>
              <p className="token-p mb-5">
                We are taking advantage of the upcoming Holiday to gain the
                crypto community’s attention but as the weeks go by, this
                project will gain its reputation through continuous
                communication with its investors, aggressive marketing
                campaigns, listings and constant deliveries from the leadership
                team. Backed by cryptocurrency and stock market whales, we
                invite you on this journey to the double-digits millions market
                cap!
              </p>
             <div className="mb-4">
             <FaTwitterSquare className="icons"/>
             <FiSend className="icons ms-3"/>
             </div>
            </div>
            <div className="col-md-6 token-col2">
                <img className="img-fluid pb-2" src="assets/hollow.png" alt="holloween" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
