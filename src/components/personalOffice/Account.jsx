import React from 'react';
import { connect } from 'react-redux';
import { showOrder, createOrder } from '../../redux/actions'
import loadOrder from '../../images/loadOrder.svg'
import "./account.css"

const Order = ({ order, id, active, setActive }) => (
  <div onClick={() => setActive(id)}
    className={`order ${active === id ? "active" : ""}`}>
    <h5 className="order-num" children={`№${order.office.num}`} />
    <p className="order-status" children={order.office.status} />
    <img className="order-download" src={loadOrder} alt="Загрузить" />
  </div>
)

const Account = ({ orders, active, showOrder, createOrder }) => (<>
  <div className="orders">
    {orders.map((order, i) =>
      <Order key={i} id={order.office.num}
        order={order}
        active={active} setActive={showOrder} />
    )}
  </div>
  <div className="account-btn">
    <button className="account-btn" onClick={createOrder}>
      Создать заказ
    </button>
  </div>
</>)

const mapStateToProps = state => {
  //* Убираем нулевой, операционный, элемент
  // console.log(state.orders.orders.filter(x => x.office.num !== 0));
  return {
    orders: state.orders.orders.filter(x => x.office.num !== 0),
    active: state.orders.currentOrder
  }
}

const mapDispatchToProps = {
  showOrder, createOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)