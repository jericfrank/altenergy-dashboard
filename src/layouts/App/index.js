import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import { withApollo } from 'react-apollo';

import Authentication from 'components/Auth/requireAuth';
import Sidebar from 'components/Sidebar';

import {
	Wrapper,
	Content
} from './style';

class App extends Component {
	constructor ( props ) {
		super( props );

		this.renderLayout = this.renderLayout.bind( this );
	}

	renderLayout () {
		const { component: ComponentWrapper } = this.props;

		return (
			<Wrapper>
				<Sidebar {...this.props} />
				<Content>
					<ComponentWrapper {...this.props} />
					<Notifications options={{zIndex: 5000}} />
				</Content>
			</Wrapper>
		);
	}

	render () {
		const { computedMatch, exact, location } = this.props;

		return (
			<Route computedMatch={computedMatch} exact={exact} location={location} render={this.renderLayout} />
		)
	}
}

export default withApollo(
	withRouter(
		Authentication( App )
	)
);
