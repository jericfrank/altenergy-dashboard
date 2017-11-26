import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import Helmet from 'components/Helmet';

class HomePage extends Component {
	render() {
		return (
			<div>
				<Helmet title='Dashboard' />
				<Header as='h1'>Dashboard</Header>
			</div>
		);
	}
}

export default HomePage;
