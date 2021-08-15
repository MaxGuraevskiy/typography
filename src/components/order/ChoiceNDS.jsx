import React, { useState } from "react"

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

const ChoiceNDS = ({ nds, delivery, registration }) => {
  const [ndsSelected, setNdsSelected] = useState(ndsOptions[nds])
  const [deliverySelected, setDeliverySelected] = useState(deliveryOptions[delivery].option)

  // console.log(registration === 0, nds === 1, nds);

  return (
    <div className="nds-choice-container">
      <div className="nds-first-row">
        <div className="nds-first-row-first-column">
          {ndsOptions.map((x, i) => (
            <button key={i}
              className={"nds-box " + (ndsSelected === x ? "choice-delivery-btn-selected" : "")}
              onClick={() => setNdsSelected(x)}
              children={x}
              disabled={registration === 0 && nds === 1 && i === 1}
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
          <button key={i}
            className={"choice-delivery-btn " + (deliverySelected === x.option ? "choice-delivery-btn-selected" : "")}
            onClick={() => setDeliverySelected(x.option)}
          >
            <img src={x.src} alt={x.src} className="choice-delivery-pentogramm" />
            {x.option}
          </ button>
        ))}
      </div>
    </div>)
}

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(state);
  return {
    nds: current.nds,
    delivery: current.delivery,
    registration: state.user.registration
  };
}


export default connect(mapStateToProps, null)(ChoiceNDS);