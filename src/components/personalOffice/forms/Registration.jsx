import React, { useState } from 'react';

const regOptions = ["Физическое", "Юридическое"]

const individualOptions = [
  { type: "text", placeholder: "ФИО" },
  { type: "text", placeholder: "Телефон" },
  { type: "text", placeholder: "Адрес" },
  { type: "email", placeholder: "Почта" },
  { type: "password", placeholder: "Пароль" }
]

const officialOptions = [
  { type: "text", placeholder: "Название" },
  { type: "text", placeholder: "ОГРН" },
  { type: "text", placeholder: "ИНН/КПП" },
  { type: "text", placeholder: "Р/С" },
  { type: "text", placeholder: "Банк" },
  { type: "text", placeholder: "К/С" },
  { type: "text", placeholder: "БИК" },
  { type: "text", placeholder: "ФИО" },
  { type: "text", placeholder: "Телефон" },
  { type: "email", placeholder: "Почта" },
  { type: "text", placeholder: "Адрес" },
  { type: "password", placeholder: "Пароль" }
]

const Registration = ({ setLogin }) => {
  const [reg, setReg] = useState(regOptions[0])

  const selectedHandler = e => {
    // console.log(e.target.value, reg)
    setReg(e.target.value)
  }

  return (<form id="registrationForm">

    <div className="reg-container">
      {regOptions.map((x, i) => (
        <>
          <input
            type="radio"
            value={x}
            checked={reg === x}
            onChange={selectedHandler}
            id={`reg-tab${i + 1}`}
            name="reg-tab"
            className="choice-reg-input" />
          <label
            htmlFor={`reg-tab${i + 1}`}
            className="choiceREG"
            children={x} />
        </>
      ))}
      <div className="reg-line" />
    </div>

    {reg === "Физическое" && <div id="Juridic-fields">
      {individualOptions.map((x, i) =>
        <div key={i}>
          <input autoComplete placeholder={x.placeholder} type={x.type} />
          <hr className="divider" />
        </div>
      )}

      {/* <input placeholder="ФИО" type="text" />
      <hr className="divider" />

      <input placeholder="Телефон" type="text" />
      <hr className="divider" />

      <input placeholder="Адрес" type="text" />
      <hr className="divider" />

      <input placeholder="Почта" type="email" />
      <hr className="divider" />

      <input placeholder="Пароль" type="password" />
      <hr className="divider" id="last" /> */}
    </div>}

    {reg === "Юридическое" && <div id="Juridic-fields">
      {officialOptions.map((x, i) =>
        <div key={i}>
          <input autoComplete placeholder={x.placeholder} type={x.type} />
          <hr className="divider" />
        </div>
      )}
    </div>}

    <div className="account-btn">
      <button className="account-btn" id="loginSubmit" onClick={() => setLogin(true)}>
        Зарегистрироваться
      </button>
    </div>
  </form>)
}

export default Registration