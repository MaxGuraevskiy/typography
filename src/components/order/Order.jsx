import React from 'react';

import ChoiceNDS from './ChoiceNDS';
import ChoiceDelivery from './ChoiceDelivery';
import Bill from './Bill';
import Map from './Map';
import './order.css'


const Order = () => {
  return (<>
    <div style={{ background: "coral", height: "10%" }}>Выбор юр/физ лицо</div>
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