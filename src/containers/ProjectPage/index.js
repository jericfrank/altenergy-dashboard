import React, { Component } from 'react';
import { Button, Segment, Divider } from 'semantic-ui-react';
import { graphql } from 'react-apollo';

import ProjectList from 'containers/ProjectList';
import ProjectCreateModal from 'containers/ProjectCreateModal';

import query from './queries';

import Header from 'components/Header';

class ProjectPage extends Component {
	constructor () {
        super ();

        this.renderHeader = this.renderHeader.bind( this );
    }

	renderHeader () {
		const trigger = (
			<Button primary floated='right' content='Create Project' icon='plus' labelPosition='left' />
		);

		return (
			<Segment basic vertical>
				<ProjectCreateModal {...this.props} trigger={trigger} />
				<Header title='Projects' />
			</Segment>
		);
	}

	render() {
		return (
			<div>
				{this.renderHeader()}
				<Divider hidden/>
				<ProjectList {...this.props}/>
			</div>
		);
	}
}

export default graphql( query )( ProjectPage );
