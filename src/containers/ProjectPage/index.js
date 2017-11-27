import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

import ProjectCreateModal from 'containers/ProjectCreateModal';

import Header from 'components/Header';

class ProjectPage extends Component {
	constructor () {
        super ();

        this.renderHeader = this.renderHeader.bind( this );
    }

	renderHeader () {
		const trigger = (
			<Button primary floated='right'>
				<Icon name='plus' /> Create Project
			</Button>
		);

		return (
			<Segment basic vertical>
				<ProjectCreateModal trigger={trigger} />
				<Header title='Projects' />
			</Segment>
		);
	}

	render() {
		return (
			<div>
				{this.renderHeader()}
			</div>
		);
	}
}

export default ProjectPage;