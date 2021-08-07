import React from 'react';

import './order.css'

const Bill = () => {
  return (<div id="bill">
    <h2 id="userName">Максим Гураевский</h2>
    <input id="balance" /><label htmlFor="balance">Сумма на счету</label>
    <input id="posibleDebt" /><label htmlFor="posibleDebt">Сумма на счету</label>
    <input id="personalSale" /><label htmlFor="personalSale">Сумма на счету</label>
  </div>);
}

export default Bill;