import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {

  e.preventDefault();

  const form = e.target;

  const name = form[0].value;
  const email = form[1].value;
  const phone = form[2].value;
  const message = form[3].value;

  if(!name || !email || !phone || !message){

    alert("⚠️ Please fill in all information");

    return;
  }

  alert("✅ Message Sent Successfully");

};
  return (
<section id="contact-section">

  <div className="contact-card">

    <h2>Contact Me</h2>

    <p className="contact-text">
      Feel free to contact me anytime for projects or collaborations.
    </p>

    {/* Address */}
    <div className="address-card">
      📍 Alger Draria
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
        required
      />

      <textarea
        placeholder="Your Message"
        rows="6"
        required
      ></textarea>

      <button type="submit">
        Send Message
      </button>

    </form>

  </div>

</section>
  );
};

export default Contact;