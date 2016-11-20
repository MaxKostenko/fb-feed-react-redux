/* global FB */
import React from 'react';
import Button from '../ui-components/Button';

export default class AccountLogoutButton extends React.Component {

	state = {
		isLoading: false
	};

	actionClick() {
		this.setState({isLoading: true});
		this.props.handleLogOut();
	}
	
	render() {
		return <Button loading={this.state.isLoading} actionClick={this.actionClick.bind(this)}>Log out</Button>;
	}
}