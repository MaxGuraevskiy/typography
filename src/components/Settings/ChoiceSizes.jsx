import React, { useState, useRef } from 'react';
import "./choice-sizes-styles.css"
import horizontall_line from '../../images/horizontall-line.svg'

// import NaturalInput from './NaturalInput';

const isValid = (value, min, max) => {
  // console.log('isValid :>> ', min, value);
  return value !== '' &&
    (min === undefined || value >= min) &&
    (max === undefined || value <= max);
}

const NaturalInput = ({ value, min, max, onChange, id, className, inputRef, setActice }) => {
  const regexp = new RegExp(`^[0-9]*$`); //? new RegExp(`^-?[0-9]*$`);

  function onChange(e) {
    console.log(e.target.value);
    if (e.target.value === undefined) return
    const newValue = +e.target.value;
    if (regexp.test(newValue) && isValid(newValue, min, max))
      onChange(newValue);
  }

  function onBlur() {
    if (value < min) onChange(min)
    if (value > max) onChange(max)
    setActice(false)
  }

  function onFocus() {
    setActice(true)
  }

  return (
    <input
      onFocus={onFocus}
      ref={inputRef}
      type="text"
      className={className}
      value={value}
      id={id}
      onChange={onChange}
      onBlur={onBlur}
    />)
}

const sizeOptions = ["A4:", "A3:", "A2:", "A1:", "A0:", "A0+:",]

const ChoiceSizes = () => {

  //* Подсчёт по кнопкам
  function count(change) {
    return () => isValid(+value + +change, 0, 100) && setValue(+value + +change)
  }

  const [value, setValue] = useState(0)
  const [active, setActice] = useState(false)
  const inputRef = useRef(null)
  return (<>
    <div className="choice-sizes-container">
      {sizeOptions.map((x, i) => (
        <div className="choice-size-item" key={i}>
          <div className="choice-size-item-body" onClick={() => inputRef.current.focus()}>
            <label className="paper-size" children={x} />
            <div className="choice-size-input-group">
              <label onClick={count(-1)} htmlFor={`size-tab${i + 1}`} children={"-"} className="paper-size-count-minus" />
              <NaturalInput value={value} min={0} max={100} onChange={setValue} className="choice-size-input" id={`size-tab${i + 1}`} inputRef={inputRef} setActice={setActice} />
              <label onClick={count(+1)} htmlFor={`size-tab${i + 1}`} children={"+"} className="paper-size-count-plus" />
            </div>
          </div>
          <img className={active ? "inputing" : ""} src={horizontall_line} />
        </div>
      ))}

    </div>
  </>)
}

export default ChoiceSizes;