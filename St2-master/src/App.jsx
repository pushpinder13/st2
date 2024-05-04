import React, { useState, useEffect } from 'react';
import Home from './Home/Home';
import Signup from './Signup/Signup';
import About from './About/About';
import Contactus from './Contantus/Contanctus';
import Login from './Login/Login';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movies/Movies';
import Food from './Food/Food';
import AddtoCart from './AddtoCart/AddtoCart';
import { MovieContextProvider } from './Context/MovieContext';

const App = () => {
  
  return (
    <MovieContextProvider>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/login' element={< Login/>}/>
          <Route path='/sign' element={<Signup/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/food' element={<Food/>}/>
          <Route path='/addcart' element={<AddtoCart/>}/>
        </Routes>
      </div>
      </MovieContextProvider>
  );
};

export default App;
