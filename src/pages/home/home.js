import React, { Component } from 'react';
import Item from '../../components/item/item';

class Home extends Component {

	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetch('https://timwright.org/blog/wp-json/wp/v2/posts')
			.then( results => {
				return results.json();
			}).then( data => {
				let returnedData = data.map( ( dataMap ) => {
					return(
						<Item key={dataMap.id} {...dataMap} />
					)
				})
				this.setState( {
					data: returnedData
				} );
			} )
	}

	render() {
		return (
			<div className="output gutter">
				{this.state.data}
			</div>
		);
	}
}

export default Home;
