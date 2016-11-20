import React from 'react';
import ProfilePicture from '../ui-components/ProfilePicture';
import Time from './PostTime';

export default class PostHeader extends React.Component {

	static propTypes = {
		data: React.PropTypes.object,
	};

	render() {

		const item = this.props.data;
		if( !item )
			return null;


		return <div className="content">
			<ProfilePicture user={item.from.id} size="tiny" decoration={['floated','left']} />
			<div className="header">{item.from.name}</div>
			<div className="meta">
				<span className="right floated time"><Time time={item.created_time} /></span>
				<span className="category">{item.name}</span>
			</div>
			<div className="description">
				<p>{item.message}</p>
			</div>
		</div>;
	}
}