import { combineReducers } from "redux";
import { ordersReducer } from "./ordersReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
  orders: ordersReducer,
  user: userReducer
})