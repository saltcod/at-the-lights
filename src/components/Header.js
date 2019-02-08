import React from "react";
import logo from "../assets/lemon.svg";

function Header() {
	return (
		<div className="header">
			<img className="logo" src={logo} alt="Logo" />
			<h1 className="site-name">At the lights</h1>
		</div>
	);
}

export default Header;
