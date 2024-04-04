import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <div class="flex">
        <div class="flex-1 w-80 ... bg-slate-50">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path='/login' element={<Login />} />

              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>

    </>
  )
}

export default App
