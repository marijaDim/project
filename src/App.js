import React from 'react';
import Navbar from './pages/nav_pages/Navbar';
import Main from './pages/Main';
import Books from './pages/Books';
import DrinkCard from './pages/DrinkCard';
import RecipeContainer from './pages/RecipeContainer';
//import Roulette from './pages/Roulette';
import Login from './pages/login_pages/Login';
import Signup from './pages/login_pages/Signup';
import Footer from './pages/Footer';
import Checkout from './pages/Checkout';
import SearchContainer from './pages/SearchContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <div id='app'>
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route exact path ="/" element={<Main/>}></Route>
  <Route path="/cocktail/:id" element={<DrinkCard/>}> </Route>
  {/* <Route path ="/roulette" element={<Roulette/>}></Route> */}
  <Route path="/books" element={<Books/>}></Route>
  <Route path="/whiskey" element={ <RecipeContainer/>}></Route>
	<Route path="/vodka" element={<RecipeContainer/>}></Route>
 <Route path="/gin" element={ <RecipeContainer/>}></Route>
	<Route path="/rum" element={ <RecipeContainer/>}></Route> 
	<Route path="/tequila" element={ <RecipeContainer/>}></Route>
  <Route path="/checkout" element={<Checkout/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/search" element={<SearchContainer/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </div>
  )
}

export default App;
