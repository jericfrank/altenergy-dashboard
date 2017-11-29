import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import Header from 'components/Header';

class AccountPage extends Component {
	render() {
		return (
			<div>
				<Segment basic vertical>
					<Header title='Account' />
				</Segment>
			</div>
		);
	}
}

export default AccountPage;
