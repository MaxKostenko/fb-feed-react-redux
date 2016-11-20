import React from 'react';

export default class Button extends React.Component {

	static propTypes = {
		loading: React.PropTypes.bool.isRequired,
		actionClick: React.PropTypes.func,
		decoration: React.PropTypes.arrayOf(React.PropTypes.oneOf(['huge', 'primary']))
	}; 
	
	static defaultProps = {
		loading: false,
		actionClick: () => console.log('Click handler wasn\'t set'),
		decoration: []
	};
	
	get classButtonName() {
		return 'ui' + ( this.props.loading ? ' loading' : '' ) + 
			( this.props.decoration.length ? ' ' + this.props.decoration.join( ' ' ) : '' ) +
			' button';
	}

	get buttonText() {
		return this.props.children ? this.props.children : 'Button';
	}
	
	render() {
		return <a className={this.classButtonName} onClick={(e) => this.props.actionClick(e)}>
			{this.buttonText}
		</a>;
	}
}