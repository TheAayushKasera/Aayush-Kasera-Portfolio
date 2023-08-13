const Aboutme = () => {
  return (
    <section className="Aboutme-container container">
      <div className="Aboutme-text">
        <p>
          🚀 Welcome to my digital space!{" "}
          <span style={{ color: "#ca3e47" }}>I'm Aayush Kasera</span>, a
          passionate Computer Science graduate with a knack for crafting elegant
          code and solving intricate challenges. My journey is woven with
          achievements like clinching the top spot in CERN Coding Contest and
          driving innovation at the Shankara Global Hackathon. I thrive on
          Python, Java, and the MERN stack, breathing life into creative
          projects like weather apps, code editors, and more. Let's dive into a
          world of technology, where pixels and algorithms come together to
          shape the extraordinary.
        </p>
      </div>
      <div className="Aboutme-image-container">
        <img
          className="Aboutme-image"
          src={require("./images/aayushkasera.jpg")}
          alt="AayushKasera.jpg"
        />
      </div>
    </section>
  );
};

export default Aboutme;
