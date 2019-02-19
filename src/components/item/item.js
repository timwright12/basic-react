import React, { Component } from 'react';

import './item.css';

const Item = ( props ) => (
	<details className="item">
		<summary className="item__summary gutter--half">{props.title.rendered}</summary>
		<div className="item__panel gutter--half">
			<div dangerouslySetInnerHTML={{__html: props.excerpt.rendered}} />
			<p className="item__more">
				<a href={'post/' + props.slug} aria-label={'Read More about ' + props.title.rendered}>Read More</a>
			</p>
		</div>
	</details>
);

export default Item;
