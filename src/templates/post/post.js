import React, { Component } from 'react';

class Post extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	render() {
		return (
			<div className="gutter">
				<h1 className="txt-h2">POST</h1>
			</div>
		);
	}
}

export default Post;
