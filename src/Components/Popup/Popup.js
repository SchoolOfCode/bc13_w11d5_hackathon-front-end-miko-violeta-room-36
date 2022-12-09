import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css';

export default (props) => (
  <Popup
    trigger={<button className="DayButton">{props.dayButton}</button>}
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">
          <h1>Day {props.dayHeader}</h1>
        </div>
        <div className="content">
          <p>{props.dayName}</p>
          <img src={props.dayImg} alt="yoga pic" />
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button">Exercise Description</button>}
            position="top center"
            nested
          >
            <span>
              <p id="descriptionExe">{props.dayDescriptionPopup}</p>
            </span>
          </Popup>
        </div>
      </div>
    )}
  </Popup>
);
