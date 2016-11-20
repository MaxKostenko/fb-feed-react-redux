import React from 'react';

export default class PostTime extends React.Component {
	
	static propTypes = {
		time: React.PropTypes.string,
	};

	get formatTime() {
		const date = new Date(this.props.time);
		if( !date )
			return 'once';
		
		const now = new Date();
		
		if( +now - date < 86400000 ) {
			return date.toLocaleTimeString(undefined, {
				hour: 'numeric',
				minute: '2-digit'
			});
		} else {
			const options = {
				month: 'long',
				day: 'numeric'
			}
			if( now.getFullYear() > date.getFullYear() ) {
				options.year = 'numeric';
			}
			return date.toLocaleDateString(undefined, options);
		}
	}

	render() {
		return <span>{this.formatTime}</span>
	}
}