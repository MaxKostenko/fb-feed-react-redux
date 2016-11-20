import React from 'react';
import ProfilePicture from '../ui-components/ProfilePicture';
import './AccountNavBar.css';
import Logout from './AccountLogoutButton';

const SHOW_AFTER_TOP_OFFSET = 200;

export default class AccountNavBar extends React.Component {
	
	static propTypes = {
        userId: React.PropTypes.string.isRequired,
        handleLogOut: React.PropTypes.func.isRequired
    };
	
	isHidden = true;

	componentWillMount() {
		this.scrollEvent = this.handleScroll.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.scrollEvent);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollEvent);
	}

	handleScroll(event) {
		
		if( window.pageYOffset > SHOW_AFTER_TOP_OFFSET ) {
			if( this.isHidden ) {
				this.refs.root.classList.remove('hidden');
			}
			this.isHidden = false;
		} else {
			if( !this.isHidden ) {
				this.refs.root.classList.add('hidden');
			}
			this.isHidden = true;
		}
	}

	render() {
		return <nav ref="root" className="ui top fixed hidden menu">
			<div className="ui text container">
				<div className="left menu">
					<div className="item">
						<ProfilePicture user={this.props.userId} size="tiny" /> 
					</div>
				</div>
				<div className="right menu">
					<div className="item">
						<Logout handleLogOut={this.props.handleLogOut}/>
					</div>
				</div>
			</div>
		</nav>
	}
}