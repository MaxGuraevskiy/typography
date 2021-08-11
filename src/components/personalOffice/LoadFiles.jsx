import React from 'react';
import upload from "../../images/upload.svg"
import "./loadFiles.css"

const LoadFiles = () => {
  return (
    <section id="loadFiles">
      <img id="load-icon" src={upload} alt="Загрузка файлов" />
      <p id="load-text">.PDF .DVG</p>
      <button id="load-btn">Загрузить файл</button>
    </section>)
}

export default LoadFiles