import React, { useState } from "react";

import RadioInput from "./RadioInput"
import "./App.css";


const СustomRadio4btn = ({ text1, text2, text3, text4 }) => {
  const [selected, setSelected] = useState("first");
  return (
    <div className="fl2 w93 h75 radio-bg">
      <div className="w25 h100">
        <RadioInput
          value="first"
          selected={selected}
          text={text1}
          onChange={setSelected}
          isActive={true}
        />
      </div>
      <div className="w25 h100">
        <RadioInput
          value="second"
          selected={selected}
          text={text2}
          onChange={setSelected}
          isActive={true}
        />
      </div>
      <div className="w25 h100">
        <RadioInput
          value="third"
          selected={selected}
          text={text3}
          onChange={setSelected}
          isActive={true}
        />
      </div>
      <div className="w25 h100">
        <RadioInput
          value="fourth"
          selected={selected}
          text={text4}
          onChange={setSelected}
          isActive={true}
        />
      </div>
    </div>
  );
};

export default СustomRadio4btn