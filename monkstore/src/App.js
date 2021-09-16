import logo from './logo.svg';
import Home from './pages/devstore'
import React, { useRef } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 /// teste  aqui

import './App.css';
import Faixa1 from './pages/devstore/containe1.js';
import Faixa2 from './pages/devstore/containe2.js';
function App() {
  const ref = useRef(null)
  return (
    <div className='finale'>
      <ToastContainer />
      <Faixa1 />
      <Faixa2 />
    </div>
  );
}

export default App;
