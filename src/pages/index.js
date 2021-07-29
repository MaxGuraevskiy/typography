import React, { useState } from "react"
// import { Link } from "gatsby"
import { Upload, Row, Col, Input, Button, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import Registration from "../components/Registration"
import СustomRadio from "../components/СustomRadio"
import Block3 from "../components/Block3"

import Seo from "../components/seo"

const colorOptions = ["Ч/Б", "Цвет"]
const regOption = ["Физическое лицо", "Юридическое лицо"]
const hourOptions = ["3ч", "6ч", "12ч", "24ч"]
const typeOptions = [
  "Супер скоросшиватель",
  "Пластиковая пружина",
  "Металлическая пружина",
  "Архивный переплёт"
]

const IndexPage = () => {
  const [delivery, setDelivery] = React.useState(0)
  const [color, setColor] = useState(0)
  const [role, setRole] = useState(0)
  const [type, setType] = useState(0)
  const [hour, setHour] = useState(0)
  const [reg, setReg] = useState(0)
  const [pay, setPay] = useState(0)

  const cardPaperSize = (name) => (
    <Col span={8} className="fl1 g1r2">
      <div className="fl1 input neo1 w85 h75">
        <b>{name}</b>
        <InputNumber min={0} max={100} defaultValue={0}
          className="w100 h30 neo2" size="large" />
      </div>
    </Col>
  )

  const personalCard = (name) => (
    <Col span={12} className="g1r2 fl1 ">
      <div className="fl1 input neo1 w85 h75">
        <b>{name}</b>
        <div className="w100 h30 fl1 neo2" />
      </div>
    </Col>
  )

  const orderCard = (name, children) => (
    <Col span={12} className="g1r2 fl1">
      <b>{name}</b>
      {children}
    </Col>
  )

  return <>
    <Seo title="Home" />
    <div className="App">
      <header className="App-header fl1">
        <div className="Main-content fl2">
          <div className="First-grid fl1">
            {/* блок первый, название и две кнопки загрузки проектов */}
            <div className="block1 w100 neo1">
              <Row className=" fl2 h100">
                {/* надпись "Печать чертежей" */}
                <Col span={8} className=" fl1 neo1 center">
                  Печать чертежей
                </Col>
                {/* две кнопки загрузки проектов */}
                <Col span={16} className="g1r12 fl2 center">
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    directory
                    className="upload h100">
                    <Button
                      className="upload-btn neo2"
                      size="large"
                      icon={<UploadOutlined />}>
                      PDF
                    </Button>
                  </Upload>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    directory
                    className="upload h100 center">
                    <Button
                      className="upload-btn neo2"
                      size="large"
                      icon={<UploadOutlined />}>
                      DWG
                    </Button>
                  </Upload>
                </Col>
              </Row>
            </div>

            <div className="separator1"></div>

            {/* блок 2 - основной, 4 строчки */}
            <div className="block2 neo1">
              <div className=" h100">
                <Row className="h50">
                  <Col span={12}>
                    <Row className="h50">
                      {cardPaperSize("A4")}
                      {cardPaperSize("A3")}
                      {cardPaperSize("A2")}
                    </Row>
                    <Row className="h50">
                      {cardPaperSize("A1")}
                      {cardPaperSize("A0")}
                      {cardPaperSize("A0+")}
                    </Row>
                  </Col>
                  <Col span={12} className="fl1 center">
                    <div className="fl1 neo1 download" />
                  </Col>
                </Row>
                <Row className="h25">
                  <Col span={8} className="fl1 g1r2">
                    <div className="fl1 input neo1 w85 h75">
                      <b>Кол-во томов</b>
                      <InputNumber min={0} max={100} defaultValue={0}
                        className="w100 h30 neo2" size="large" />
                    </div>
                  </Col>
                  <Col span={16} className="fl1 g1r4">
                    <СustomRadio
                      options={typeOptions}
                      styles={{
                        outerClasses: "fl2 w93 h75 radio-bg",
                        innerClasses: "w25 h100"
                      }}
                      state={{ get: type, set: setType }} />
                  </Col>
                </Row>
                <Row className="h25">
                  <Col span={8} className="fl1 g1r2">
                    <СustomRadio
                      options={colorOptions}
                      styles={{
                        outerClasses: "fl2 w85 h75 radio-bg",
                        innerClasses: "w50 h100"
                      }}
                      state={{ get: color, set: setColor }} />
                  </Col>
                  <Col span={16} className="fl1 g1r4">
                    <СustomRadio
                      options={hourOptions}
                      styles={{
                        outerClasses: "fl2 w93 h75 radio-bg",
                        innerClasses: "w25 h100"
                      }}
                      state={{ get: hour, set: setHour }} />
                  </Col>
                </Row>
              </div>
            </div>

            <div className="separator2" />

            {/* блок 3, оплата и выбор оплаты */}
            <Block3
              pay={pay} setPay={setPay}
              role={role} setRole={setRole}
              delivery={delivery} setDelivery={setDelivery} />
          </div>

          <div className="Second-grid fl1">
            <div className="block1 w100 fl1 neo1 login-block">
              <div className="w100 h30 center">
                <p>Личный кабинет</p>
              </div>
              {/* блок 1, вход в личный каб*/}
              <div className="fl2 h50 w100 login-block">
                <Input className="h100 w33 radio-btn" placeholder="Логин" />
                <Input className="h100 w33 radio-btn" placeholder="Пароль" />
                <Button className="fl1 w25 h100 radio-btn center">Войти</Button>
              </div>
            </div>

            <div className="separator1" />

            {/* блок 2, */}
            <div className="block2 neo1">
              <Row className="h25">
                {personalCard("Сумма на счету")}
                {personalCard("Возможный кредит")}
              </Row>
              <Row className="h25">
                {personalCard("Личная скидка")}
                {personalCard("Итоговая цена")}
              </Row>

              <div className="order w100 h50">
                <div className="fl1 w100 h100 neo1">
                  <Row className="w95 h50">
                    {orderCard("Номер заказа", (
                      <Input
                        placeholder="145235"
                        className="w100 h30 fl1 neo2" />))}
                    {orderCard("Статус заказа", (<div className="w100 h30 fl1 neo2" />))}

                  </Row>
                  <Row className="w95 h50">
                    {orderCard("Время доставки", (<div className="w100 h30 fl1 neo2" />))}
                    {orderCard("Файлы", (<div className="w100 h30 fl1 neo2" />))}
                  </Row>
                </div>
              </div>
            </div>

            <div className="separator2" />

            {/* блок 3, */}
            <div className="block3 fl1 neo1">
              <div className="fl2 h25 center">
                <b>Регистрация</b>
                <СustomRadio
                  options={regOption}
                  styles={{
                    outerClasses: "fl2 w85 h75 radio-bg",
                    innerClasses: "w50 h100"
                  }}
                  state={{ get: reg, set: setReg }} />
              </div>
              <Registration reg={reg} />
            </div>
          </div>
        </div>
      </header>
    </div>
  </>
}

export default IndexPage
