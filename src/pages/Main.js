import React from "react";
import { Link } from "react-router-dom";



export default function Main() {

  return (
  <div id="main_container">

    <div id="gin" className="col-sm"><Link to="/gin">
    <h1 className="naslov">Gin cocktails</h1></Link></div>

<div id="rum" className="col-sm"><Link to="/rum">
    <h1 className="naslov">Rum cocktails</h1></Link></div>

<div id="vodka" className="col-sm"><Link to="/vodka">
   <h1 className="naslov">Vodka cocktails</h1></Link></div>

<div id="tequila" className="col-sm"><Link to="/tequila">
    <h1 className="naslov">Tequila cocktails</h1></Link></div>

 <div id="whiskey" className="col-sm"><Link to="/whiskey">
   <h1 className="naslov">Whiskey cocktails</h1></Link></div>

  </div>
  )
}