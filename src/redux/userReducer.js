const initial = {
  fullName: "Максим Гураевский Дмитриевич",
  sum: 0,
  possibleCredit: 0,
  personalDiscount: 0,
  registration: 0
}

export const userReducer = (state = initial, action) => {
  console.log("userReducer", action.type);
  switch (action.type) {
    default: return state
  }
}