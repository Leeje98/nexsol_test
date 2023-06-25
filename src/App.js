import Calendar from "react-calendar";
import "./App.css";
import Sample from "./Sample";
import CalenderLee from "./CalenderLee";
import "./style/css/calender.css";

function App() {
  return (
    <div className="App">
      {/* <Sample/>
       <Calendar/> */}
      <div className="Calendarbox">
        <CalenderLee />
      </div>
    </div>
  );
}

export default App;
