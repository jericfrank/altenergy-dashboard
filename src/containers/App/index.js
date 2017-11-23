import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Authentication from '../../components/Auth/requireAuth';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import {
	PageLayout,
	MainContent,
	SidebarPushable,
	SidebarPusher
} from './style';

class App extends Component {
	constructor ( props ) {
		super( props );

		this.renderLayout = this.renderLayout.bind( this );
	}

	renderLayout () {
		const { component: ComponentWrapper } = this.props;

		return (
			<PageLayout>
				<SidebarPushable>
					<Sidebar {...this.props} />
					<SidebarPusher>
						<Header {...this.props} />
						<MainContent>
							<ComponentWrapper {...this.props} />
						</MainContent>
					</SidebarPusher>
				</SidebarPushable>
			</PageLayout>
		);
	}

	render () {
		const { computedMatch, exact, location } = this.props;

		return (
			<Route computedMatch={computedMatch} exact={exact} location={location} render={this.renderLayout} />
		)
	}
}

export default withRouter(
	Authentication( App )
);