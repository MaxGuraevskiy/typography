import React, { useState, useRef } from 'react';
import "./choice-sizes-styles.css"
import horizontall_line from '../../images/horizontall-line.svg'
import useEventListener from './useEventListener';
import { changeOrder } from '../../redux/actions';
import { connect } from 'react-redux';


function isValid(value, min, max) {
  return value !== '' && value >= min && value <= max;
}

const NaturalInput = ({ disabled, value, setValue, className, inputRef, setActive }) => {
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
      disabled={disabled}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={inputRef}
      value={value}
      size={3}
    />)
}

const InputSize = ({ sizeName, id, disabled, value, setValue }) => {
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  function logKey(e) {
    if (!active) return

    if (e.code === "ArrowUp")
      isValid(+value + 1, 0, 100) && setValue(+value + 1)
    if (e.code === "ArrowDown")
      isValid(+value - 1, 0, 100) && setValue(+value - 1)
    if (e.code === "Escape") {
      ref.current.blur()
      setActive(false)
    }
  }
  useEventListener("keydown", logKey)

  //* Подсчёт по кнопкам
  function count(change) {
    return () => isValid(+value + +change, 0, 100) && setValue(+value + +change)
  }

  //TODO: обработать disabled
  return (<div className="choice-size-item">
    <div className="choice-size-item-body" onClick={() => ref.current.focus()}>
      <label className="paper-size" children={`${sizeName}:`} />
      <div className="choice-size-input-group">
        <label onClick={count(-1)} htmlFor={`size-tab${id}`} children={"-"} className="paper-size-count-minus" />
        <NaturalInput inputRef={ref} id={`size-tab${id}`} className="choice-size-input" disabled={disabled} value={value} setValue={setValue} setActive={setActive} />
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

const ChoiceSizes = ({ sizes, disabled, changeOrder }) => (
  <div className="choice-sizes-container">
    {sizeOptions.map((x, i) =>
      <InputSize id={i} key={i}
        sizeName={x.name}
        disabled={disabled}
        value={sizes[x.value]}
        setValue={value => changeOrder(`sizes,${x.value}`, value)} />
    )}
  </div>
)

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  return { sizes: current.sizes, disabled: state.orders.currentOrder !== 0 }
}

export default connect(mapStateToProps, { changeOrder })(ChoiceSizes)