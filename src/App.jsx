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
        <Router>
        <Navbar title="LOGO" />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/dummy' component={Dummy} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer/>
      </Router>
        </div>
      </div>

    </>
  )
}

export default App
