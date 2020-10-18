import React, { Component } from "react";
import "./Headline.scss";

class Headline extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { header, desc } = this.props;

		if (!header) {
			return null;
		}
		return (
			<div data-test="headline">
				<h1 data-test="header">{header}</h1>
				<p data-test="desc">{desc}</p>
			</div>
		);
	}
}

export default Headline;