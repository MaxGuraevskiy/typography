import React, { useState } from 'react';
import Account from './Account';
import LoadFiles from './LoadFiles';
import LoginForm from './forms/LoginForm';
import "./personalOffice.css"

import logout from "../../images/logout.svg"

const PersonalOffice = () => {
  const [login, setLogin] = useState(false)

  return (
    <div id="PersonalOffice">
      <section id="account-form">
        <div className="account-form-header">
          <h4 className="account-form-header">Личный кабинет</h4>
          {login &&
            <img className="account-form-header" alt="Выйти" src={logout}
              onClick={() => setLogin(false)} />}
        </div>
        {login ? <Account /> : <LoginForm setLogin={setLogin} />}
      </section>

      {login && <LoadFiles />}
    </div>);
}

export default PersonalOffice