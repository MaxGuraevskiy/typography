import React from "react"
import "./header-styles.css"

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
            <p className="text date-text">12 сентября, 2021г.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
