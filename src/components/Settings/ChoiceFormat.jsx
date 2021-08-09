import React, { useState } from "react"
import "./choice-format-styles.css"

const formatOptions = [
  "Супер скоросшиватель",
  "Архивный переплёт",
  "Пластиковая пружина",
  "Металлическая пружина"
]

const ChoiceFormat = () => {

  const [selected, setSelected] = useState(formatOptions[0])

  return (
    <div className="choice-format-container">
      {formatOptions.map((x, i) => (
        <button key={i}
          className={"choice-format-btn " + (selected === x ? "selected" : "")}
          onClick={() => setSelected(formatOptions[i])}
          children={x} />
      ))}
    </div>)
}

export default ChoiceFormat
