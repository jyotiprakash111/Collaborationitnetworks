import Link from 'next/link';
import React from 'react';

const ServiceOne = () => {
    return (
        <>
            <section className="services-section">
                <div className="auto-container2">
                    <div className="sec-title text-center">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>High quality products and services<br /> that we stand behind</h2>
                    </div>
                    <div className="row">
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-3 col-sm-4 col-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/services/service-1.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-010-startup" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">Network Design</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/services/service-7.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-002-graph" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">Deployment</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/services/service-3.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-048-coin" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">Technical Support</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/services/service-3.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-048-coin" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">QA & Testing</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-3 col-sm-4 col-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/services/service-3.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-048-coin" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">QA & Testing</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceOne;
