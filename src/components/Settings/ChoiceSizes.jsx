import React, { useState, useRef } from 'react';
import "./choice-sizes-styles.css"
import horizontall_line from '../../images/horizontall-line.svg'

// import NaturalInput from './NaturalInput';

const isValid = (value, min, max) =>
  value !== '' &&
  // value !== '-' &&
  (min === undefined || value >= min) &&
  (max === undefined || value <= max);

const NaturalInput = ({ value, min, max, onChange, id, inputEl }) => {
  // Для целых чисел
  // const regexp = new RegExp(`^-?[0-9]*$`);
  const regexp = new RegExp(`^[0-9]*$`);
  const [internalValue, setInternalValue] = useState(value);
  const [valid, setValid] = useState(isValid(value, min, max));
  return (
    <input
      ref={inputEl}
      type="text"
      // className={valid ? 'natural-input' : 'invalid'}/
      className={valid ? 'paper-size-count' : 'invalid'}
      value={internalValue}
      id={id}
      onChange={(event) => {
        const newValue = event.target.value;
        if (regexp.test(newValue)) {
          setInternalValue(newValue);
          let newValid = isValid(newValue, min, max);
          setValid(newValid);
          if (newValid) {
            onChange(newValue);
          }
        }
      }}
      onBlur={() => {
        if (internalValue < min) {
          onChange(min)
          // setInternalValue(min);
        } else if (internalValue > max) {
          onChange(max)
          // setInternalValue(max);
        } else {
          setInternalValue(value);
        }
        setValid(true);
      }}
    />
  );
};

const sizeOptions = ["A4:", "A3:", "A2:", "A1:", "A0:", "A0+:",]

const ChoiceSizes = () => {
  const [value, setValue] = useState(0);
  const inputEl = useRef(null)
  return (<>
    <div className="choice-sizes-container">

      <div className="choice-size-item">
        <div className="choice-size-item-body" onClick={() => inputEl.current.focus()}>
          <label className="paper-size">A4:</label>
          <div className="choice-size-input-group">
            <label className="paper-size-count-btn" onClick={() => setValue(value - 1)} htmlFor={"size-tab1"}>-</label>
            <NaturalInput value={value} min={0} max={100} onChange={(value) => setValue(value)} id={"size-tab1"} inputEl={inputEl} />
            {/* <label className="paper-size-count" htmlFor={"size-tab1"}>{value}</label> */}
            <label className="paper-size-count-btn paper-size-count-plus" onClick={() => setValue(value + 1)} htmlFor={"size-tab1"}>+</label>
          </div>
        </div>
        <img src={horizontall_line} />
      </div>
    </div>
  </>);
}

export default ChoiceSizes;