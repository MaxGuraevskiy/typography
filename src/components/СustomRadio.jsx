import React from "react";
import RadioInput from "./RadioInput"
import "./App.css";

const СustomRadio = ({ options, styles, state, isActive }) => {
  const option = (text, value) => (
    <div key={value} className={styles.innerClasses}>
      <RadioInput
        value={value}
        text={text}
        isActive={isActive ?? true}
        selected={state.get}
        onChange={state.set} />
    </div>
  )

  return (<div
    className={styles.outerClasses}
    children={options.map(option)} />)
};

export default СustomRadio