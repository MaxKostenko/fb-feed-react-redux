import React from 'react';
import FeedItem from './FeedItem';


export default class AccountFeed extends React.Component {

	static propTypes = {
		feed: React.PropTypes.array.isRequired,
	};


	render() {
		console.log('Feed render');

  		const items = [];
		this.props.feed.map((item) => items.push(this.props.children(item)));
		if( !items.length ) return null;
		return <div className="ui text container main">{items}</div>
	}
}
