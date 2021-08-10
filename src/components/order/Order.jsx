import React, { useState } from 'react';

import ChoiceNDS from './ChoiceNDS';
import ChoiceDelivery from './ChoiceDelivery';
import Bill from './Bill';
import Map from './Map';
import './order.css'

const regOptions = ["Физическое лицо", "Юридическое лицо"]

const Order = () => {

  const [selected, setSelected] = useState(regOptions[0])

  const selectedHandler = e => {
    setSelected(e.target.value)
    // console.log(e.target.checked)
  }

  return (<>
    Выбор юр/физ лицо
    <div style={{ height: "10%" }}>
      {regOptions.map((x, i) => (
        <>
          <input
            type="radio"
            value={x}
            checked={selected === x}
            onChange={selectedHandler}
            id={`reg-tab${i + 1}`}
            name="reg-tab"
            className="choice-reg-input"
          />
          <label key={i} htmlFor={`time-tab${i + 1}`} className="choiceReg">
            {x}
          </label>
          {i !== regOptions.length - 1 && <div className="reg-palka" />}
        </>
      ))}
      <div className="reg-line" />
    </div>

    <div id="orderDetails">
      <div style={{ width: "50%" }}>
        <ChoiceNDS />
        <ChoiceDelivery />
        <h3>Адрес доставки</h3>
        <p>3-я улица Строителей, д.25, кв.12</p>
      </div>
      <Map />
    </div>

    <Bill />
  </>);
}

export default Order;