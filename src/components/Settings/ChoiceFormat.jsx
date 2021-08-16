import React from "react"
import { connect } from "react-redux"
import { changeOrder } from "../../redux/actions";
import "./choice-format-styles.css"

const formatOptions = [
  "Супер скоросшиватель",
  "Архивный переплёт",
  "Пластиковая пружина",
  "Металлическая пружина"
]

const ChoiceFormat = ({ value, disabled = false, changeOrder }) => (
  <div className="choice-format-container">
    {formatOptions.map((x, i) => (
      <button key={i}
        className={"choice-format-btn " + (formatOptions[value] === x ? "choice-format-btn-selected" : "")}
        onClick={() => changeOrder("format", i)}
        children={x}
        disabled={disabled} />
    ))}
  </div>
)


const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(current);
  return {
    value: current.format,
    disabled: state.orders.currentOrder !== 0
  }
}

export default connect(mapStateToProps, { changeOrder })(ChoiceFormat)