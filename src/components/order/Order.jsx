import React from 'react';

import { connect } from 'react-redux';
import ChoiceNDS from './ChoiceNDS';
import Bill from './Bill';
import MyMap from './MyMap';
import './order.css'

const ndsOptions = ["Физическое лицо", "Юридическое лицо"]

const Order = ({ address, registration }) => {

  const selectedHandler = e => {
    // changeOrder("registration", ndsOptions.findIndex(x => x === e.target.value))
  }

  return (<>
    <div style={{ height: "10%" }} className="nds-container">
      {ndsOptions.map((x, i) => (<>
        <input
          type="radio"
          value={x}
          checked={ndsOptions[registration] === x}
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
      <MyMap />
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