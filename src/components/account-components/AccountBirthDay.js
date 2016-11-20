import React from 'react';
import DayLeft from '../../lib/DayLeft';

export default class AccountBirthDay extends React.Component {

	static propTypes = {
		birthday: React.PropTypes.string
	}

	get days() {
		if( this.props.birthday ) {
			let d = new DayLeft();
			return d.setTo(this.props.birthday).days();
		}
		return;
	}
	
	render() {
		return this.days ? <h3>Your next birthday will be in {this.days} days.</h3> :
		( this.days === 0 ) ? <h3>Happy Birthday!</h3> : null
	}
}