
const Contact = () => {
  return (
    <section>
      <div className="contact-header ">
        <h1>📬 Get in Touch with Blog Services</h1>
        <p>
          Contact information for top blogging platforms and providers. 🛠️ Need
          Help with Your Blog? Reach out to your service provider for support
          and assistance Would you like me to tailor these for a specific
          audience or platform?
        </p>
      </div>
      <div className="contact container">
        <form action="">
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" placeholder="Name:" />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="Email" placeholder="Email:" />
          </div>
          <div className="form-group">
            <label htmlFor="">Message:</label>
            <textarea  placeholder="Message..." />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact
