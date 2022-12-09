import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
// import {DarkModeContext} from '../DarkModeContext.js'

import "./App.css";

function App() {
  const [daySubArr, setDaySubArr] = useState([]);
  //   const {darkMode}  = useContext(DarkModeContext)
  //   const {toggleDarkMode} = useContext(DarkModeContext)

  useEffect(() => {
    async function getYoga() {
      const response = await fetch("http://localhost:3001/api");
      const data = await response.json();
      console.log(data);
      setDaySubArr(data.payload);
    }
    getYoga();
  }, []);
  return (
    <div className="app-container">
      <div className="header-container">
        <h1>Advent of Yoga!</h1>
      </div>
      <div className="calendar-container">
        {daySubArr.map((day) => {
          return (
            <div className="day-container">
            <Popup
              dayButton={day.id}
              dayHeader={day.id}
              dayName={day.name}
              dayImg={day.img_link}
              dayDescriptionPopup={day.description}
            />
            </div>
          );
        })}
      </div>
    </div>

    // <div className={darkMode ? `dark` : `app-container`}>
    //   <Button buttonText={darkMode ? `Light Mode` : `Dark Mode`} buttonClick={toggleDarkMode} />
  );
}

export default App;
