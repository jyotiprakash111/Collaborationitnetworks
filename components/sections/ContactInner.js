import Link from 'next/link';
import React, { useState } from 'react';

const offensiveWords = ['badword1', 'badword2', 'badword3']; // Add more offensive words as needed

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidMobile = (mobile) => {
  const mobileRegex = /^[0-9]{10}$/; // Adjust according to your region
  return mobileRegex.test(mobile);
};

const containsOffensiveWords = (text) => {
  return offensiveWords.some(word => text.toLowerCase().includes(word));
};

const ContactInner = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Allow only numeric input for phone number
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!isValidMobile(formData.phone)) {
      newErrors.phone = 'Invalid mobile number';
    }

    if (containsOffensiveWords(formData.subject)) {
      newErrors.subject = 'Subject contains offensive words';
    }

    if (containsOffensiveWords(formData.message)) {
      newErrors.message = 'Message contains offensive words';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission (e.g., send to server)
      alert('Form submitted successfully');
    }
  };

  return (
    <>
      <section className="contact-section-three">
        <div className="auto-container">
          <div className="row">
            <div className="info-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInRight ps-0 pe-4">
                <div className="sec-title light">
                  <div className="sub-title">Get in Touch</div>
                  <h2>Get a free quote today</h2>
                  <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our company</div>
                </div>
                <div className="contact-info-box-two">
                  <span className="icon fa fa-map-marker-alt" />
                  <h6 className="title">Visit Us</h6>
                  <div className="text">B1/H3, Ground Floor, Mathura Road, Mohan Co-operative Industrial Area, New Delhi, Delhi. India - 110044</div>
                </div>
                <div className="contact-info-box-two">
                  <span className="icon fa fa-envelope" />
                  <h6 className="title">Email address</h6>
                  <div className="text"><Link href="mailto:info@collabitnetworks.com">info@collabitnetworks.com</Link></div>
                </div>
                <div className="contact-info-box-two">
                  <span className="icon fa fa-phone" />
                  <h6 className="title">Call now</h6>
                  <div className="text"><Link href="tel:+918368841232">+91 836 884 1232</Link></div>
                </div>
              </div>
            </div>
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="contact-form-two style-two wow fadeInLeft">
                  <form method="post" action="#" id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="full_name" placeholder="Your Name" required value={formData.full_name} onChange={handleChange} />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
                        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                        {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea name="message" placeholder="Write Message" required value={formData.message} onChange={handleChange} />
                        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <button className="theme-btn btn-style-one hvr-light" type="submit" name="submit-form"><span className="btn-title">Send a message</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
