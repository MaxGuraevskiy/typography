import React from "react"

import "./order.css"

const Bill = () => {
  return (<div id="bill">
    <h2 id="userName">Максим Гураевский Дмитриевич</h2>
    <div id="input-bills">
      <div className="input-bill">
        <input className="input-bill" id="balance" />
        <label htmlFor="balance">Сумма на счету</label>
      </div>
      <div className="input-bill">
        <input className="input-bill" id="posibleDebt" />
        <label htmlFor="posibleDebt">Возможный кредит</label>
      </div>
      <div className="input-bill">
        <input className="input-bill" id="personalSale" />
        <label htmlFor="personalSale">Личная скидка</label>
      </div>
    </div>

    <div id="priceDiv">
      <p>Итоговая цена:</p>
      <p id="price">250 000₽</p>
    </div>
    <div>
      <button id="makeOrder">Заказать</button>
    </div>
  </div>);
}

export default Bill
