import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
// import Popup from "reactjs-popup";

// import { useEffect, useState, useContext } from "react";
// import Button from "../Button/Button";
// import Display from "../Display/Display";
// import Input from "../Input/Input";
// import {DarkModeContext} from '../DarkModeContext.js'

import "./App.css";

function App() {
  //   const [day, setDay] = useState("");
  //   const [subject, setSubject] = useState("");
    const [daySubArr, setDaySubArr] = useState([]);
  //   // const [postArray, setPostArray] = useState([]);
  //   const [result, setResult] = useState("");
  //   const [postObj, setPostObj] = useState({});

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

  //   function inputValueDay(e) {
  //     setDay(e.target.value);
  //     setPostObj({ ...postObj, day: e.target.value });
  //   }
  //   function inputValueSubject(e) {
  //     setSubject(e.target.value);
  //     setPostObj({ ...postObj, subject: e.target.value });
  //   }
  //   // function settingUpObj(){
  //   //   setPostArray({ day: day, subject: subject });
  //   // }

  //   function buttonClick() {
  //     updateData(postObj);
  //     setDay("");
  //     setSubject("")
  //   }
  //   async function updateData(postObj) {
  //     if (JSON.stringify(postObj) !== "{}") {
  //       const response = await fetch("http://localhost:3001/api", {
  //         method: "POST",
  //         body: JSON.stringify(postObj),
  //         mode: "cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const result = await response.json();
  //       setResult(result);
  //     }
  //   }
  // const PopupExample = () => (
  //   <Popup trigger={<button> Trigger</button>} position="right center">
  //     <div>Popup content here !!</div>
  //   </Popup>
  // );

  return (
    <div className="app-container">
      <div className="header-container">
        <h1>Advent of Yoga!</h1>
      </div>
      <div className="calendar-container">
        {daySubArr.map((day)=>{
          return <Popup  dayButton={day.id} dayHeader={day.id} dayName={day.name} dayImg={day.img_link} dayDescriptionPopup={day.description}/>
        })}
        {/* <Popup dayButton="1" dayDescriptionPopup="dayDescriptionPopup" dayHeader="Day 1" dayName="Yoga exe description" dayImg="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/treesanta3577845.png?itok=KvKKXlnX"/> */}
      </div>
    </div>

    // <div className={darkMode ? `dark` : `app-container`}>

    //   <h1>100 Days of Code!</h1>
    //   <p>Edit Your progress here:</p>
    //   <Input value={day} for="day" label="Day" handleChange={inputValueDay} />
    //   <Input value={subject} for="subject" label="Subject" handleChange={inputValueSubject} />
    //   <Button buttonText="Add" buttonClick={buttonClick} />
    //   <Button buttonText="Edit" />
    //   <Button buttonText="Delete" />
    //   <Button buttonText={darkMode ? `Light Mode` : `Dark Mode`} buttonClick={toggleDarkMode} />

    //   <ul className="ul-container">
    //     {daySubArr.map((element) => {
    //       return (
    //         <Display
    //           displayDay={element.day}
    //           displaySubject={element.subject}
    //         />
    //       )
    //     })}
    //   </ul>

    // </div>
  );
}

export default App;
