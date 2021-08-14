import { MAKE_ORDER } from "./types";


export function makeOrder(order) {
  return {
    type: MAKE_ORDER,
    payload: postMessage(order)
  }
}