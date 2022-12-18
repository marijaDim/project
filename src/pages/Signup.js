import axios from 'axios';
import React, { useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import { API_URL } from '../api';



export default function Signup() {
 
  const [user, setUser] = useState({ password: "", email: "" });
  const history = useNavigate();

    const createUsers = async (data) => {
        try {
             await axios.post(`${API_URL}/users/`,data);
            }
        catch (error) {
            console.log(error.message);
        }
    }

const handleChange=(e)=>{
e.preventDefault();

if( user.password !=="" && user.email !==""){

   createUsers(user);
   history("/");
}
  }
    return (
      <form className="signup_wrap" onSubmit={handleChange}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setUser({...user,email:e.target.value})}
            value={user.email}         
            />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setUser({...user,password:e.target.value})}
            value={user.password}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-warning">
            Sign Up
          </button>
        </div>
      </form>
    );
  }


