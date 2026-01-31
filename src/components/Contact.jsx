const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let’s align on flights, stays, and photo goals.</h2>
      </div>
      <div className="contact__grid">
        <form className="contact__form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@email.com" />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell me what you want to capture on this trip." />
          </label>
          <button className="btn btn--primary" type="submit">
            Send message
          </button>
        </form>
        <div className="contact__details">
          <h3>Socials</h3>
          <p>Instagram · @riverside.blues</p>
          <p>Email · hello@tripstudio.com</p>
          <p>Behance · TripStudio NL</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
