import React from 'react';

export default class ProfilePicture extends React.Component {
	
	static propTypes = {
        user: React.PropTypes.string.isRequired,
		size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
		decoration: React.PropTypes.arrayOf(React.PropTypes.oneOf(['centered', 'floated', 'left', 'right']))
    }; 
	
	static defaultProps = {
		size: 'small',
		decoration: []
	};
	
	get classNameAttr() {
		return `ui ${this.props.size} circular image` + 
		( this.props.decoration.length ? ' ' + this.props.decoration.join( ' ' ) : '' );
	}
	
	get width() {
		switch(this.props.size) {
			case 'mini': return 35;
			case 'tiny': return 80;
			case 'medium': return 300;
			case 'large': return 450;
			case 'big': return 600;
			case 'huge': return 800;
			case 'massive': return 960;
			case 'small': 
			default: return 150;
		}
	}
	
	get pictureUrl() {
		return `//graph.facebook.com/${this.props.user}/picture?width=${this.width}`;
	}
	
	render() {
		return <img role="presentation" className={this.classNameAttr} src={this.pictureUrl} />;
	}
	
}