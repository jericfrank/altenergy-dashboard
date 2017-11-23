import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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

	renderLayout ( props ) {
		const { component: ComponentWrapper } = this.props;

		return (
			<PageLayout>
				<SidebarPushable>
					<Sidebar />
					<SidebarPusher>
						<MainContent>
							<ComponentWrapper {...props} />
						</MainContent>
					</SidebarPusher>
				</SidebarPushable>
			</PageLayout>
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