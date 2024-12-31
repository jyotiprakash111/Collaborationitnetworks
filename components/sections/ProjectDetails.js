import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';

const projectDetails = {
  date: '22 April, 2022',
  client: 'Kodesolution Ltd',
  website: 'www.domain.com',
  location: 'New York, USA',
  value: '$11,367',
};

const socialLinks = [
  { href: '#', iconClass: 'fab fa-twitter' },
  { href: '#', iconClass: 'fab fa-facebook' },
  { href: '#', iconClass: 'fab fa-pinterest-p' },
  { href: '#', iconClass: 'fab fa-instagram' },
];

const Serviceone = ({ alternate }) => (
  <section className="project-details">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="project-details__top">
            <div className="project-details__img">
              <img src="/images/resource/about2.jpg" title="Oitech" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-details__content">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="project-details__content-left">
              <h3>Here to Know About This Project</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing hidden in the middle of text...
              </p>
              <p className="mb-5">
                Beyond more stoic this along goodness hey this wow manatee mongoose one as
                since a far flustered impressive manifest far crud opened inside owing punitively
                around forewent and after wasteful telling sprang coldly and spoke less clients...
              </p>
              <h3>Project Challenges</h3>
              <p className="mb-5">
                Eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur
                turpis gilla sed sit amet finibus eros...
              </p>
              <h3>End to End Development</h3>
              <p>
                When an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged...
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="project-details__content-right">
              <div className="project-details__details-box">
                <div className="project-details__bg-shape"></div>
                <ul className="list-unstyled project-details__details-list">
                  <li>
                    <p className="project-details__client">Date</p>
                    <h4 className="project-details__name">{projectDetails.date}</h4>
                  </li>
                  <li>
                    <p className="project-details__client">Client</p>
                    <h4 className="project-details__name">{projectDetails.client}</h4>
                  </li>
                  <li>
                    <p className="project-details__client">Website</p>
                    <h4 className="project-details__name">{projectDetails.website}</h4>
                  </li>
                  <li>
                    <p className="project-details__client">Location</p>
                    <h4 className="project-details__name">{projectDetails.location}</h4>
                  </li>
                  <li>
                    <p className="project-details__client">Value</p>
                    <h4 className="project-details__name">{projectDetails.value}</h4>
                  </li>
                  <li>
                    <div className="project-details__social">
                      {socialLinks.map(({ href, iconClass }, index) => (
                        <Link key={index} href={href}>
                          <i className={iconClass}></i>
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="project-details__pagination-box">
            <ul className="project-details__pagination list-unstyled clearfix">
              <li className="next">
                <div className="icon">
                  <Link href="#" aria-label="Previous">
                    <i className="lnr lnr-icon-arrow-left"></i>
                  </Link>
                </div>
                <div className="content">Previous</div>
              </li>
              {[...Array(4)].map((_, i) => (
                <li key={i} className="count">
                  <Link href="#"></Link>
                </li>
              ))}
              <li className="previous">
                <div className="content">Next</div>
                <div className="icon">
                  <Link href="#" aria-label="Previous">
                    <i className="lnr lnr-icon-arrow-right"></i>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Serviceone;
