import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import Header from 'components/Header';

class HomePage extends Component {
	render() {
		return (
			<div>
				<Segment basic vertical>
					<Header title='Dashboard' />
				</Segment>
			</div>
		);
	}
}

export default HomePage;
