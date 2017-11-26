import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import Helmet from 'components/Helmet';

class HeaderComponent extends Component {
	render() {
		const { title } = this.props;

		return (
			<div>
				<Helmet title={title} />
				<Header as='h1'>{title}</Header>
			</div>
		);
	}
}

export default HeaderComponent;