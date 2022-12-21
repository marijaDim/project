import React from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../../UserContext";
import { API_URL } from "../../api";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const buttonRef = useRef(null);


  useEffect(() => {
    //check if user is logged in or not
    if (user !== null) {
      //redirect home
      navigate('/');
    }
  }, [navigate, user]);


  function handleSubmit (event) {
    event.preventDefault();
    buttonRef.current.disabled = true;
    

    //login user
    axios.get(`${API_URL}/users/${email}`)
    .then(({data}) => {

      if(data.password === password){
        //LOGIN OK
        alert("Login successful");
         //once we are log in we want to storage that token
         window.localStorage.setItem("token", data.data);
        setUser(email);
      }
      else{ 
        //LOGIN NOT OK
        alert("Something went wrong. Login not ok")
       
      }
    })
    .catch((err) => {
      console.error(err);
      alert('Account does not exist. Sign up first ');
      buttonRef.current.disabled = false;
    })
  }

  
    return (
    <div id="login_wrap">
      <div id="login" className="p-2 border border-dark">
      <form onSubmit={handleSubmit}>
        
        <h3 className="text-center mt-4">Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required value={email} onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required value={password} onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-warning" ref={buttonRef}>
            Log in
          </button>
        </div>
      </form>
      </div>
      <div id="signup" className="p-2 border border-dark">
        <h3 className="text-center mt-4">Still sober?</h3>
        <p>Sign up and discover the great amount od cocktails and drinks you can make at home!</p>
        <Link to="/signup" className="btn btn-warning align-item-center">Sign up</Link>
      </div>
      </div>
    );
  }