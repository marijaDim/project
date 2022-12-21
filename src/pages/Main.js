import React from "react";
import { Link } from "react-router-dom";



export default function Main() {

  return (
  <div id="main_container">

    <Link to="/gin"><div id="gin" className="col-sm">
    <h1 className="naslov">Gin cocktails</h1></div></Link>

<Link to="/rum"><div id="rum" className="col-sm">
    <h1 className="naslov">Rum cocktails</h1></div></Link>

 <Link to="/vodka"><div id="vodka" className="col-sm">
   <h1 className="naslov">Vodka cocktails</h1></div></Link>

<Link to="/tequila"><div id="tequila" className="col-sm">
    <h1 className="naslov">Tequila cocktails</h1></div></Link>

 <Link to="/whiskey"><div id="whiskey" className="col-sm">
   <h1 className="naslov">Whiskey cocktails</h1></div></Link>

  </div>
  )
}