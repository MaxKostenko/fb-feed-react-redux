import React from 'react';

export default class PostDescription extends React.Component {

	static propTypes = {
		data: React.PropTypes.object,
	};

	render() {

		const item = this.props.data;
		if( !item.description )
			return null;

		return <div className="content">
			<div className="description">
				<p>{item.description}</p>
			</div>
		</div>;
	}
}