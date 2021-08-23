import React from "react"
import { DateFromTime } from "@formatjs/ecma402-abstract"
import "./header-styles.css"

function getDate() {
  const options = { day: 'numeric', year: 'numeric', month: 'long' };
  const date = new Date()
  return (
    date.toLocaleDateString('ru-RU', options)
  )
}

const Header = _ => {
  return (
    <>
      <div className="header">
        <div className="header-item">
          <p className="text name-text">Печать чертежей</p>
          <p className="text phone-text">+7 (926) 205-00-21</p>
        </div>
        <div className="header-item">
          <div className="date-block">
            <p className="text date-text">{getDate()}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
