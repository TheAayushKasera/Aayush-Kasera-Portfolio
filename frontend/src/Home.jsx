import { Routes, Route } from "react-router-dom";
import Aboutme from "./Aboutme";
import Education from "./Education";
import Achievement from "./Achievement";
import Certificate from "./Certificate";
import Project from "./Project";
import Contact from "./Contact";
const Home = () => {
  document.title = "Aayush Kasera Portfolio";
  return (
    <>
      <Aboutme />
      <Education />
      <Achievement />
      <Certificate />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
