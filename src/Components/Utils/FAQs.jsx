import React from "react";
import Faq from "react-faq-component";
const data = {
  rows: [
    {
      title: "Why is the payout in BUSD, not in $FLOH?",
      content: `This is a massive advantage of FLOH compared to other crypto projects. Halloween Floki, like every coin on the market, might fluctuate in value a lot. In contrast, BUSD is very stable, almost 1:1 to USD, which in result, reduces the risk of your investment. With decent volume, your investment will pay for itself over time.`,
    },
    {
      title: "What is slippage for?",
      content:
        "To set the tolerance on the maximum percentage of price movement you can live with. IT IS NOT A TAX.",
    },
    {
      title: "Why 8% tax and when is it applied?",
      content: `It is applied to EVERY TRANSACTION, this includes: Buys, Sells and Transfers. 4% gets redistributed to all holders, 3% to marketing, and 1% to the liquidity pool. `,
    },
    {
      title: "Why am I not receiving rewards?",
      content: `Rewards are directly related to trading volume and your bag size. The higher the volume, the more rewards you earn!`,
    },
    {
        title: "What is AMA and when do they happen?",
        content: `Ask Me Anything, (AMA) is an open space where investors can talk to the developers and ask questions. The Halloween Floki team will be holding AMA’s on a regular schedule. Make sure to join our telegram to learn more about the schedule!`,
      },
      {
        title: "What is the contract address?   ",
        content: `The address is as follows:

        0x2c0e76dade015bc390a13c1b80cc1bafd9edd326`,
      },
  ],
};

const styles = {
  bgColor: 'black',
  titleTextColor: "black",
  rowTitleColor: "white",
  rowContentColor: 'white',
  arrowColor: "white",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
const FAQs = () => {
  return (
    <div>
      <div className="container-fluid faq-cont">
        <div className="container p-4">
          <p className="fw-bold mb-3 line-heading"> FAQS</p>
          <h3 className="card-subtitle mb-4 fw-bold">
            Frequently Asked Questions
          </h3>
          <div className="row">
            <div className="col-md-6 faq-cont ">
              <Faq data={data} styles={styles} config={config} />
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="assets/question.png"
                alt="question"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
