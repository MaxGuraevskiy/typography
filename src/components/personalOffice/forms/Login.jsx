import React, { useCallback, useState } from 'react';
import app from '../../base'

const Login = ({ setLogin }) => {

  const handleLogin = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
      // history.pushState('/')
      setLogin(true)
    }
    catch (e) {
      alert(e)
    }
  }, [])

  // const [mail, setMail] = useState()
  // const [password, setPassword] = useState()


  return (
    <form id="loginForm" onSubmit={handleLogin}>
      <input placeholder="Почта" type="email" />
      <hr className="divider" />

      <input placeholder="Пароль" type="password" />
      <hr className="divider" id="password" />

      <div className="account-btn">
        <button className="account-btn" id="loginSubmit" type='submit'>
          Войти
        </button>
      </div>
    </form>
  )
}

export default Login;