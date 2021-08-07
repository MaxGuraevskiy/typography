import React from "react"

import pickup from "../../images/order-pickup.svg"
import delivery from "../../images/order-delivery.svg"

const ChoiceDelivery = _ => {
  return (
    <>
      <img src={pickup} alt="Самовывоз" />
      <img src={delivery} alt="Доставка" />
    </>
  )
}

export default ChoiceDelivery
