import React, { useState, useRef } from 'react';
import "./choice-sizes-styles.css"
import horizontall_line from '../../images/horizontall-line.svg'
import useEventListener from './useEventListener';
import { connect } from 'react-redux';

const isValid = (value, min, max) => {
  return value !== '' && value >= min && value <= max;
}

const NaturalInput = ({ value, setValue, className, inputRef, setActive }) => {
  const regexp = new RegExp(`^[0-9]*$`); //? new RegExp(`^-?[0-9]*$`);
  const min = 0
  const max = 100

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

const InputSize = ({ sizeName, id, initValue }) => {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState(initValue)
  const ref = useRef(null)

  function logKey(e) {
    if (!active) return

    if (e.code === "ArrowUp")
      isValid(+value + 1, 0, 100) && setValue(x => x + 1)
    if (e.code === "ArrowDown")
      isValid(+value - 1, 0, 100) && setValue(x => x - 1)
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
      <label className="paper-size" children={`${sizeName}:`} />
      <div className="choice-size-input-group">
        <label onClick={count(-1)} htmlFor={`size-tab${id}`} children={"-"} className="paper-size-count-minus" />
        <NaturalInput inputRef={ref} id={`size-tab${id}`} className="choice-size-input" value={value} setValue={setValue} setActive={setActive} />
        <label onClick={count(+1)} htmlFor={`size-tab${id}`} children={"+"} className="paper-size-count-plus" />
      </div>
    </div>
    <img className={active ? "inputing" : ""} src={horizontall_line} />
  </div>)
}

const sizeOptions = [
  { value: "A4", name: "A4" },
  { value: "A3", name: "A3" },
  { value: "A2", name: "A2" },
  { value: "A1", name: "A1" },
  { value: "A0", name: "A0" },
  { value: "A0_plus", name: "A0+" }
]

const ChoiceSizes = ({ sizes }) => (
  <div className="choice-sizes-container">
    {sizeOptions.map((x, i) =>
      <InputSize sizeName={x.name} initValue={sizes[x.value]} id={i} key={i} />
    )}
  </div>
)

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(current);
  return current
}

export default connect(mapStateToProps, null)(ChoiceSizes)