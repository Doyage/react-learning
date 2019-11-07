import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
	const activeStyle = {
		color: 'green',
		fontSize: '2rem'
	}

	return (
		<div>
			<ul>
				<li><NavLink exact to="/" activeStyle={activeStyle}></NavLink>홈</li>
				<li><NavLink exact to="/about" activeStyle={activeStyle}>소개</NavLink></li>
				<li><NavLink to="/about/react?color=red" activeStyle={activeStyle}>리액트 소개</NavLink></li>
				<li><NavLink to="/about/js?color=blue" activeStyle={activeStyle}>JS 소개</NavLink></li>
			</ul>
		</div>
	);
};

export default Menu;
