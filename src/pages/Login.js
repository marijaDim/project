import React, { Component } from "react";
// import Reset from "./Reset";
//import Signup from "./Signup";
import {Link} from "react-router-dom"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          //once we are log in we want to storage that token
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  render() {
    return (
    <div id="login_wrap" className="d-flex flex-row justify-content-center align-items-center" >
      <div id="login" className="p-2 border border-dark">
      <form onSubmit={this.handleSubmit}>
        
        <h3 className="text-center mt-4">Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-warning">
            Log in
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          <a href="/forgot-password">Forgot a password</a>
          <Reset></Reset>
        </p> */}
      </form>
      </div>
      <div id="signup" className="p-2 border border-dark">
        <h3 className="text-center mt-4">Still sober?</h3>
        <p>Sign up and discover the great amount od cocktails and drinks you can make at home!</p>
        <Link to="/signup" className="btn btn-warning align-item-center">Sign up</Link>
        {/* <button>Sign up <a href="/signup"></a></button> */}
      </div>
      </div>
    );
  }
}