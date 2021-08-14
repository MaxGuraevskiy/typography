import * as React from 'react'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../redux/rootReducer'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Order from '../components/order/Order'
import Settings from '../components/Settings/Settings'
import PersonalOffice from '../components/personalOffice/PersonalOffice'
import './style.css'

//TODO: сделать SEO на Helmet

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const IndexPage = () => (<Provider store={store}>
  <header children={<Header />} />
  <main>
    <div className="item" children={<PersonalOffice />} />
    <div className="item" children={<Settings />} />
    <div className="item" children={<Order />} />
  </main>
  <footer children={<Footer />} />
</Provider>)

export default IndexPage
