import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Ourplane = () => {
  return (
    <>
      <div className="container-fluid palnefluid-container">
        <div className="container plane-container pt-5">
          <p className="fw-bold">ROADMAP</p>
          <h2 className="fw-bold mb-5">Our Plane</h2>
          <VerticalTimeline className="mb-5">
            <VerticalTimelineElement>
              <div className="card ">
                <div className="card-body text-black ">
                  <h5 className="card-title">Phase 1</h5>
                  <p>
                    <ul>
                      <li>Team Expansion</li>
                      <li>Social Media and Community Integration</li>
                      <li>Contract Creation</li>
                      <li>Website Deployment</li>
                      <li>Audit & KYC</li>
                    </ul>
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement>
            <div className="card ">
                <div className="card-body text-black ">
                  <h5 className="card-title">Phase 2</h5>
                  <p>
                    <ul>
                      <li>Team Expansion</li>
                      <li>Social Media and Community Integration</li>
                      <li>Contract Creation</li>
                      <li>Website Deployment</li>
                      <li>Audit & KYC</li>
                    </ul>
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement>
            <div className="card ">
                <div className="card-body text-black ">
                  <h5 className="card-title">Phase 3</h5>
                  <p>
                    <ul>
                      <li>Team Expansion</li>
                      <li>Social Media and Community Integration</li>
                      <li>Contract Creation</li>
                      <li>Website Deployment</li>
                      <li>Audit & KYC</li>
                    </ul>
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement>
            <div className="card ">
                <div className="card-body text-black ">
                  <h5 className="card-title">Phase 4</h5>
                  <p>
                    <ul>
                      <li>Team Expansion</li>
                      <li>Social Media and Community Integration</li>
                      <li>Contract Creation</li>
                      <li>Website Deployment</li>
                      <li>Audit & KYC</li>
                    </ul>
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement>
            <div className="card ">
                <div className="card-body text-black ">
                  <h5 className="card-title">Phase 5</h5>
                  <p>
                    <ul>
                      <li>Team Expansion</li>
                      <li>Social Media and Community Integration</li>
                      <li>Contract Creation</li>
                      <li>Website Deployment</li>
                      <li>Audit & KYC</li>
                    </ul>
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Ourplane;
