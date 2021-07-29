import React from "react";

import "./App.css";

import useSound from "use-sound";
import popupoff from "../sounds/pop-up-off.mp3";


const RadioInput = ({ selected, onChange, text, value, isActive }) => {
  const [playOff] = useSound(popupoff, { volume: 0.25 });

  function clickInput() {
    if (!isActive) return
    onChange(value);
    playOff();
  }

  return (
    <div onClick={clickInput}
      className={`h100 w100 ${value === selected && "radio-btn"}`}>
      <div className="fl1 w100 h100 radio-btn-text" children={text} />
    </div>
  );
};

export default RadioInput
