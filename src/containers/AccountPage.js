import React from "react";
import Header from "../components/account-components/AccountHeader";
import NavBar from "../components/account-components/AccountNavBar";
import Feed from "../components/feed-components/AccountFeed";
import FeedItem from "../components/feed-components/FeedItem";
import "./AccountPage.css";
import {connect} from "react-redux";
import {logout} from "../actions/auth";


class AccountPage extends React.Component {

	static propTypes = {
		profile: React.PropTypes.object.isRequired,
		feed: React.PropTypes.array.isRequired,
		logout: React.PropTypes.func.isRequired
	};

	handleLogOut = () => {
		this.props.logout();
	};

	componentWillReceiveProps(nextProps) {
		if (!nextProps.connected) {
			this.props.router.replace('/login');
		}
	}

	render() {
		if (!this.props.connected)
			return null;
		return <div className="pusher">
			<NavBar handleLogOut={this.handleLogOut} userId={this.props.profile.id}/>
			<Header handleLogOut={this.handleLogOut} profile={this.props.profile}/>
			<Feed feed={this.props.feed}>
				{(item) => <FeedItem key={item.id} item={item}/>}
			</Feed>
		</div>;
	}
}
export default connect(
	(state, ownProps) => {
		return {
			//inProgress: state.auth.inProgress,
			connected: state.auth.connected,
			userId: state.auth.profile_id,
			feed: state.posts.list,
			profile: state.profiles.all[state.auth.profile_id]
		}
	},
	{logout}
)(AccountPage);