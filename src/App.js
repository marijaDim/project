import React from 'react';
import Navbar from './nav_pages/Navbar';
import Main from './pages/Main';
// import Books from './pages/Books';
//import Roulette from './pages/Roulette';
import Login from './pages/Login';
import Footer from './pages/Footer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route exact path ="/" element={<Main/>}></Route>
  {/* <Route path ="/roulette" element={<Roulette/>}></Route> */}
  {/* <Route path="/books" element={<Books/>}></Route> */}
  <Route path="/login" element={<Login/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}
