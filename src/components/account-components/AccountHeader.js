/* global FB */
import React from 'react';
import ProfilePicture from '../ui-components/ProfilePicture';
import Greeting from './AccountGreeting';
import FriendsCount from './AccountFriendsCount';
import BirthDay from './AccountBirthDay';
import Logout from './AccountLogoutButton';

export default class AccountHeader extends React.Component {

	state = {
        profile: false
    };
	
	static propTypes = {
		userId: React.PropTypes.string.isRequired,
		handleLogOut: React.PropTypes.func.isRequired
	}

	componentDidMount() {
		FB.api('/me', 'GET', {fields: "id,name,birthday,context,email,gender"}, (response) => {
			this.setState({profile: response});
		});	
	}
	
	get loadingClassNames() {
		return `ui${( this.state.profile ? '' : ' active' )} inverted dimmer`;
	}
	
	render() { console.log('AccountHeader Rendered');
		return <header className="ui center aligned">
			<div className="ui stackable grid">
				<div className="six wide column">
					<ProfilePicture user={this.props.userId} size="medium" /> 
				</div>
				<div className="ten wide column">
					<div className={this.loadingClassNames}>
						<div className="ui text loader">Loading</div>
					</div>
					<Greeting name={this.state.profile.name} />
					<FriendsCount context={this.state.profile.context} />
					<BirthDay birthday={this.state.profile.birthday} />
					<div className="ui clearing">
						<Logout handleLogOut={this.props.handleLogOut}/>
					</div>
				</div>
			</div>
		</header>;
	}
}