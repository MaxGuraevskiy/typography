import { MAKE_ORDER } from "./types";

const initialOrders = {
  orders: [
    { num: 20589, status: "В процессе" }
  ]
}

export const ordersReducer = (state = initialOrders, action) => {
  switch (action.type) {
    case MAKE_ORDER: return { ...state, orders: state.orders.concat(action.payload) };
    default: return state
  }
}