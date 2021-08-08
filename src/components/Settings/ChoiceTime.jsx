import React, { useState } from "react"
import "./choice-time-styles.css"

const ChoiceTime = () => {
  const [selected, setSelected] = useState("3ч")

  const selectedHandler = e => {
    setSelected(e.target.value)
    console.log(e.target.checked)
  }

  return (
    <>
      <div className="container">
        {["3ч", "6ч", "12ч", "24ч"].map((x, i) => (
          <>
            <input
              type="radio"
              value={x}
              checked={selected === x}
              onChange={selectedHandler}
              id={`tab${i + 1}`}
              name="tab"
              className="choiceTime"
            />
            <label key={i} htmlFor={`tab${i + 1}`} className="choiceTime">
              {x}
            </label>{" "}
          </>
        ))}

        <div className="line"></div>
      </div>
    </>
  )
}

export default ChoiceTime
