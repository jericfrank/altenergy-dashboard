import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import Helmet from 'components/Helmet';

class ProjectPage extends Component {
	render() {
		return (
			<div>
				<Helmet title='Projects' />
				<Header as='h1'>Projects</Header>
			</div>
		);
	}
}

export default ProjectPage;