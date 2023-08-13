import Slider from "react-slick";

const achievementarr = [
  {
    src: require("./achievements/Aeye1.jpg"),
    title:
      "🏆 Most Innovated Product Prize at Shankara Global Hackathon 2023. 🏆",
  },
  {
    src: require("./achievements/Aeye2.jpg"),
    title:
      "🏆 Most Innovated Product Prize at Shankara Global Hackathon 2023. 🏆",
  },
  {
    src: require("./achievements/CERN.png"),
    title: "🥇 First Rank in CERN Coding Contest 🥇",
  },
  {
    src: require("./achievements/SIH1.jpg"),
    title: "⚡️ Smart India Hackathon 2022 Finalist ⚡️",
  },
  {
    src: require("./achievements/SIH2.jpg"),
    title: "⚡️ Smart India Hackathon 2022 Finalist ⚡️",
  },
  {
    src: require("./achievements/codechef.jpg"),
    title: "✨ 1551 Rating at Codechef ✨",
  },
  {
    src: require("./achievements/hackerrank.jpg"),
    title: "🌟 5 Star in Python and 5 star in Problem Solving at Hackerrank 🌟",
  },
];

const Achievement = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };
  return (
    <div className="ach-slider-container container" id="achievementid">
      <div className="ach-heading">Achievements</div>
      <Slider className="ach-slider" {...settings}>
        {achievementarr.map((val, ind) => {
          return (
            <div className="slide-div" key={ind}>
              <img className="slider-img" src={val.src} alt={val.title} />
              <div className="slider-title">{val.title}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Achievement;
