import React from "react"
import "./header-styles.css"

const Header = _ => {
  return (
    <>
      <div className="header">
        <div className="header-item name-n-number-item">
          <p className="name-text">Печать чертежей</p>
          <p className="phone-text">+7 (926) 205-00-21</p>
        </div>
        <div className="header-item date-item">
          <div className="date-block">
            <p className="date-text">12 сентября, 2021г.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
