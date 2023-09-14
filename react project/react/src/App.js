import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './Headers';

import Home from './routing/Home';
import About from './routing/About';
import Service from './routing/Service';
import { Routes, Route } from "react-router-dom"
import { Demo } from './routing/Demo';
import listContext from './Component/ContextTut/listContext';
import Memo from './routing/Memo';
import MemoProps from './MemoProps/MemoProps';


function App() {

  const [list1, setList1] = useState([]);




  return (
    <>
      <Headers />

      <listContext.Provider value={{ list1, setList1 }}  >

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/demo' element={<Demo />}></Route>
        </Routes>


      </listContext.Provider>
      {/* <Memo /> */}

       {/* <MemoProps /> */}


    </>
  );
}

export default App;


