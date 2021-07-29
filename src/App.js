import "./App.css";

import { Upload, Row, Col, Input, Button, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import useSound from "use-sound";
import { useState } from "react";
import popupoff from "./sounds/pop-up-off.mp3";

const RadioInput = ({ selected, onChange, text, value, isActive }) => {
  const [playOff] = useSound(popupoff, { volume: 0.25 });
  return (
    <div
      className={`h100 w100 ${value === selected && "radio-btn"}`}
      onClick={() => {
        if (isActive) {
          onChange(value);
          playOff();
        }
      }}
    >
      <div className="fl1 w100 h100 radio-btn-text">{text}</div>
    </div>
  );
};

const СustomRadio2btn = ({ text1, text2 }) => {
  const [selected, setSelected] = useState("first");
  return (
    <div className="fl2 w85 h75 radio-bg">
      <div className="w50 h100">
        <RadioInput
          value="first"
          selected={selected}
          text={text1}
          onChange={setSelected}
          isActive={true}
        />
      </div>
      <div className="w50 h100">
        <RadioInput
          value="second"
          selected={selected}
          text={text2}
          onChange={setSelected}
          isActive={true}
        />
      </div>
    </div>
  );
};

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

const СustomRadio4btn = ({ text1, text2, text3, text4 }) => {
  const [selected, setSelected] = useState("first");
  return (
    <div className="fl2 w93 h75 radio-bg">
      <div className="w25 h100">
        <RadioInput
          value="first"
          selected={selected}
          text={text1}
          onChange={setSelected}
          isActive={true}
        />
      </div>
      <div className="w25 h100">
        <RadioInput
          value="second"
          selected={selected}
          text={text2}
          onChange={setSelected}
          isActive={true}
        />
      </div>
      <div className="w25 h100">
        <RadioInput
          value="third"
          selected={selected}
          text={text3}
          onChange={setSelected}
          isActive={true}
        />
      </div>
      <div className="w25 h100">
        <RadioInput
          value="fourth"
          selected={selected}
          text={text4}
          onChange={setSelected}
          isActive={true}
        />
      </div>
    </div>
  );
};

const Registration = ({ reg }) => {
  if (reg === "first") {
    return (
      <>
        <Input placeholder="ФИО" className="neo1" />
        <Input placeholder="телефон" className="neo1" />
        <Input placeholder="Адрес" className="neo1" />
        <Input placeholder="Почта" className="neo1" />
        <Input placeholder="Пароль" className="neo1" />
      </>
    );
  } else {
    return (
      <>
        <Input placeholder="Наименование" className="neo1" />
        <Input placeholder="Адрес" className="neo1" />
        <Input placeholder="Почта" className="neo1" />
        <Input placeholder="Пароль" className="neo1" />
        <Input placeholder="ФИО" className="neo1" />
        <Input placeholder="Телефон" className="neo1" />
        <Input placeholder="ИНН" className="neo1" />
        <Input placeholder="Банк" className="neo1" />
        <Input placeholder="БИК" className="neo1" />
      </>
    );
  }
};

function App() {
  const [role, setRole] = useState("first");
  const [pay, setPay] = useState("first");
  const [reg, setReg] = useState("first");
  return (
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
                    className="upload h100"
                  >
                    <Button
                      className="upload-btn neo2"
                      size="large"
                      icon={<UploadOutlined />}
                    >
                      PDF
                    </Button>
                  </Upload>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    directory
                    className="upload h100 center "
                  >
                    <Button
                      className="upload-btn neo2"
                      size="large"
                      icon={<UploadOutlined />}
                    >
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
                      <Col span={8} className="g1r2 fl1">
                        <div className="fl1 input neo1 w85 h75">
                          <b>A4</b>
                          <InputNumber
                            min={0}
                            max={100}
                            defaultValue={0}
                            className="w100 h30 neo2"
                            size="large"
                          />
                        </div>
                      </Col>
                      <Col span={8} className="fl1  g1r2">
                        <div className="fl1 input neo1 w85 h75">
                          <b>A3</b>
                          <InputNumber
                            min={0}
                            max={100}
                            defaultValue={0}
                            className="w100 h30 neo2"
                            size="large"
                          />
                        </div>
                      </Col>
                      <Col span={8} className="fl1  g1r2">
                        <div className="fl1 input neo1 w85 h75">
                          <b>A2</b>
                          <InputNumber
                            min={0}
                            max={100}
                            defaultValue={0}
                            className="w100 h30 neo2"
                            size="large"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="h50">
                      <Col span={8} className="fl1  g1r2">
                        <div className="fl1 input neo1 w85 h75">
                          <b>A1</b>
                          <InputNumber
                            min={0}
                            max={100}
                            defaultValue={0}
                            className="w100 h30 neo2"
                            size="large"
                          />
                        </div>
                      </Col>
                      <Col span={8} className="fl1  g1r2">
                        <div className="fl1 input neo1 w85 h75">
                          <b>A0</b>
                          <InputNumber
                            min={0}
                            max={100}
                            defaultValue={0}
                            className="w100 h30 neo2"
                            size="large"
                          />
                        </div>
                      </Col>
                      <Col span={8} className="fl1  g1r2">
                        <div className="fl1 input neo1 w85 h75">
                          <b>A0+</b>
                          <InputNumber
                            min={0}
                            max={100}
                            defaultValue={0}
                            className="w100 h30 neo2"
                            size="large"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={12} className="fl1 center">
                    <div className="fl1 neo1 download"></div>
                  </Col>
                </Row>
                <Row className="h25">
                  <Col span={8} className="fl1  g1r2">
                    <div className="fl1 input neo1 w85 h75">
                      <b>Кол-во томов</b>
                      <InputNumber
                        min={0}
                        max={100}
                        defaultValue={0}
                        className="w100 h30 neo2"
                        size="large"
                      />
                    </div>
                  </Col>
                  <Col span={16} className="fl1 g1r4">
                    <СustomRadio4btn
                      text1="Супер скоросшиватель"
                      text2="Пластиковая пружина"
                      text3="Металлическая пружина"
                      text4="Архивный переплёт"
                    />
                  </Col>
                </Row>
                <Row className="h25">
                  <Col span={8} className="fl1  g1r2">
                    <СustomRadio2btn text1="Ч/Б" text2="Цвет" />
                  </Col>
                  <Col span={16} className="fl1  g1r4">
                    <СustomRadio4btn
                      text1="3ч"
                      text2="6ч"
                      text3="12ч"
                      text4="24ч"
                    />
                  </Col>
                </Row>
              </div>
            </div>

            <div className="separator2"></div>

            {/* блок 3, оплата и выбор оплаты */}
            <Block3 role={role} setRole={setRole} pay={pay} setPay={setPay} />
          </div>

          <div className="Second-grid fl1">
            <div className="block1 w100 fl1 neo1 login-block">
              <div className="w100 h30 center">
                <p>Личный кабинет</p>
              </div>
              {/* блок 1, вход в личный каб*/}
              <div className="fl2 h50 w100 login-block">
                <Input
                  placeholder="Логин"
                  className="h100 w33 radio-btn"
                ></Input>
                <Input
                  placeholder="Пароль"
                  className="h100 w33 radio-btn"
                ></Input>
                <Button className="fl1 w25 h100 radio-btn center">Войти</Button>
              </div>
            </div>

            <div className="separator1"></div>

            {/* блок 2, */}
            <div className="block2 neo1">
              <Row className="h25">
                <Col span={12} className="g1r2 fl1 ">
                  <div className="fl1 input neo1 w85 h75">
                    <b>Сумма на счету</b>
                    <div className="w100 h30 fl1 neo2"></div>
                  </div>
                </Col>
                <Col span={12} className="g1r2 fl1 ">
                  <div className="fl1 input neo1 w85 h75">
                    <b>Возможный кредит</b>
                    <div className="w100 h30 fl1 neo2"></div>
                  </div>
                </Col>
              </Row>
              <Row className="h25">
                <Col span={12} className="g1r2 fl1 ">
                  <div className="fl1 input neo1 w85 h75">
                    <b>Личная скидка</b>
                    <div className="w100 h30 fl1 neo2"></div>
                  </div>
                </Col>
                <Col span={12} className="g1r2 fl1 ">
                  <div className="fl1 input neo1 w85 h75">
                    <b>Итоговая цена</b>
                    <div className="w100 h30 fl1 neo2"></div>
                  </div>
                </Col>
              </Row>
              <div className="order w100 h50">
                <div className="fl1 w100 h100 neo1">
                  <Row className="w95 h50">
                    <Col span={12} className="g1r2 fl1 pr3">
                      <b>Номер заказа</b>
                      <Input
                        placeholder="145235"
                        className="w100 h30 fl1 neo2"
                      ></Input>
                    </Col>
                    <Col span={12} className="g1r2 fl1">
                      <b>Статус заказа</b>
                      <div className="w100 h30 fl1 neo2"></div>
                    </Col>
                  </Row>
                  <Row className="w95 h50">
                    <Col span={12} className="g1r2 fl1">
                      <b>Время доставки</b>
                      <div className="w100 h30 fl1 neo2"></div>
                    </Col>
                    <Col span={12} className="g1r2 fl1">
                      <b>Файлы</b>
                      <div className="w100 h30 fl1 neo2"></div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>

            <div className="separator2"></div>

            {/* блок 3, */}
            <div className="block3 fl1 neo1">
              <div className="fl2 h25 center">
                <b>Регистрация</b>
                <div className="fl2 w85 h75 radio-bg">
                  <div className="w50 h100">
                    <RadioInput
                      value="first"
                      selected={reg}
                      text={"Физическое лицо"}
                      onChange={setReg}
                      isActive={true}
                    />
                  </div>
                  <div className="w50 h100">
                    <RadioInput
                      value="second"
                      selected={reg}
                      text={"Юридическое лицо"}
                      onChange={setReg}
                      isActive={true}
                    />
                  </div>
                </div>
              </div>
              <Registration reg={reg} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
