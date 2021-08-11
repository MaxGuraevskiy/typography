import React, { useState } from "react"
import Login from "./Login";
import "./loginForm.css"
import Registration from "./Registration";

const LoginForm = ({ setLogin }) => {
  const [action, setAction] = useState("signIn")

  return (<>
    <div className="wrapper">
      <div className="toggle_radio">
        <input id="toggle_1"
          type="radio"
          name="toggle_option"
          className="toggle_option"
          onChange={() => setAction("signIn")}
          checked={action === "signIn"} />
        <input id="toggle_2"
          type="radio"
          name="toggle_option"
          className="toggle_option"
          onChange={() => setAction("signUp")}
          checked={action === "signUp"} />
        <label htmlFor="toggle_1" children={"Войти"} />
        <label htmlFor="toggle_2" children={"Регистрация"} />
        <div className="toggle_option_slider" />
      </div>

      {action === "signIn" && <Login setLogin={setLogin} />}
      {action === "signUp" && <Registration setLogin={setLogin} />}
    </div>
  </>);
}

export default LoginForm;