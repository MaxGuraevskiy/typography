import React, { useState } from 'react';
import loadOrder from '../../images/loadOrder.svg'
import "./account.css"

const orders = [
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" },
  { num: 20589, status: "В процессе" }
]

const Order = ({ order, id, active, setActive }) => {
  return (<div onClick={() => setActive(id)}
    className={`order ${active === id ? "active" : ""}`}>
    <h5 className="order-num" children={`№${order.num + id}`} />
    <p className="order-status" children={order.status} />
    <img className="order-download" src={loadOrder} alt="Загрузить" />
  </div>)
}

const Account = () => {
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

export default Account;