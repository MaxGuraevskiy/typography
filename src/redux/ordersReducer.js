import { MAKE_ORDER } from "./types";

const initialOrder = {
  office: {
    num: 20589, status: "В процессе"
  },
  sizes: {
    A4: 0, A3: 0,
    A2: 0, A1: 0,
    A0: 0, A0_plus: 0,
  },
  format: 0,
  time: 0,
  nds: 0,
  delivery: 0,
  address: "3-я улица Строителей, д.25, кв.12",
  coordinates: [55.769545, 37.606613],
  finalPrice: 250_000,
}

const initial = {
  orders: [
    initialOrder
  ],
  currentOrder: 0,
}

export const ordersReducer = (state = initial, action) => {
  switch (action.type) {
    case MAKE_ORDER: return { ...state, orders: state.orders.concat(action.payload) };
    default: return state
  }
}