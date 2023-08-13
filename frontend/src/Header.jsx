const Header = () => {
  const scroll = (id) => {
    console.log("clicked");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="header container">
      <button className="nav-link" onClick={() => scroll("homeid")}>
        Home🏠
      </button>
      <button className="nav-link" onClick={() => scroll("educationid")}>
        Education📖
      </button>
      <button className="nav-link" onClick={() => scroll("achievementid")}>
        Achievements🏅
      </button>
      <button className="nav-link" onClick={() => scroll("certificateid")}>
        Training & Certificates📄
      </button>
      <button className="nav-link" onClick={() => scroll("projectid")}>
        Project🧩
      </button>
      <button className="nav-link" onClick={() => scroll("contactid")}>
        Contact 📞
      </button>
    </section>
  );
};

export default Header;
