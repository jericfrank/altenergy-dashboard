import React, { Component } from 'react';
import { Grid, Image, Table, Dropdown, Button } from 'semantic-ui-react';

import { isAdmin } from 'utils/roles';

import img from './solarpanel.jpg';

const Tr = ( { label, value } ) => {
	return (
		<Table.Row>
			<Table.Cell>{label}</Table.Cell>
			<Table.Cell>{value}</Table.Cell>
		</Table.Row>
	);
};

class ProjectViewDetails extends Component {
	constructor ( props ) {
        super ( props );

        console.log( props );

        this.state = {
        	permission : ''
        };

        this.renderBasic      = this.renderBasic.bind( this );
        this.renderPermission = this.renderPermission.bind( this );

        this.handleChange = this.handleChange.bind( this );
	}

	handleChange ( e, { value } ) {
		this.setState({ permission: value });
	}

	renderPermission () {
        const options = [
			{
				text: 'Jenny Hess',
				value: 'Jenny Hess',
			},
			{
				text: 'XXss',
				value: 'Submitted',
			}
		];

		return (
			<Table>
				<Table.Header>
					<Table.Row>
			    		<Table.HeaderCell colSpan='2'>Administrator Options</Table.HeaderCell>
			    	</Table.Row>
			    </Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Permission</Table.Cell>
						<Table.Cell>
							<Dropdown value={this.state.permission} onChange={this.handleChange} fluid selection options={options} />
						</Table.Cell>
					</Table.Row>
					<Table.Row >
						<Table.Cell textAlign='right' colSpan='2'>
							<Button primary content='Save Changes' />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		);
	}

	renderBasic () {
		const { name, type, status, state } = this.props.data.projects_select;

		return (
			<Table>
				<Table.Header>
					<Table.Row>
			    		<Table.HeaderCell colSpan='2'>Basic</Table.HeaderCell>
			    	</Table.Row>
			    </Table.Header>
				<Table.Body>
					<Tr label='Name' value={name} />
					<Tr label='Type' value={type.name} />
					<Tr label='Status' value={status.name} />
					<Tr label='Location' value={state.name} />
				</Table.Body>
			</Table>
		);
	}

	render() {
		return (
			<Grid>
				<Grid.Row>
					<Grid.Column width={8}>
						<Image src={img} />
					</Grid.Column>
					<Grid.Column width={8}>
						{ ( isAdmin() ? this.renderPermission() : '' ) }
						{this.renderBasic()}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default ProjectViewDetails;
