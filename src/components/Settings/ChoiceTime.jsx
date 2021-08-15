import React from "react"
import { changeOrder } from "../../redux/actions"
import { connect } from "react-redux"
import "./choice-time-styles.css"

const timeOptions = ["3ч", "6ч", "12ч", "24ч"]

const ChoiceTime = ({ value, changeOrder }) => {

  const selectedHandler = e => {
    changeOrder("time", timeOptions.findIndex(x => x === e.target.value))
  }

  return (
    <div className="container">
      {timeOptions.map((x, i) => (
        <>
          <input
            type="radio"
            value={x}
            checked={timeOptions[value] === x}
            onChange={selectedHandler}
            id={`time-tab${i + 1}`}
            name="time-tab"
            className="choice-time-input" />
          <label
            key={i}
            htmlFor={`time-tab${i + 1}`}
            className="choiceTime"
            children={x} />

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

export default connect(mapStateToProps, { changeOrder })(ChoiceTime)