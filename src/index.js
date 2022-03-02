import React from "react"
import { render } from "react-dom"
import 'index.css'

// import { Provider } from 'react-redux'

import { BrowserRouter } from "react-router-dom"

import App from './app'

render(
  // <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>



  , document.getElementById('root'))