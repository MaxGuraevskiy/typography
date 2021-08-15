import React, { useState } from "react"
import { connect } from "react-redux"
import "./choice-time-styles.css"

const timeOptions = ["3ч", "6ч", "12ч", "24ч"]

const ChoiceTime = ({ value }) => {
  const [selected, setSelected] = useState(timeOptions[value])

  const selectedHandler = e => {
    setSelected(e.target.value)
    console.log(e.target.checked)
  }

  return (
    <div className="container">
      {timeOptions.map((x, i) => (
        <>
          <input
            type="radio"
            value={x}
            checked={selected === x}
            onChange={selectedHandler}
            id={`time-tab${i + 1}`}
            name="time-tab"
            className="choice-time-input"
          />
          <label key={i} htmlFor={`time-tab${i + 1}`} className="choiceTime">
            {x}
          </label>
          {i !== timeOptions.length - 1 && <div className="palka" />}
        </>
      ))}

      <div className="line" />
    </div>
  )
}

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(current);
  return { value: current.time }
}

export default connect(mapStateToProps, null)(ChoiceTime)