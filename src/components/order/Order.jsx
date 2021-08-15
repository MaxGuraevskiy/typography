import React, { useState } from 'react';

import ChoiceNDS from './ChoiceNDS';
import Bill from './Bill';
import Map from './Map';
import './order.css'
import { connect } from 'react-redux';

const ndsOptions = ["Физическое лицо", "Юридическое лицо"]

const Order = ({ address, registration }) => {

  const [selected, setSelected] = useState(ndsOptions[registration])

  const selectedHandler = e => {
    setSelected(e.target.value)
    // console.log(e.target.checked)
  }

  return (<>
    <div style={{ height: "10%" }} className="nds-container">
      {ndsOptions.map((x, i) => (<>
        <input
          type="radio"
          value={x}
          checked={selected === x}
          onChange={selectedHandler}
          id={`nds-tab${i + 1}`}
          name="nds-tab"
          className="choice-nds-input" />
        <label key={i}
          htmlFor={`nds-tab${i + 1}`}
          className="choiceNDS"
          children={x} />
      </>))}
      <div className="nds-line" />
    </div>

    <div id="orderDetails">
      <div style={{ width: "50%" }}>
        <ChoiceNDS />
        <h3 className="address">Адрес доставки</h3>
        <p className="address">{address}</p>
      </div>
      <Map />
    </div>

    <Bill />
  </>);
}

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log(state);
  return {
    // nds: current.nds,
    // delivery: current.delivery,
    address: current.address,
    registration: state.user.registration
  };
  // return { value: current.time }
}

export default connect(mapStateToProps, null)(Order)