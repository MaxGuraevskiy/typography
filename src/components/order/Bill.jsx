import React from "react"
import { connect } from "react-redux";
import angle from '../../images/angle.svg';
import { makeOrder } from "../../redux/actions";

import "./order.css"

const Bill = () => {
  return (<div id="bill">
    <h2 id="userName">Максим Гураевский Дмитриевич</h2>

    <div className="userDetails" id="balance">
      <p className="userDetails" children={0} />
      <label htmlFor="balance">Сумма на счету</label>
    </div>
    <div className="userDetails" id="possibleDebt">
      <p className="userDetails" children={0} />
      <label htmlFor="possibleDebt">Возможный кредит</label>
    </div>
    <div className="userDetails" id="personalSale">
      <p className="userDetails" children={0} />
      <label htmlFor="personalSale">Личная скидка</label>
    </div>

    <div id="priceDiv">
      <p className="bill">Итоговая цена:</p>
      <p className="bill" id="price">250 000₽</p>
    </div>
    <div id="makeOrderDiv">
      <button id="makeOrder" onClick={() =>
        makeOrder({ num: 20589, status: "Новый заказ" })}>
        Заказать
      </button>
    </div>

    <img id="angle" src={angle} alt="Уголочек" />
  </div>);
}

const mapDispatchToProps = {
  makeOrder
}

export default connect(null, mapDispatchToProps)(Bill)
