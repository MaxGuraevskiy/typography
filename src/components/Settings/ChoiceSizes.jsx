import React, { useState, useRef } from 'react';
import "./choice-sizes-styles.css"
import horizontall_line from '../../images/horizontall-line.svg'
import useEventListener from './useEventListener';

const isValid = (value, min, max) => {
  return value !== '' && value >= min && value <= max;
}

const NaturalInput = ({ value, min, max, setValue, className, inputRef, setActive }) => {
  const regexp = new RegExp(`^[0-9]*$`); //? new RegExp(`^-?[0-9]*$`);

  function onChange(e) {
    const newValue = +e.target.value;
    if (regexp.test(newValue) && isValid(newValue, min, max))
      setValue(newValue);
  }
  function onBlur() {
    if (value < min) setValue(min)
    if (value > max) setValue(max)
    setActive(false)
  }
  function onFocus() {
    setActive(true)
  }

  return (
    <input
      className={className}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={inputRef}
      value={value}
      size={3}
    />)
}

const InputSize = ({ sizeName, id }) => {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  function logKey(e) {
    if (!active) return

    if (e.code === "ArrowUp") {
      isValid(+value + 1, 0, 100) && setValue(x => x + 1)
    }
    if (e.code === "ArrowDown") {
      isValid(+value - 1, 0, 100) && setValue(x => x - 1)
    }
    if (e.code === "Escape") {
      ref.current.blur()
      setActive(false)
    }
  }
  useEventListener("keydown", logKey)

  //* Подсчёт по кнопкам
  function count(change) {
    return () => isValid(+value + +change, 0, 100) && setValue(x => x + +change)
  }

  return (<div className="choice-size-item">
    <div className="choice-size-item-body" onClick={() => ref.current.focus()}>
      <label className="paper-size" children={sizeName} />
      <div className="choice-size-input-group">
        <label onClick={count(-1)} htmlFor={`size-tab${id}`} children={"-"} className="paper-size-count-minus" />
        <NaturalInput min={0} max={100} id={`size-tab${id}`} inputRef={ref} className="choice-size-input" value={value} setValue={setValue} setActive={setActive} />
        <label onClick={count(+1)} htmlFor={`size-tab${id}`} children={"+"} className="paper-size-count-plus" />
      </div>
    </div>
    <img className={active ? "inputing" : ""} src={horizontall_line} />
  </div>)
}

const sizeOptions = ["A4:", "A3:", "A2:", "A1:", "A0:", "A0+:"]

const ChoiceSizes = () => (
  <div className="choice-sizes-container">
    {sizeOptions.map((x, i) =>
      <InputSize sizeName={x} id={i} key={i} />
    )}
  </div>
)

export default ChoiceSizes;