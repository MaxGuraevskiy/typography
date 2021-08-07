import * as React from "react"

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import PersonalOffice from '../components/personalOffice/PersonalOffice';
import Settings from '../components/Settings/Settings';
import Order from '../components/order/Order';

import "./style.css"

const IndexPage = () => (<>
  <header children={<Header />} />
  <main>
    <div className="item" children={<PersonalOffice />} />
    <div className="item" children={<Settings />} />
    <div className="item" children={<Order />} />
  </main>
  <footer children={<Footer />} />
</>)

export default IndexPage
