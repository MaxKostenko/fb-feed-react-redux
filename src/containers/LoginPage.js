import React from 'react';
import Button from '../components/ui-components/Button';
import { login } from '../actions/auth';
import { initPosts } from '../actions/posts';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './LoginPage.css';

class LoginPage extends React.Component {

	static propTypes = {
        login: React.PropTypes.func.isRequired,
        inProgress: React.PropTypes.bool.isRequired,
        connected: React.PropTypes.bool.isRequired,
        profile_id: React.PropTypes.string,
    };

    login = () => {
    	this.props.login();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.connected) {
			this.props.initPosts(nextProps.profile_id, () => { this.props.router.replace('/'); });
		}
 	}

	render() {
		console.log('lp:render');
		
		return <div className="ui middle aligned center aligned grid LoginPage">
			<div className="column">
				<div className="ui vertical masthead center aligned segment">
					<div className="ui text container">
						<h1 className="ui inverted header">
							Like Facebook, but not
						</h1>
						<h2 className="ui inverted header">Do whatever you want when you want to.</h2>
						<Button loading={this.props.inProgress} decoration={['huge', 'primary']} actionClick={this.login}>
							Get Started <i className="right arrow icon">
						</i></Button>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default connect(
  (state, ownProps) => { return {
  	router: ownProps.router,
    inProgress: state.auth.inProgress,
    connected: state.auth.connected,
    profile_id: state.auth.profile_id
  }},
  { login, initPosts }
)(withRouter( LoginPage ) );