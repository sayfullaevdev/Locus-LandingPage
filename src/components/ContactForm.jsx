function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have any questions? Want help before getting started?</p>
        <div className="underline"></div>
      </div>

      <form className="contact-form">
        <label>Full name</label>
        <input type="text" placeholder="Your Name" />

        <label>Email address</label>
        <input type="email" placeholder="Your Email" />

        <label>Description</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send now</button>
      </form>
    </div>
  );
}

export default ContactForm;
