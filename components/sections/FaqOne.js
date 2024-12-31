import React, { useState } from 'react';
import Accordion from '../elements/Accordion';
import { firestore } from '../../util/firebaseconfig';
// import ReCAPTCHA from 'react-google-recaptcha';

const FaqOne = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please verify that you are not a robot.');
      return;
    }

    try {
      await firestore.collection('contacts').add(formData);
      alert('Message sent successfully!');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        message: ''
      });
      setCaptchaValue(null);
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <>
      <section className="faqs-section">
        <div className="auto-container">
          <div className="row">
            <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-4">
              <div className="faq-bg" style={{ backgroundImage: 'url(./images/icons/pattern-2.jpg)' }} />
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Questions &amp; answers</span>
                  <h2>See Frequently Asked Questions</h2>
                </div>
                <Accordion />
              </div>
            </div>
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="form-bg" style={{ backgroundImage: 'url(./images/background/3.jpg)' }} />
              <div className="inner-column">
                <div className="contact-form wow fadeInLeft">
                  <div className="title-box">
                    <span className="sub-title">Contact us</span>
                    <h3>Write Email</h3>
                  </div>
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-group">
                      <input type="text" name="full_name" placeholder="Your Name" value={formData.full_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <textarea name="message" placeholder="Write a Message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      {/* <ReCAPTCHA sitekey="your-recaptcha-site-key" onChange={handleCaptchaChange} /> */}
                    </div>
                    <div className="form-group">
                      <button className="theme-btn btn-style-one" type="submit" name="submit-form">
                        <span className="btn-title">Send a message</span>
                      </button>
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

export default FaqOne;
