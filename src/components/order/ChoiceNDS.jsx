import React, { useState } from "react"
import { changeOrder } from '../../redux/actions';
import './choice-nds.css'

import ndsSVG from "../../images/order-nds.svg"
import pickup from "../../images/order-pickup.svg"
import delivery from "../../images/order-delivery.svg"
import { connect } from "react-redux"

const deliveryOptions = [
  { option: "Самовывоз", src: pickup },
  { option: "Доставка", src: delivery }
]
const ndsOptions = ["С", "Без"]

const ChoiceNDS = ({ nds, delivery, registration, changeOrder, disabled }) => (
  <div className="nds-choice-container">
    <div className="nds-first-row">
      <div className="nds-first-row-first-column">
        {ndsOptions.map((x, i) => (
          <button key={i}
            className={"nds-box " + (ndsOptions[nds] === x ? "choice-delivery-btn-selected" : "")}
            onClick={() => changeOrder("nds", i)}
            children={x}
            disabled={disabled || (registration === 0 && nds === 1 && i === 1)}
          />
        ))}
      </div>

      <div className="nds-first-row-second-column">
        <img src={ndsSVG} alt="nds" />
        <label className="nds-label">НДС</label>
      </div>
    </div >

    <div className="nds-second-row">
      {deliveryOptions.map((x, i) => (
        <button key={i} disabled={disabled}
          className={"choice-delivery-btn " + (deliveryOptions[delivery].option === x.option ? "choice-delivery-btn-selected" : "")}
          onClick={() => changeOrder("delivery", i)}
        >
          <img src={x.src} alt={x.src} className="choice-delivery-pentogramm" />
          {x.option}
        </ button>
      ))}
    </div>
  </div >
)

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(state);
  return {
    nds: current.nds,
    delivery: current.delivery,
    registration: state.user.registration,
    disabled: current.office.num !== 0
  };
}
export default connect(mapStateToProps, { changeOrder })(ChoiceNDS);