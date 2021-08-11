import React, { useState } from 'react';

import ChoiceNDS from './ChoiceNDS';
import Bill from './Bill';
import Map from './Map';
import './order.css'

const ndsOptions = ["Физическое лицо", "Юридическое лицо"]

const Order = () => {

  const [selected, setSelected] = useState(ndsOptions[0])

  const selectedHandler = e => {
    setSelected(e.target.value)
    // console.log(e.target.checked)
  }

  return (<>
    <div style={{ height: "10%" }} className="nds-container">
      {ndsOptions.map((x, i) => (
        <>
          <input
            type="radio"
            value={x}
            checked={selected === x}
            onChange={selectedHandler}
            id={`nds-tab${i + 1}`}
            name="nds-tab"
            className="choice-nds-input"
          />
          <label key={i} htmlFor={`nds-tab${i + 1}`} className="choiceNDS">
            {x}
          </label>
        </>
      ))}
      <div className="nds-line" />
    </div>

    <div id="orderDetails">
      <div style={{ width: "50%" }}>
        <ChoiceNDS />
        <h3 className="address">Адрес доставки</h3>
        <p className="address">3-я улица Строителей, д.25, кв.12</p>
      </div>
      <Map />
    </div>

    <Bill />
  </>);
}

export default Order;