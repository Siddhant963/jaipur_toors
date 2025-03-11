import React, { useState } from 'react';

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
      </h1>

      <div className="row">
        <div className="image">
          <img src="/images/contact-img.svg" alt="Contact Us" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <input
              type="number"
              name="number"
              placeholder="number"
              value={formData.number}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <input type="submit" className="btn" value="send message" />
        </form>
      </div>
    </section>
  );
};

export default Contact;