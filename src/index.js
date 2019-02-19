// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

// Global styles
import './stylesheets/index.css';

// Components
import Header from './components/header/header';
import Main from './components/main/main';
import Newsletter from './components/newsletter/newsletter';

// Assemble the App from Components
class App extends React.Component {
	render() {
		return(
			<div className="container">
				<Header name="Eats"/>
				<Main />
				<Newsletter button="Subscribe" id="s" label="Join our newsletter" />
				<div className="align-center gutter">
					<Link to='/about'>Learn about our history</Link>
				</div>
			</div>
		)
	}
}

// Render the app
ReactDOM.render( (
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById( 'root' ) );
