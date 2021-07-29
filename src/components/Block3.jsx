import React from "react";
import { Row, Col, Input, Button } from "antd";
import СustomRadio from "./СustomRadio"
import "./App.css";


const deliveryOptions = ["Самовывоз", "Доставка"]
const regOptions = ["Физическое лицо", "Юридическое лицо"]
const ndsOptions = ["с НДС", "без НДС"]

const Block3 = ({ role, setRole, pay, setPay, delivery, setDelivery }) => {

  return <div className="block3 neo1">
    <Row className="h50">
      <Col span={8} className="fl1 center">
        <div className="fl1 h100 w90 center">
          <СustomRadio
            options={regOptions}
            styles={{
              outerClasses: "fl2 w85 h75 radio-bg",
              innerClasses: "w50 h100"
            }}
            state={{ get: role, set: setRole }} />
        </div>
      </Col>

      <Col span={8} className="fl1  g1r2">
        <СustomRadio
          options={deliveryOptions}
          styles={{
            outerClasses: "fl2 w85 h75 radio-bg",
            innerClasses: "w50 h100"
          }}
          state={{ get: delivery, set: setDelivery }} />
      </Col>

      <Col span={8} className="fl1 g1r2">
        <div className="fl1 neo1 w85 h75 input">
          <b>Цена</b>
          <div className="w100 h30 fl1 neo2" />
        </div>
      </Col>
    </Row>
    <Row className="h50">
      <Col span={8} className="fl1  center">
        <div className="fl1 h100 w90 center">
          <СustomRadio
            options={ndsOptions}
            styles={{
              outerClasses: "fl2 w85 h75 radio-bg",
              innerClasses: "w50 h100"
            }}
            state={{ get: (role === 0 ? 0 : pay), set: setPay }}
            isActive={role !== 0} />
        </div>
      </Col>

      <Col span={8} className="fl1 g1r2">
        <div className="fl1 input neo1 w85 h75">
          <b>Адрес доставки</b>
          <Input className="neo2" placeholder="Успенский переулок, д.3с2, офис 1" />
        </div>
      </Col>

      <Col span={8} className="fl1 g1r2">
        <Button className="neo1 w85 h75" style={{ fontSize: 32 }}>
          Заказать
        </Button>
      </Col>
    </Row>
  </div>
}

export default Block3