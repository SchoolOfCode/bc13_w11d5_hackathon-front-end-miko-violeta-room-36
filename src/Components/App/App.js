import React, { useContext } from 'react';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import { DarkModeContext } from '../DarkModeContext.js';
import useFetch from '../../Hooks/useFetch';
import "../../Fonts/ChristmasDream.ttf"

import './App.css';

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  // const [data] = useFetch(`http://localhost:3001/api`);
  const [data] = useFetch(`https://advent-of-yoga-miko-violeta.onrender.com/api
  `);

  return [
    <div className={darkMode ? `dark` : `app-container`}>
      <div className={darkMode ? `dark-header-container` : `header-container`}>
        <h1>Advent of Yoga!</h1>
      </div>
      <div className="calendar-container">
        {data.map((day) => {
          return (
            <div className={darkMode ? `dark-day-container` : `day-container`}>
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
      <div className="button-container">
        <h2>
          Click the button to do Yoga {darkMode ? `during the day` : `at night`}
          !
        </h2>
        <Button
          buttonText={darkMode ? `Light Mode` : `Dark Mode`}
          buttonClick={toggleDarkMode}
        />
      </div>
    </div>,
  ];
}

export default App;
