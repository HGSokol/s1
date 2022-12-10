import React from 'react';
import {Route, Routes} from 'react-router-dom'

import HomePage from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import NotFound from './Pages/PageNotFound'


function App() {
  return (
    <div className='font-body bg-white md:w-[1920px] md:mx-auto overflow-hidden'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
