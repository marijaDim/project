import React from "react";
import { Link } from "react-router-dom";


export default function Main() {
  return <div id="main_container"className="row">
    <div id="gin" className="col-sm">
    <Link to="/allgin"><h1 className="naslov">Gin cocktails</h1></Link>
</div>
<div id="rum" className="col-sm">
    <Link to="/allrum"><h1 className="naslov">Rum cocktails</h1></Link>
</div>
<div id="vodka" className="col-sm">
    <Link to="/allvodka"><h1 className="naslov">Vodka cocktails</h1></Link>
</div>
<div id="tequila" className="col-sm">
    <Link to="/alltequila"><h1 className="naslov">Tequila cocktails</h1></Link>
</div>
<div id="whiskey" className="col-sm">
    <Link to="/allwhiskey"><h1 className="naslov">Whiskey cocktails</h1></Link>
</div>
  </div>
  
}