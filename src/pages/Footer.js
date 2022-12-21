import React from 'react';
import { useContext } from "react";
//import { useLocation } from 'react-router-dom';
import UserContext from "../UserContext";


export default function Footer() {
	const {user} = useContext(UserContext);
	// const {pathname }= useLocation();

	// if (pathname==="/search") return  null;

		return (
			<div id='footer'className="d-flex flex-row justify-content-between align-items-center">
						<div id="footer_text">
							<p>Copyright © 2022 Make me a cocktail-only for educational purpose. All Rights Reserved.</p>
							<p>Please Enjoy Responsibly. Do not forward to anyone under the legal drinking age.</p>
						</div>
        {user && <h1>You're logged in with {user}</h1>}
					</div>
		);
	}



	//***in case i dont want to footer to be visible in my search container