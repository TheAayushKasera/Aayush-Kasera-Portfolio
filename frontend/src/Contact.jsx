const Contact = () => {
  return (
    <>
      <div className="contact-container container" id="contactid">
        <div className="contact-heading">Contact</div>
        <div className="contact-data-div">
          <div className="contact-data">
            <span className="contact-data-title">📱 Mobile no- </span> +91
            954930617
          </div>
          <div className="contact-data">
            <span className="contact-data-title">📧 Email- </span>{" "}
            <a className="contact-data-link" href="mailto:aayushksr@gmail.com">
              aayushksr@gmail.com
            </a>
          </div>
          <div className="contact-data">
            <span className="contact-data-title">📍 Address-</span> Phulera,
            Rajasthan
          </div>
          <div className="contact-data">
            <span className="contact-data-title">GitHub-</span>{" "}
            <a
              className="contact-data-link"
              href="https://github.com/TheAayushKasera"
              target="_blank"
            >
              https://github.com/TheAayushKasera
            </a>
          </div>
          <div className="contact-data">
            <span className="contact-data-title">HackerRank-</span>{" "}
            <a
              className="contact-data-link"
              href="https://www.hackerrank.com/theaayushkasera"
              target="_blank"
            >
              https://www.hackerrank.com/theaayushkasera
            </a>
          </div>
          <div className="contact-data">
            <span className="contact-data-title">LinkedIn-</span>{" "}
            <a
              className="contact-data-link"
              href="https://www.linkedin.com/in/aayush-kasera/"
              target="_blank"
            >
              https://www.linkedin.com/in/aayush-kasera/
            </a>
          </div>
        </div>
      </div>
      <div className="contact-thank">
        {" "}
        👉🏻 Thank you for visiting my Portfolio 👈🏻
      </div>
    </>
  );
};

export default Contact;
