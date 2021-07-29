import React from "react";
import { Row, Col, Input, Button } from "antd";

import СustomRadio2btn from "./СustomRadio2btn"
import RadioInput from "./RadioInput"


import "./App.css";


const Block3 = ({ role, setRole, pay, setPay }) => {
  return (
    <div className="block3 neo1">
      <Row className="h50">
        <Col span={8} className="fl1 center">
          <div className="fl1 h100 w90 center">
            <div className="fl2 w85 h75 radio-bg">
              <div className="w50 h100">
                <RadioInput
                  value="first"
                  selected={role}
                  text={"Физическое лицо"}
                  onChange={setRole}
                  isActive={true}
                />
              </div>
              <div className="w50 h100">
                <RadioInput
                  value="second"
                  selected={role}
                  text={"Юридическое лицо"}
                  onChange={setRole}
                  isActive={true}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col span={8} className="fl1  g1r2">
          <СustomRadio2btn text1="Самовывоз" text2="Доставка" />
        </Col>
        <Col span={8} className="fl1 g1r2">
          <div className="fl1 neo1 w85 h75 input">
            <b>Цена</b>
            <div className="w100 h30 fl1 neo2"></div>
          </div>
        </Col>
      </Row>
      <Row className="h50">
        <Col span={8} className="fl1  center">
          <div className="fl1 h100 w90 center">
            <div className="fl2 w85 h75 radio-bg">
              <div className="w50 h100">
                <RadioInput
                  value="first"
                  selected={`${role === "first" ? "first" : pay}`}
                  text={"с НДС"}
                  onChange={setPay}
                  isActive={`${role === "first" ? false : true}`}
                />
              </div>
              <div className="w50 h100">
                <RadioInput
                  value="second"
                  selected={`${role === "first" ? "first" : pay}`}
                  text={"без НДС"}
                  onChange={setPay}
                  isActive={`${role === "first" ? false : true}`}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col span={8} className="fl1 g1r2">
          <div className="fl1 input neo1 w85 h75">
            <b>Адрес доставки</b>
            <Input
              placeholder="Успенский переулок, д.3с2, офис 1"
              className="neo2"
            />
          </div>
        </Col>
        <Col span={8} className="fl1 g1r2">
          <Button className="neo1 w85 h75" style={{ fontSize: 32 }}>
            <b>Заказать</b>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Block3
