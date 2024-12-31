import Link from 'next/link';
import React, { useState } from 'react';
import Accordion from '../elements/Accordion';

const serviceListData = [
  {
    title: "Network Design",
    linkurl: "page-service-details",
    content: "Network Design content goes here. We’ve designed a culture that allows our stewards to assimilate.",
    img:"/images/services/networkdesign.jpg"
  },
  {
    title: "Deployment",
    linkurl: "page-service-details",
    content: "Deployment content goes here. We’ve designed a culture that allows our stewards to assimilate.",
    img:"/images/services/deployment.jpg"
  },
  {
    title: "Tech Support 24x7",
    linkurl: "page-service-details",
    content: "Tech Support 24x7 content goes here. We’ve designed a culture that allows our stewards to assimilate.",
    img:"/images/services/techsupport.jpg"
  },
  {
    title: "QA & Testing",
    linkurl: "page-service-details",
    content: "QA & Testing content goes here. We’ve designed a culture that allows our stewards to assimilate.",
    img:"/images/services/qatesting.jpg"
  },
  {
    title: "Monitoring Service",
    linkurl: "page-service-details",
    content: "Monitoring Service content goes here. We’ve designed a culture that allows our stewards to assimilate.",
    img:"/images/services/monitoring.jpg"
  },
  {
    title: "Dedicated Team",
    linkurl: "page-service-details",
    content: "Dedicated Team content goes here. We’ve designed a culture that allows our stewards to assimilate.",
    img:"/images/services/dedicatedteam.jpg"
  },
];

const Serviceone = ({ alternate }) => {
  const [currentService, setCurrentService] = useState(serviceListData[0]);

  const handleServiceClick = (service) => {
    setCurrentService(service);
  };

  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                    <div className="service-list">
                      <ul>
                        {serviceListData.map((eachitem, index) => (
                          <li key={index}>
                            <a
                              className={currentService.title === eachitem.title ? 'current' : ''}
                              href="#!"
                              onClick={() => handleServiceClick(eachitem)}
                            >
                              <i className="fas fa-angle-right"></i>
                              <span>{eachitem.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget banner-widget">
                  <div className="widget-content" style={{ backgroundImage: 'url(images/background/5.jpg)' }}>
                    <div className="shape" style={{ backgroundImage: 'url(/images/resource/overlay-shape.png)' }}></div>
                    <div className="content-box">
                      <div className="icon-box">
                        <i className="lnr lnr-icon-pie-chart"></i>
                      </div>
                      <h3>We are happy to Help you</h3>
                      <Link href="page-contact" className="theme-btn btn-style-two bg-light">
                        <span className="btn-title text-black"> Contact us</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget service-sidebar-single mt-5">
                  <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                    <Link href="#" className="theme-btn btn-style-one d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span> download pdf file
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                
                <img src={currentService.img} title="Oitech" />
                <h2 className="mt-4">{currentService.title}</h2>
                <p>{currentService.content}</p>

                <div className="mt-25">
                  <h3>Frequently Asked Questions</h3>
                  <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <Accordion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Serviceone;
