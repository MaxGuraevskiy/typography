import React, { useState, useRef } from 'react';
import "./choice-sizes-styles.css"
import horizontall_line from '../../images/horizontall-line.svg'

// import NaturalInput from './NaturalInput';

const isValid = (value, min, max) => {
  console.log('isValid :>> ', min, value);
  return value !== '' &&
    (min === undefined || value >= min) &&
    (max === undefined || value <= max);
}

const NaturalInput = ({ value, min, max, onChange, id, className, inputEl }) => {
  const regexp = new RegExp(`^[0-9]*$`); //? new RegExp(`^-?[0-9]*$`);
  return (

    <input
      ref={inputEl}
      type="text"
      className={className}
      value={value}
      // className={valid ? 'paper-size-count' : 'invalid'}
      id={id}
      onChange={event => {
        const newValue = event.target.value;
        if (regexp.test(newValue) && isValid(newValue, min, max))
          onChange(newValue);
      }}
      onBlur={() => {
        if (value < min) onChange(min)
        if (value > max) onChange(max)
      }}

    />


  );
};

const sizeOptions = ["A4:", "A3:", "A2:", "A1:", "A0:", "A0+:",]

const ChoiceSizes = () => {
  const [value, setValue] = useState(0)
  // const [status, setStatus] = useState("Neutral")
  const inputEl = useRef(null)
  return (<>
    <div className="choice-sizes-container">
      {sizeOptions.map((x, i) => (
        <div className="choice-size-item" key={i}>
          <div className="choice-size-item-body" onClick={() => inputEl.current.focus()}>
            <label className="paper-size">{x}</label>
            <div className="choice-size-input-group">
              <label className="paper-size-count-btn" onClick={() => isValid(+value - 1, 0, 100) && setValue(+value - 1)} htmlFor={`size-tab${i + 1}`}>-</label>
              <NaturalInput value={value} min={0} max={100} onChange={setValue} className="choice-size-input" id={`size-tab${i + 1}`} inputEl={inputEl} />
              <label className="paper-size-count-btn paper-size-count-plus" onClick={() => isValid(+value + 1, 0, 100) && setValue(+value + 1)} htmlFor={`size-tab${i + 1}`}>+</label>
            </div>
          </div>
          <img src={horizontall_line} />
        </div>
      ))}

    </div>
  </>);
}

export default ChoiceSizes;