import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AtrangiCodeEditor from "./projects/atrangi code editor/AtrangiCodeEditor";
import Weather from "./projects/Atrangi Weather/Weather.js";
import Todo from "./projects/atrangi to-do list/Todo";
import AtrangiNotes from "./projects/Atrangi Notes/AtrangiNotes";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slot from "./projects/Slot machine/Slot";
import Clock from "./projects/digital clock/Clock";
import { useEffect } from "react";

const App = () => {
  const backendstart = async () => {
    console.log("Backend Request", process.env.REACT_APP_backend_port);
    const response = await fetch(process.env.backend_port);
    try {
      if (response.ok) {
        console.log(await response);
        console.log("backend start");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    backendstart();
  }, []);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
        <Route exact path="/atrangi-weather" element={<Weather />}></Route>
        <Route
          exact
          path="/atrangi-code-editor"
          element={<AtrangiCodeEditor />}
        ></Route>
        <Route exact path="/atrangi-todo-list" element={<Todo />}></Route>
        <Route exact path="/atrangi-notes" element={<AtrangiNotes />}></Route>
        <Route exact path="/slot-machine" element={<Slot />}></Route>
        <Route exact path="/digital-clock" element={<Clock />}></Route>
      </Routes>
    </>
  );
};

export default App;
