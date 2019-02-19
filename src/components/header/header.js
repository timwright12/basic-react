import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Icon from '../icon/icon';

import './header.css';

const Header = ( props ) => (
	<header className="header align-center gutter" role="banner">
		<h1>
			<Link to='/'>{props.name}</Link>
		</h1>
		<Icon name="logo" />
	</header>
);

export default Header;
