import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { NavLink } from 'react-router-dom';
import logo from "../img/shaker.png";
import {AiFillShopping} from "react-icons/ai";
import { useContext } from 'react';
import CartContext from '../CartContext';


const Nav = styled.nav`
  width: 100%;
`

const Navbar = () => {

  const {items}=useContext(CartContext);
  return (
    <Nav className='nav_wrap'>
        <div className="d-flex align-items-center">
        <NavLink to="/"><img src={logo} alt="logo" width="100" height="150" /></NavLink>
        <h3>MAKE ME A COCKTAIL</h3>
        <NavLink to ={"/checkout"}>
          <div className="cart">
            <AiFillShopping />
            <span>{items.length}</span>
          </div>
        </NavLink>
        </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;