import React from 'react';

export default class AccountFriendsCount extends React.Component {

	static propTypes = {
		context: React.PropTypes.object,
	};
	
	get friendsCount() {
		const isValid = this.props.context && 
			this.props.context.mutual_friends && 
			this.props.context.mutual_friends.summary && 
			this.props.context.mutual_friends.summary.total_count;
		if( isValid ) {
			return this.props.context.mutual_friends.summary.total_count
		}
		return 0;
	}

	render() {
		return this.friendsCount ? <h3>You have {this.friendsCount} friends.</h3> : null;
	}
}