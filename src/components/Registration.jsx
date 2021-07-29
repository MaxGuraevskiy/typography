import React from "react";
import { Input } from "antd";

import "./App.css";


const Registration = ({ reg }) => {
  if (reg === 0)
    return (<>
      <Input placeholder="ФИО" className="neo1" />
      <Input placeholder="телефон" className="neo1" />
      <Input placeholder="Адрес" className="neo1" />
      <Input placeholder="Почта" className="neo1" />
      <Input placeholder="Пароль" className="neo1" />
    </>)

  return (<>
    <Input placeholder="Наименование" className="neo1" />
    <Input placeholder="Адрес" className="neo1" />
    <Input placeholder="Почта" className="neo1" />
    <Input placeholder="Пароль" className="neo1" />
    {/* <Input placeholder="ФИО" className="neo1" />
        <Input placeholder="Телефон" className="neo1" />
        <Input placeholder="ИНН" className="neo1" />
        <Input placeholder="Банк" className="neo1" />
        <Input placeholder="БИК" className="neo1" /> */}
  </>)
};

export default Registration
