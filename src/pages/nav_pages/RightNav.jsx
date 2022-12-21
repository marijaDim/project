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

const RightNav = ({open}) => {
  const {user, setUser} = useContext(UserContext);
  const {items}=useContext(CartContext);

  function logout () {
    setUser(null);
  }
  return (
    <Ul open={open}>
      <li><NavLink to="/search">Explore drinks</NavLink></li>
      <li><NavLink to="/books">Our books</NavLink></li>
      <li id='cart'><NavLink to ={"/checkout"}>
          <div>
            <AiFillShopping />
            <span>{items.length=== 0? <span></span>:<span>{items.length} </span> } </span>
          </div>
        </NavLink></li>
      <li> {!user && <NavLink to="/login">Log In</NavLink>}
            {user && <NavLink href="#" onClick={logout}>Log Out</NavLink>}</li>
    </Ul>
  )
}

export default RightNav;