import { CHANGE_ORDER, CREATE_ORDER, MAKE_ORDER, SHOW_ORDER } from "./types";

const initialOrder = {
  office: {
    num: 0, status: "ОПЕРАЦИИ"
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
  orders: [Object.assign({}, initialOrder)],
  currentOrder: 0,
}

export const ordersReducer = (state = initial, action) => {
  console.log("ordersReducer", action.type);
  switch (action.type) {
    //* Изменяет поле операционного заказа
    case CHANGE_ORDER:
      if (action.payload.field.includes("sizes"))
        return {
          ...state, currentOrder: 0, orders: state.orders.map(x => x.office.num !== 0 ? x :
            { ...x, sizes: { ...x.sizes, [action.payload.field.substring(6)]: action.payload.value } })
        }

      state.orders[0][action.payload.field] = action.payload.value
      return { ...state, currentOrder: 0 }

    //* Переводит заказ на странице в операционный
    case CREATE_ORDER:
      return { ...state, orders: state.orders.map(x => x.office.num !== 0 ? x : Object.assign({}, initialOrder)), currentOrder: 0 }

    //* Обращается с операционным заказом & серверная логика
    case MAKE_ORDER:
      const newOrder = orderFromState(state);
      return {
        ...state,
        orders: state.orders.concat(newOrder),
        currentOrder: newOrder.office.num
      };

    case SHOW_ORDER:
      return { ...state, currentOrder: action.payload }
    default: return state
  }
}

function orderFromState(state) {
  let current = state.orders[state.currentOrder]
  return {
    office: {
      num: state.orders[state.orders.length - 1].office.num + 1,
      status: "Новый"
    },
    sizes: {
      A4: current.sizes.A4, A3: current.sizes.A3,
      A2: current.sizes.A2, A1: current.sizes.A1,
      A0: current.sizes.A0, A0_plus: current.sizes.A0_plus,
    },
    format: current.format,
    time: current.time,
    nds: current.nds,
    delivery: current.delivery,
    address: current.address,
    coordinates: [...current.coordinates],
    finalPrice: current.finalPrice,
  }
}