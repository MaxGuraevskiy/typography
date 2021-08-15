import { CHANGE_ORDER, CREATE_ORDER, MAKE_ORDER, SHOW_ORDER } from "./types";


// TODO тут должна быть логика отправки на сервер
export function makeOrder() {
  // console.log("makeOrder", MAKE_ORDER);
  return { type: MAKE_ORDER }
}

export function showOrder(num) {
  // console.log("showOrder", SHOW_ORDER);
  return { type: SHOW_ORDER, payload: num }
}

export function createOrder() {
  return { type: CREATE_ORDER }
}

//* Всегда изменяется операционный заказ
export function changeOrder(field, value) {
  console.log(field, value);
  return {
    type: CHANGE_ORDER,
    payload: { field, value }
  }
}