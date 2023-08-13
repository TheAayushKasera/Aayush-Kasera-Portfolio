import { NavLink } from "react-router-dom";

const Project = () => {
  const projectarr = [
    {
      name: "Atrangi To-do List",
      icon: " 📝",
      img: require("./projectsimage/todo.png"),
      live: "/atrangi-todo-list",
      code: "https://github.com/TheAayushKasera/Atrangi-Todo-List-MERN",
      description:
        "Web-based task management application developed using the MERN stack.\nAdd and delete to-do items with ease.\nUser-friendly interface for efficient task management.\nEnhance productivity and stay organized effortlessly.",
      Technology:
        "MongoDB · Node.js · Express.js · Cascading Style Sheets (CSS) · MERN Stack · HTML · Software Development · React.js",
    },
    {
      name: "Atrangi Notes",
      icon: "📒",
      img: require("./projectsimage/notes.png"),
      live: "/atrangi-notes",
      code: "https://github.com/TheAayushKasera/Atrangi-Notes-MERN",
      description:
        "Web-based note-taking application similar to Google Keep.\nUsers can save notes with titles for easy organization.\nDeveloped using the MERN stack for a seamless and responsive user experience.",
      Technology:
        "Material-UI · MongoDB · Node.js · Express.js · Cascading Style Sheets (CSS) · MERN Stack · HTML · Software Development · React.js",
    },
    {
      name: "Atrangi Weather App",
      icon: "🌩",
      img: require("./projectsimage/weather.png"),
      live: "/atrangi-weather",
      code: "https://github.com/TheAayushKasera/AtrangiWeatherApp",
      description:
        "Web-based weather application providing real-time weather conditions.\nUsers can search for weather conditions by city name.\nDeveloped using ReactJS, ensuring a dynamic and interactive user interface.\nUtilizes a weather API to fetch accurate and up-to-date weather data.",
      Technology:
        "Material-UI · REST APIs · Node.js · Cascading Style Sheets (CSS) · HTML · Software Development · React.js",
    },
    {
      name: "Atrangi Code Editor",
      icon: "💻",
      img: require("./projectsimage/codeeditor.png"),
      live: "/atrangi-code-editor",
      code: "https://github.com/TheAayushKasera/AtrangiCodeEditor",
      description:
        "Web-based code editor application built on the MERN stack.\nCompile and execute code with support for multiple programming languages.\nEmpowers users to experiment, test, and learn programming in a flexible environment.",
      Technology:
        "REST APIs · material ui · Node.js · Cascading Style Sheets (CSS) · MERN Stack · HTML · Software Development · React.js",
    },
    {
      name: "Child Vaccine Management System",
      icon: "💉",
      img: require("./projectsimage/childvaccine.png"),
      live: "https://github.com/TheAayushKasera/Child-Vaccine-Management-System",
      code: "https://github.com/TheAayushKasera/Child-Vaccine-Management-System",
      description:
        "Console-based application developed in Python and SQL.\nHospital: Add, update, and view vaccine records, manage inventory, and send reminders via Twilio.\nParent: Register child's details, receive vaccination reminders via Twilio, and access vaccination history.",
      Technology: "Twilio · SQL · Python (Programming Language) · MySQL",
    },
    {
      name: "Atrangi Library Management System",
      icon: "📚",
      img: require("./projectsimage/library.png"),
      live: "https://github.com/TheAayushKasera/Atrangi-Library",
      code: "https://github.com/TheAayushKasera/Atrangi-Library",
      description:
        "Developed using Java, JavaFX, and SQL.\nAllows librarians to add, update, and delete books from the library.\nProvides a user-friendly interface to search and check book availability.\nEnables librarians to handle book loans, returns.\nEnsures smooth data management and secure storage using SQL.\nSimplifies day-to-day library operations, enhancing librarian productivity.",
      Technology:
        "JavaFX · fxml · Java Database Connectivity (JDBC) · Cascading Style Sheets (CSS) · SQL · Java · MySQL",
    },
    {
      name: "Atrangi Hisab Kitab",
      icon: "💵",
      img: require("./projectsimage/hisab kitab.png"),
      live: "https://github.com/TheAayushKasera/Atrangi-Hisab-Kitab",
      code: "https://github.com/TheAayushKasera/Atrangi-Hisab-Kitab",
      description:
        "Expense-tracking application designed to help users manage their finances effectively.\nDeveloped using JavaFX for a rich and user-friendly graphical interface.\nUtilizes SQL for efficient and secure data storage and retrieval.\nEnables users to track their expenses.",
      Technology: "fxml · Java Database Connectivity (JDBC) · SQL · Java",
    },
  ];

  const miniprojectarr = [
    {
      name: "Slot Machine 🎰",
      icon: "💵",
      img: require("./projectsimage/slot.png"),
      live: "/slot-machine",
      code: "https://github.com/TheAayushKasera/Slot-Machine",
      description:
        "Expense-tracking application designed to help users manage their finances effectively.\nDeveloped using JavaFX for a rich and user-friendly graphical interface.\nUtilizes SQL for efficient and secure data storage and retrieval.\nEnables users to track their expenses.",
      Technology: "fxml · Java Database Connectivity (JDBC) · SQL · Java",
    },
    {
      name: "Digital Clock ⏰",
      icon: "💵",
      img: require("./projectsimage/clock.png"),
      live: "/digital-clock",
      code: "https://github.com/TheAayushKasera/digital-clock",
      description:
        "Expense-tracking application designed to help users manage their finances effectively.\nDeveloped using JavaFX for a rich and user-friendly graphical interface.\nUtilizes SQL for efficient and secure data storage and retrieval.\nEnables users to track their expenses.",
      Technology: "fxml · Java Database Connectivity (JDBC) · SQL · Java",
    },
    {
      name: "Atrangi Calculator 📟",
      icon: "💵",
      img: require("./projectsimage/calculator.png"),
      live: "https://github.com/TheAayushKasera/Atrangi-Tools",
      code: "https://github.com/TheAayushKasera/Atrangi-Tools",
      description:
        "Expense-tracking application designed to help users manage their finances effectively.\nDeveloped using JavaFX for a rich and user-friendly graphical interface.\nUtilizes SQL for efficient and secure data storage and retrieval.\nEnables users to track their expenses.",
      Technology: "fxml · Java Database Connectivity (JDBC) · SQL · Java",
    },
    {
      name: "Atrangi Tic-Tac-Toe ❌⭕️❌",
      icon: "💵",
      img: require("./projectsimage/tic tac toe.png"),
      live: "https://github.com/TheAayushKasera/Atrangi-Tools",
      code: "https://github.com/TheAayushKasera/Atrangi-Tools",
      description:
        "Expense-tracking application designed to help users manage their finances effectively.\nDeveloped using JavaFX for a rich and user-friendly graphical interface.\nUtilizes SQL for efficient and secure data storage and retrieval.\nEnables users to track their expenses.",
      Technology: "fxml · Java Database Connectivity (JDBC) · SQL · Java",
    },
  ];
  return (
    <section className="project-container container" id="projectid">
      <div className="project-heading">Projects</div>
      {projectarr.map((val, ind) => {
        return (
          <div className="project-box" key={ind}>
            <div className="project-left-box">
              <div className="project-img-box">
                <img className="project-img" src={val.img} alt={val.name} />
              </div>
              <div className="project-button-box">
                <button className="project-live-button">
                  <NavLink
                    to={val.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      display: "block",
                    }}
                  >
                    Live
                  </NavLink>
                </button>
                <button className="project-code-button">
                  <a
                    href={val.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      display: "block",
                    }}
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
            <div className="project-right-box">
              <div className="project-name-box">{val.name + val.icon}</div>
              <div className="project-desc-box">{val.description}</div>
              <div className="project-tech-box">
                <span style={{ color: "yellow", fontWeight: "Bold" }}>
                  Technology-
                </span>
                <span style={{ color: "#313131" }}> {val.Technology}</span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mini-project-container">
        {miniprojectarr.map((val, ind) => {
          return (
            <div className="mini-project-box" key={ind}>
              <div className="mini-project-img-box">
                <img
                  className="mini-project-img"
                  src={val.img}
                  alt={val.name}
                />
              </div>
              <div className="mini-project-title">{val.name}</div>
              <div className="mini-project-button-box">
                <button className="project-live-button">
                  <NavLink
                    to={val.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      display: "block",
                    }}
                  >
                    Live
                  </NavLink>
                </button>
                <button className="project-code-button">
                  <a
                    href={val.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      display: "block",
                    }}
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
