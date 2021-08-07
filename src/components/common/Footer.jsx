import React from "react"
import "./footer-styles.css"

import line from "../../images/vertical_line.svg"
import YL_logo from "../../images/YL_logo.svg"

const Footer = _ => {
  return (
    <>
      <div className="footer">
        <div className="footer-item logo-block">
          <img src={YL_logo} alt="Yohan Loshop logo" />
        </div>

        <div className="footer-item">
          <img src={line} alt="Yohan Loshop logo" />
        </div>

        <div className="footer-item name-block">
          <p className="text IP-text">ИП Гураевская Христина</p>
        </div>

        <div className="footer-item mr60">
          <img src={line} alt="Yohan Loshop logo" />
        </div>

        <div className="footer-item btn-block">
          <p className="btn-text" onClick={() => {}}>
            Прайс лист
          </p>
        </div>

        <div className="footer-item btn-block">
          <p className="btn-text" onClick={() => {}}>
            Контакты
          </p>
        </div>

        <div className="footer-item btn-block">
          <p className="btn-text" onClick={() => {}}>
            О нас
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
