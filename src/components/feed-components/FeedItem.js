import React from 'react';
import Attachments from './PostAttachments';
import Header from './PostHeader';
import Description from './PostDescription';


export default class FeedItem extends React.Component {
	
	static propType = {
		item: React.PropTypes.object
	}

	render() {
		const item = this.props.item;

		return <div className="ui one stackable cards">
			<div className="ui card segment">
				<Header data={item} />
				<Attachments data={item.attachments} />
				<Description data={item} />
			</div>
		</div>;
	}
}