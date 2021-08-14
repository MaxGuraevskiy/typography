import React, { useState } from "react"

import './choice-nds.css'

import nds from "../../images/order-nds.svg"
import pickup from "../../images/order-pickup.svg"
import delivery from "../../images/order-delivery.svg"

const deliveryOptions = [
  { option: "Самовывоз", src: pickup },
  { option: "Доставка", src: delivery }
]
const ndsOptions = ["С", "Без"]

const ChoiceNDS = () => {
  const [ndsSelected, setNdsSelected] = useState('C')
  const [deliverySelected, setDeliverySelected] = useState('Самовывоз')

  return (
    <div className="nds-choice-container">
      <div className="nds-first-row">
        <div className="nds-first-row-first-column">
          {ndsOptions.map((x, i) => (
            <button key={i}
              className={"nds-box " + (ndsSelected === x ? "choice-delivery-btn-selected" : "")}
              onClick={() => setNdsSelected(x)}
              children={x}
            />
          ))}
        </div>

        <div className="nds-first-row-second-column">
          <img src={nds} alt="nds" />
          <label className="nds-label">
            НДС
          </label>
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

export default ChoiceNDS
