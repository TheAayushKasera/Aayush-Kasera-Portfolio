import Slider from "react-slick";

const certificatearr = [
  {
    src: require("./certificate/1.jpg"),
    title: "Full Stack Web developement from Grras Solutions",
  },
  {
    src: require("./certificate/2.jpg"),
    title: "Power Programming using Python from Grras Solutions",
  },
  {
    src: require("./certificate/3.png"),
    title: "Java (Basic) from HackerRank",
  },
  {
    src: require("./certificate/4.jpg"),
    title: "Introduction to Python from Infosys Springboard",
  },
  {
    src: require("./certificate/5.png"),
    title: "Python (Basic) Certificate form HackerRank",
  },
  {
    src: require("./certificate/6.jpg"),
    title: "Programming Essential in C",
  },
];

const Certificate = () => {
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
    <div className="cert-slider-container container" id="certificateid">
      <div className="cert-heading">Training & Certificates</div>
      <Slider className="cert-slider" {...settings}>
        {certificatearr.map((val, ind) => {
          return (
            <div className="cert-slide-div" key={ind}>
              <img className="slider-img" src={val.src} alt={val.title} />
              <div className="slider-title">{val.title}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Certificate;
