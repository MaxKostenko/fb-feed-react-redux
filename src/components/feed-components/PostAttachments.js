import React from 'react';

export default class PostAttachments extends React.Component {

	static propTypes = {
		data: React.PropTypes.object,
	};

	render() {

		if( !this.props.data )
			return null;
		let image = false;
		const data = this.props.data.data;
		if( data.length ) {
			if( data[0].media ) {
				image = data[0].media.image;
			}
			if( data[0].subattachments && data[0].subattachments.data && data[0].subattachments.data.length ) {
				image = data[0].subattachments.data[0].media.image;
			}

		}

		if( !image ) return null;

		return <div className="image">
			<img role="presentation" src={image.src} />
		</div>;
	}
}