import React from 'react';
import { useContext } from "react";
import UserContext from "../UserContext";


export default function Footer() {
	const {user} = useContext(UserContext);
	//console.log(user.token)

		return (
			<div className="footer">
						<div id="footer_text">
							<p>Copyright © 2022 Make me a cocktail. All Rights Reserved.</p>
							<p>Please Enjoy Responsibly. Do not forward to anyone under the legal drinking age.</p>
						</div>
						{/* {!user && <h1>You're not logged in</h1>} */}
        {user && <h1>You're logged in with {user}</h1>}
					</div>
		);
	}