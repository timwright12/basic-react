import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './header.css';

const Header = ( props ) => (
	<header className="header align-center gutter" role="banner">
		<h1>
			<Link to='/'>{props.name}</Link>
		</h1>
	</header>
);

export default Header;
