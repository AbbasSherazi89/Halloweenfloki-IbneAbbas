import React from "react";
import {BsCurrencyDollar} from 'react-icons/bs'
import {HiSpeakerphone} from 'react-icons/hi'
import {MdWaves} from 'react-icons/md'
import {AiOutlineUserSwitch} from 'react-icons/ai'

const Documents = () => {
  return (
    <>
      <div id="about" className="container-fluid doc-maincontainer">
        <div className="container pt-5">
          <div>
            <p className="fw-bold mb-3 line-heading">_____WHAT IS OUR TOKENOMICS</p>
            <p>
              At Halloween Floki, we are designing a project based on definitive
              market rules and fundamental economic principles. Halloween Floki
              reconciles a high-performance protocol with integral price
              stability features.
              <br />
              <br />
              Total Sudopply: 1 000 000 000 000 FLOH
              <br />
              <br />
              8% Buy and Sell Tax:
            </p>
            <ul>
              <li>
                4% holders rewards: Dividend tax on all transactions that will
                be distributed every 24 hours to holders in BUSD.
              </li>
              <li>
                1% liquidity: Liquidity tax on all transactions to prevent major
                price fluctuation after a large trade by filling the liquidity
                pool.
              </li>
              <li>
                3% marketing: Marketing tax on all transactions allows the
                Halloween Floki marketing team to reinvest and grow the project
                to its maximum potential.
              </li>
            </ul>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-md-3">
              <div className="card doc-card bg-transparent mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title doc-card-icon"><BsCurrencyDollar/></h5>
                  <h3 className="card-subtitle mb-2 fw-bold">
                  $BUSD Rewards
                  </h3>
                  <p className="card-text">
                  Earn automatic Binance pegged USD ($BUSD), rewards by holding your Halloween Floki Coin – 4% of every buy, transfer and sell transaction is redistributed automatically to $FLOH holders. You will receive the rewards automatically in your wallet or claim your rewards manually in our upcoming reward app tracker.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="card doc-card bg-transparent mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title doc-card-icon"><HiSpeakerphone/></h5>
                  <h3 className="card-subtitle mb-2 fw-bold">
                  Marketing
                  </h3>
                  <p className="card-text">
                  3% of every transaction will directly go to the marketing wallet in order to ensure an increase in exposure throughout advertisement platforms, social media and to secure contracts and deals with influencers. This will help FLOH achieve an international status and to be known within every community!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="card doc-card bg-transparent mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title doc-card-icon"><MdWaves/></h5>
                  <h3 className="card-subtitle mb-2 fw-bold">
                  Liquidity Pool
                  </h3>
                  <p className="card-text">
                  Our Smart contract deposits 1% from every transaction as $FLOH and $BNB into a liquidity pool which has been locked and certified. Pancakeswap fixes the low liquidity problems of DEXs through their Liquidity Pools, ensuring traders can always Buy & Sell without liquidity issues. A bigger liquidity pool will provide more stability to the $FLOH price.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="card doc-card bg-transparent mt-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title doc-card-icon"><AiOutlineUserSwitch/></h5>
                  <h3 className="card-subtitle mb-2 fw-bold">
                  Anti-Whale Mechanism
                  </h3>
                  <p className="card-text">
                  Our Anti-Whale mechanism ensures that no single transaction order can amount to more than 1% of the total supply of $FLOH. The Anti-Whale Mechanism won’t necessarily stop whales from selling, but having a maximum limit helps to prevent large selloffs and price manipulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
