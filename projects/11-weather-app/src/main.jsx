import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './components/About'
import Cards from './components/Cards'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
