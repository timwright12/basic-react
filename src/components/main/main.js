import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// Templates
import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Post from '../../templates/post/post';

class Main extends Component {

	render() {
		return (
			<main className="main" role="main">
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
				</Switch>
			</main>
		);
	}
}

export default Main;
