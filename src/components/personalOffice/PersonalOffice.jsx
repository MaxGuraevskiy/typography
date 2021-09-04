import React, { useState } from 'react';
import Account from './Account';
import LoadFiles from './LoadFiles';
import LoginForm from './forms/LoginForm';
import "./personalOffice.css"

import logout from "../../images/logout.svg"

import app from './base'
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

const PersonalOffice = () => {
  const [login, setLogin] = useState(false)

  return (
    <div id="PersonalOffice">
      <section id="account-form">
        <div className="account-form-header">
          <h4 className="account-form-header">Личный кабинет</h4>
          {login &&
            <img className="account-form-header" alt="Выйти" src={logout}
              onClick={() => {
                setLogin(false)
                // app.auth().signOut()
              }} />}
        </div>
        {login ? <Account /> : <LoginForm setLogin={setLogin} />}
      </section>

      {login && <LoadFiles />}
    </div>);
}

export default PersonalOffice