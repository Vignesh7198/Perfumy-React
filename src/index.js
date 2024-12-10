import React from 'react'
import ReactDom from 'react-dom/client'

import './style.css'

import App from './App'

var root = ReactDom.createRoot(document.querySelector("#root"))



root.render(
  <App></App>
)