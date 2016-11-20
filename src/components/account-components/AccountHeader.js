import React from "react";
import ProfilePicture from "../ui-components/ProfilePicture";
import Greeting from "./AccountGreeting";
import FriendsCount from "./AccountFriendsCount";
import BirthDay from "./AccountBirthDay";
import Logout from "./AccountLogoutButton";

export default class AccountHeader extends React.Component {


	static propTypes = {
		profile: React.PropTypes.object.isRequired,
		handleLogOut: React.PropTypes.func.isRequired

	};

	render() {
		console.log('AccountHeader Rendered');
		return <header className="ui center aligned">
			<div className="ui stackable grid">
				<div className="six wide column">
					<ProfilePicture user={this.props.profile.id} size="medium"/>
				</div>
				<div className="ten wide column">
					<Greeting name={this.props.profile.name}/>
					<FriendsCount context={this.props.profile.context}/>
					<BirthDay birthday={this.props.profile.birthday}/>
					<div className="ui clearing">
						<Logout handleLogOut={this.props.handleLogOut}/>
					</div>
				</div>
			</div>
		</header>;
	}
}