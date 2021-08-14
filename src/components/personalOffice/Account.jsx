import React, { useState } from 'react';
import { connect } from 'react-redux';

import loadOrder from '../../images/loadOrder.svg'
import "./account.css"

const Order = ({ order, id, active, setActive }) => {
  return (<div onClick={() => setActive(id)}
    className={`order ${active === id ? "active" : ""}`}>
    <h5 className="order-num" children={`№${order.num + id}`} />
    <p className="order-status" children={order.status} />
    <img className="order-download" src={loadOrder} alt="Загрузить" />
  </div>)
}

const Account = ({ orders }) => {
  const [active, setActive] = useState()

  return (<>
    <div className="orders">
      {orders.map((order, i) =>
        <Order key={i} id={i}
          order={order}
          active={active} setActive={setActive} />
      )}
    </div>
    <div className="account-btn">
      <button className="account-btn">
        Создать заказ
      </button>
    </div>
  </>);
}

const mapStateToProps = state => {
  console.log(state);
  return state.orders
}

export default connect(mapStateToProps, null)(Account)