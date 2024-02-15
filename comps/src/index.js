import App from './App'
import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
// import './index.css'
// import {Provider} from './context/books'

const el = document.getElementById("root")
const root = ReactDom.createRoot(el)

root.render( 
    <App></App>
     )

 