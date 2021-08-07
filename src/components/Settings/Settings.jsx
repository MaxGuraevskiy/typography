import React from 'react';

import ChoiceSizes from "./ChoiceSizes";
import ChoiceFormat from "./ChoiceFormat";
import ChoiceTime from "./ChoiceTime";

import './settings.css'

const Settings = () => {
  return (<>
    <section id="sizes">
      <h2>Размер</h2>
      <ChoiceSizes />
    </section>

    <section id="format">
      <h2>Формат</h2>
      <ChoiceFormat />
    </section>

    <section id="time">
      <h2>Время</h2>
      <ChoiceTime />
    </section>
  </>);
}

export default Settings;