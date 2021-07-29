import React, { useState } from "react";

import RadioInput from "./RadioInput"
import "./App.css";



const СustomRadio2btn = ({ text1, text2 }) => {
  const [selected, setSelected] = useState("first");
  return (
    <div className="fl2 w85 h75 radio-bg">
      <div className="w50 h100">
        <RadioInput
          value="first"
          selected={selected}
          text={text1}
          onChange={setSelected}
          isActive={true}
        />
      </div>
      <div className="w50 h100">
        <RadioInput
          value="second"
          selected={selected}
          text={text2}
          onChange={setSelected}
          isActive={true}
        />
      </div>
    </div>
  );
};

export default СustomRadio2btn
