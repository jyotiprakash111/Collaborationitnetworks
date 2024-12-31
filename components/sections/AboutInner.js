import Link from "next/link";
import React from "react";

const AboutOne = () => {
  return (
    <>
      <section className='about-section'>
        <div className='auto-container'>
          <div className='row'>
            <div
              className='content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight'
              data-wow-delay='600ms'
            >
              <div className='inner-column'>
                <div className='sec-title'>
                  <span className='sub-title'>About Our Company</span>
                  <h2>A stable network is the key</h2>
                  <div className='text'>
                    Collaboration IT Networks (CIN) is an IT solutions provider,
                    primary focus on Cisco Collaboration (Unified
                    Communications) and Microsoft Teams Solutions including
                    Direct Routing. At CIN our goal is to simplify the complex
                    technology solutions. We aim to deploy UC solutions based on
                    best practices and used case experience for maximum
                    utilization of technology. We believe in working as an
                    extension of our clients in order to deliver seamless
                    services without process complications. ​ Our leadership has
                    experience of more than 10 years in delivering UC solutions
                    with vast experience in Cisco collaboration solutions. The
                    leadership has exposure of working in Cisco TAC and with
                    other Cisco partners which helps in designing optimized
                    solutions aligned with Cisco’s best practices to help our
                    esteemed customer in meeting their business objectives. We
                    have exposure to delivering services globally around the
                    clock. We also have been exposed to some fast track
                    deployments considering tight customer timelines.
                    Collaboration as a technology is an essential /valuable part
                    of our daily life and we aim to make it easy to use for
                    everyone.
                  </div>
                </div>
                <div className='content-box'>
                  <div className='info-box'>
                    <h5 className='title'>
                      High Quality IT Solutions for Startup
                    </h5>
                    <Link href='/#' className='read-more'>
                      More <i className='fa fa-long-arrow-alt-right' />
                    </Link>
                  </div>
                  <div className='about-block'>
                    <i className='icon flaticon-business-018-startup' />
                    <h5 className='title'>Manage Tech Services </h5>
                    <div className='text'>
                      We’ve designed a culture that allows our stewards to
                      assimilate
                    </div>
                  </div>
                  <div className='about-block'>
                    <i className='icon flaticon-business-027-world' />
                    <h5 className='title'>Internal Networking</h5>
                    <div className='text'>
                      We’ve designed a culture that allows our stewards to
                      assimilate.
                    </div>
                  </div>
                </div>
                <div className='btm-box'>
                  <Link href='/page-about' className='theme-btn btn-style-one'>
                    <span className='btn-title'>Discover more</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className='image-column col-xl-6 col-lg-5 col-md-12 col-sm-12'>
              <div className='inner-column wow fadeInLeft'>
                <figure className='image-1 overlay-anim wow fadeInUp'>
                  <img src='/images/resource/about2.jpg' title='Oitech' />
                </figure>
                <figure className='image-2 overlay-anim wow fadeInRight'>
                  <img src='/images/resource/about2.jpg' title='Oitech' />
                </figure>
                <div className='experience bounce-y'>
                  <img
                    src='/images/resource/image-1.jpg'
                    title='Oitech'
                    className='icon'
                  />
                  <strong>3600+</strong> Satisfied Client
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOne;
