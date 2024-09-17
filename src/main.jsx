import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesComponent/>
    </BrowserRouter>
  </React.StrictMode>,
)
