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
const App = () => {
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
          path="/atrangi-code-editor"
          element={<AtrangiCodeEditor />}
        ></Route>
        <Route path="/atrangi-todo-list" element={<Todo />}></Route>
        <Route path="/atrangi-notes" element={<AtrangiNotes />}></Route>
        <Route path="/slot-machine" element={<Slot />}></Route>
        <Route path="/digital-clock" element={<Clock />}></Route>
      </Routes>
    </>
  );
};

export default App;
