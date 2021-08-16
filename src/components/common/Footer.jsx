import React, { useState } from "react"
import Modal from 'react-modal';
import "./footer-styles.css"

import line from "../../images/vertical_line.svg"
import YL_logo from "../../images/YL_logo.svg"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#___gatsby');

const Footer = _ => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="footer">
        <div className="footer-item logo-block">
          <img src={YL_logo} alt="Yohan Loshop logo" />
        </div>

        <div className="footer-item">
          <img src={line} alt="vertical separator" />
        </div>

        <div className="footer-item name-block">
          <p className="text IP-text">ИП Гураевская Христина</p>
        </div>

        <div className="footer-item mr60">
          <img src={line} alt="vertical separator" />
        </div>

        <div className="footer-item btn-block">
          <p className="btn-text" onClick={openModal}>
            Прайс лист
          </p>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            // style={customStyles}
            contentLabel="Example Modal"
            className="Modal"
            overlayClassName="Overlay"
          >
            <p>модальное окно ыыыыы</p>
            <button onClick={closeModal}>close</button>
          </Modal>
        </div>

        <div className="footer-item btn-block">
          <p className="btn-text" onClick={() => { }}>
            Контакты
          </p>
        </div>

        <div className="footer-item btn-block">
          <p className="btn-text" onClick={() => { }}>
            О нас
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
