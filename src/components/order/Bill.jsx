import React from "react"
import { connect } from "react-redux";
import angle from '../../images/angle.svg';
import { makeOrder } from "../../redux/actions";

import "./order.css"

const Bill = ({ finalPrice, userData }) => {
  return (<div id="bill">
    <h2 id="userName">{userData.fullName}</h2>

    <div className="userDetails" id="balance">
      <p className="userDetails" children={userData.sum} />
      <label htmlFor="balance">Сумма на счету</label>
    </div>
    <div className="userDetails" id="possibleDebt">
      <p className="userDetails" children={userData.possibleCredit} />
      <label htmlFor="possibleDebt">Возможный кредит</label>
    </div>
    <div className="userDetails" id="personalSale">
      <p className="userDetails" children={userData.personalDiscount} />
      <label htmlFor="personalSale">Личная скидка</label>
    </div>

    <div id="priceDiv">
      <p className="bill">Итоговая цена:</p>
      <p className="bill" id="price">{finalPrice}₽</p>
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

const mapStateToProps = state => {
  const current = state.orders.orders[state.orders.currentOrder];
  // console.log({
  //   finalPrice: current.finalPrice,
  //   userData: state.user
  // });
  return {
    finalPrice: current.finalPrice,
    userData: state.user
  };
  // return { value: current.time }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
