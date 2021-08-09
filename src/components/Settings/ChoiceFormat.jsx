import React, { useState } from "react"
import "./choice-format-styles.css"

const formatOptions = ["Супер скоросшиватель", "Архивный переплёт", "Пластиковая пружина", "Металлическая пружина"]

const ChoiceFormat = () => {

  const [selected, setSelected] = useState("Супер скоросшиватель")

  const selectedHandler = e => {
    setSelected(e.target.value)
    console.log(e.target.checked)
  }

  return (
    <>
      <div className="choice-format-container">
        {formatOptions.map((x, i) => (
          <>
            <input
              type="radio"
              value={x}
              checked={selected === x}
              onChange={selectedHandler}
              id={`form-tab${i + 1}`}
              name="form-tab"
              className="choice-format-btn"
            />
            <label key={i} htmlFor={`form-tab${i + 1}`} className="choice-format-label">
              {x}
            </label>
          </>
        ))}
      </div>


    </>
  )
}

export default ChoiceFormat
