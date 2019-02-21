import React, { Component } from 'react';

import './newsletter.css';

const Newsletter = ( props ) => (

	<form method="post" action="" className="align-center gutter">
		<label className="form__label txt-h2" htmlFor={props.id}>{props.label}</label>
		<input className="form__input" type="email" id={props.id} name="email" placeholder="you@example.com" required />
		<button type="submit" className="form__button">{props.button}</button>
	</form>

);

export default Newsletter;
