const graduation = require("./icons/graduation-hat.png");
const secondary = require("./icons/secondary.png");
const senior_sec = require("./icons/school.png");

const Education = () => {
  const eduobj = [
    {
      icon: graduation,
      name: "Batchelor of Technology  (CSE)",
      year: "2019-2023",
      result: "8.8 CGPA till 6th sem",
      school: "Arya College of Engineering & I.T.",
      board: "Rajasthan Technical University",
    },
    {
      icon: senior_sec,
      name: "Senior Secondary Education  (PCM)",
      year: "2018-2019",
      result: "77.6%",
      school: "Kendriya Vidyalaya, Phulera",
      board: "CBSE",
    },
    {
      icon: secondary,
      name: "Secondary Education",
      year: "2016-2017",
      school: "St. Joseph's Secondary School",
      result: "78.67%",
      board: "RBSE",
    },
  ];

  return (
    <section className="Education-container container" id="educationid">
      <div className="Eduction-container-heading">Education</div>
      <div className="Edu-data-list">
        {eduobj.map((val, ind) => {
          return (
            <div className="Edu-data-box" key={ind}>
              <div className="Edu-icon-box">
                <img className="Edu-icon" src={val.icon} />
              </div>
              <div className="Edu-data">
                <p>
                  <span className="Edu-title">Degree-</span> {val.name}
                </p>
                <p>
                  <span className="Edu-title">College-</span> {val.school}
                </p>
                <p>
                  <span className="Edu-title">University- </span>
                  {val.board}
                </p>
                <p>
                  <span className="Edu-title">Result- </span>
                  <span style={{ color: "green" }}>{val.result}</span>
                </p>
                <p>
                  <span className="Edu-title">Year- </span>
                  {val.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
