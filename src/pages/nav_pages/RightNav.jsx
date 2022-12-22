import React from 'react';
import { useContext, useState } from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import UserContext from '../../UserContext';
import CartContext from '../../CartContext';
import {AiFillShopping} from "react-icons/ai";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap; 
 z-index:2;
  li {
    padding: 18px 10px;
  }
  a{
    font-size: 17px;
     text-decoration: none; 
  color: #daa520;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #191817;
    color: #daa520;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #daa520;
    }
  }
`;

const RightNav = ({open, close}) => {
  const {user, setUser} = useContext(UserContext);
  const {items}=useContext(CartContext);
  
  function logout () {
    setUser(null);
  }
  return (
    <Ul open={open}>
      <li ><NavLink onClick={() => close()}to="/search">Explore drinks</NavLink></li>
      <li><NavLink onClick={() => close()}to="/books">Our books</NavLink></li>
      <li id='cart'><NavLink onClick={() => close()}to ={"/checkout"}>
          <div>
            <AiFillShopping />
            <span>{items.length=== 0? <span></span>:<span>{items.length} </span> } </span>
          </div>
        </NavLink></li>
      <li> {!user && <NavLink onClick={() => close()}to="/login">Log In</NavLink>}
            {user && <NavLink href="#" onClick={logout}>Log Out</NavLink>}</li>
    </Ul>
  )
}

export default RightNav;