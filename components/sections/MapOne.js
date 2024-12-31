import Link from 'next/link';
import React from 'react';

const MapOne = () => {
    return (
        <>
            <section className="map-section">
                {/* <iframe className="map" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+=&z=14&ie=UTF8&iwloc=B&output=embed">
                </iframe> */}
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224368.48947028254!2d76.99010049453125!3d28.5169384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7ba606d17a5%3A0x24da4b3fc174f6e!2sCollaboration%20IT%20Networks%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1734697435239!5m2!1sen!2sin"></iframe>
                <div className="branches-outer">
                    <div className="auto-container">
                        <div className="row">
                            {/* Branch Block */}
                            <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">New York</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Branch Block */}
                            <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">Washington DC</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Branch Block */}
                            <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">Las Vegas</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MapOne;