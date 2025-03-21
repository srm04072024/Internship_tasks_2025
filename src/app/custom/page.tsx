import "@/app/custom/custom.css";

export default function Custom() {
  return (
    <section className="customForm">
      <h1>Contact Form</h1>
      <div>
        <div className="contact-details">
          <p>Phone: +123 456 7890</p>
          <p>Email: email@example.com</p>
        </div>
        <div className="social-link">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <form>
        <div className="inputField">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="inputField">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="inputField">
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
      </form>
    </section>
  );
}
