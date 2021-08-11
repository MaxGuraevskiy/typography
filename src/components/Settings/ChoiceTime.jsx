import React, { useState } from "react"
import "./choice-time-styles.css"

const timeOptions = ["3ч", "6ч", "12ч", "24ч"]

const ChoiceTime = () => {
  const [selected, setSelected] = useState("3ч")

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

export default ChoiceTime
