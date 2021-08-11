import React, { useState } from 'react';

const Registration = ({ setLogin }) => {
  const [action, setAction] = useState("")

  return (
    <form id="loginForm">
      <input placeholder="Почта" type="email" />
      <hr className="divider" />

      <input placeholder="Пароль" type="password" />
      <hr className="divider" id="password" />

      <div className="account-btn">
        <button className="account-btn" id="loginSubmit" onClick={() => setLogin(true)}>
          Войти
        </button>
      </div>
    </form>)
}

export default Registration