import React from 'react';

export default class AccountGreeting extends React.Component {

	static propTypes = {
		name: React.PropTypes.string,
	};

	render() {
		return this.props.name ? <h1>Hello <i>{this.props.name}</i>!</h1> : null;
	}
}