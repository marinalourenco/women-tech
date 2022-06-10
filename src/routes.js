import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ada from './components/pages/Ada';
import Grace from './components/pages/Grace';
import Home from './components/pages/Home'
import Mary from './components/pages/Mary';

function AppRoutes() {
  return  (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ada" element={<Ada/>}/>
      <Route path="/grace" element={<Grace/>}/>
      <Route path="/mary" element={<Mary/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default AppRoutes;