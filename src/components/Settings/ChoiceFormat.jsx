import React, { useState } from "react"
import { connect } from "react-redux"
import "./choice-format-styles.css"

const formatOptions = [
  "Супер скоросшиватель",
  "Архивный переплёт",
  "Пластиковая пружина",
  "Металлическая пружина"
]

const ChoiceFormat = ({ value }) => {

  const [selected, setSelected] = useState(formatOptions[value])

  return (
    <div className="choice-format-container">
      {formatOptions.map((x, i) => (
        <button key={i}
          className={"choice-format-btn " + (selected === x ? "choice-format-btn-selected" : "")}
          onClick={() => setSelected(formatOptions[i])}
          children={x} />
      ))}
    </div>)
}


const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(current);
  return { value: current.format }
}

export default connect(mapStateToProps, null)(ChoiceFormat)