import React from "react";
import "./Header.scss";
import Logo from "../../logo.svg";

const Header = () => {
	return (
		<header className="header" data-test="header">
			<div className="wrap">
				<div className="logo">
					<img src={Logo} data-test="logo" className="logo" alt="logo"></img>
				</div>
			</div>
		</header>
	);
};

export default Header;
