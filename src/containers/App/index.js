import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from '../../components/Menu';

class App extends Component {
	constructor ( props ) {
		super( props );

		this.renderLayout = this.renderLayout.bind( this );
	}

	renderLayout ( props ) {
		const { component: ComponentWrapper } = this.props;

		return (
			<div>
				<Menu />
				<ComponentWrapper {...props} />
				<div>Footer</div>
			</div>
		);
	}

	render() {
		const { computedMatch, exact, location, path } = this.props;

		return (
			<Route computedMatch={computedMatch} exact={exact} location={location} path={path} render={this.renderLayout} />
		)
	}
}

export default App;