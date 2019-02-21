import React, { Component } from 'react';

class About extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	render() {
		return (
			<div className="gutter">
				<h1 className="txt-h2">The History of Eats Diner</h1>

				<p>Nullam id nisi et lectus fringilla sollicitudin. Aenean eget
				neque erat. Nam ultrices turpis a est suscipit fringilla. Duis
				ac elementum turpis. Nunc nec ligula in massa malesuada bibendum.
				Quisque pulvinar, felis a consectetur gravida, justo velit imperdiet
				ante, in vulputate odio lacus vel quam. Nulla egestas tellus eu
				mauris accumsan, facilisis blandit ipsum tempor. Nulla diam erat,
				suscipit vitae velit eu, blandit ullamcorper orci. Fusce erat nunc,
				blandit eu eros vel, dapibus pharetra felis. Phasellus sed ligula sit
				amet quam elementum auctor vel a quam. Aenean ac sagittis dui, quis
				mattis eros.</p>

				<p>Pellentesque volutpat sem id ullamcorper varius. Duis ligula ipsum,
				accumsan nec fermentum non, faucibus ut risus. Nunc eu ipsum dolor.
				Suspendisse finibus dui laoreet, vestibulum magna id, semper ex.
				Vestibulum odio eros, malesuada nec lacus cursus, pellentesque
				hendrerit ligula. Cras sodales urna ut nis.</p>

			</div>
		);
	}
}

export default About;
