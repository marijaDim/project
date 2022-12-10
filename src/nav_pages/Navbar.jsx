import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { NavLink } from 'react-router-dom';
import logo from "../img/shaker.png";


const Nav = styled.nav`
  width: 100%;
`

const Navbar = () => {
  return (
    <Nav className='nav_wrap'>
        <div className="d-flex align-items-center">
        <NavLink to="/"><img src={logo} width="100" height="150" /></NavLink>
        <h3>MAKE ME A COCKTAIL</h3>
        </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;