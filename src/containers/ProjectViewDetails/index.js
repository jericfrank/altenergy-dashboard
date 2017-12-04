import _ from 'lodash';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Grid, Image, Table, Dropdown, Button } from 'semantic-ui-react';
import { notify } from 'react-notify-toast';

import { FORM_FIELDS } from 'containers/ProjectCreateModal/constants';

import { isAdmin } from 'utils/roles';

import mutation from './mutations';
import query from './queries';
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

        this.state = {
        	value   : props.data.projects_select.permission._id,
        	loading : false
        };

        this.renderBasic      = this.renderBasic.bind( this );
        this.renderLocation   = this.renderLocation.bind( this );
        this.renderPermission = this.renderPermission.bind( this );
		this.renderTechInfo   = this.renderTechInfo.bind( this );
		this.renderContracts  = this.renderContracts.bind( this );

        this.handleSave   = this.handleSave.bind( this );
        this.handleChange = this.handleChange.bind( this );
	}

	handleSave () {
		this.setState({ loading: true });

		const { _id, name, type, state, status } = this.props.data.projects_select;

		this.props.mutate({
            variables: {
            	_id,
            	name,
            	project_type_id       : type._id,
            	state_id              : state._id,
            	project_status_id     : status._id,
            	project_permission_id : this.state.value
            }
        }).then( ( res ) => {
            notify.show( 'Saved changes!', 'success', 2000, null );

            this.setState({ loading: false });
        } );
	}

	handleChange ( e, { value } ) {
		this.setState({ value });
	}

	renderPermission () {
		const permissions = this.props.ProjectPermissionQuery.project_permission_all;

		let options = [];

		_.map( permissions, ( values, key ) => options.push({ text: values.name, value: values._id }) );

		return (
			<Table selectable>
				<Table.Header>
					<Table.Row>
			    		<Table.HeaderCell colSpan='2'>Administrator Options</Table.HeaderCell>
			    	</Table.Row>
			    </Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Permission</Table.Cell>
						<Table.Cell>
							<Dropdown value={this.state.value} onChange={this.handleChange} fluid selection options={options} />
						</Table.Cell>
					</Table.Row>
					<Table.Row >
						<Table.Cell textAlign='right' colSpan='2'>
							<Button primary loading={this.state.loading} onClick={this.handleSave} content='Save Changes' />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		);
	}

	renderBasic () {
		const { name, type, status, state } = this.props.data.projects_select;

		return (
			<Table selectable>
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

	renderLocation () {
		const prop          = this.props.data.projects_select.location;
		const { location } = FORM_FIELDS;

		return (
			<Table selectable>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan='2'>{location.label}</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{ _.map( location.fields, ( value, key ) => {
						return (
							<Tr key={key} label={value.label} value={prop[key]} />
						);
					} ) }
				</Table.Body>
			</Table>
		);
	}

	renderTechInfo () {
		const prop          = this.props.data.projects_select.tech_info;
		const { technical } = FORM_FIELDS;

		return (
			<Table selectable>
				<Table.Header>
					<Table.Row>
			    		<Table.HeaderCell colSpan='2'>{technical.label}</Table.HeaderCell>
			    	</Table.Row>
			    </Table.Header>
				<Table.Body>
					{ _.map( technical.fields, ( value, key ) => {
						return (
							<Tr key={key} label={value.label} value={prop[key]} />
						);
					} ) }
				</Table.Body>
			</Table>
		);
	}

	renderContracts () {
		const prop          = this.props.data.projects_select.electricity_contract;
		const { contracts } = FORM_FIELDS;

		return (
			<Table selectable>
				<Table.Header>
					<Table.Row>
			    		<Table.HeaderCell colSpan='2'>{contracts.label}</Table.HeaderCell>
			    	</Table.Row>
			    </Table.Header>
				<Table.Body>
					{ _.map( contracts.fields, ( value, key ) => {
						return (
							<Tr key={key} label={value.label} value={prop[key]} />
						);
					} ) }
				</Table.Body>
			</Table>
		);
	}

	render() {
		return (
			<Grid>
				<Grid.Row>
					<Grid.Column width={4}>
						<Image src={img} />
						{ ( isAdmin() ? this.renderPermission() : '' ) }
						{this.renderBasic()}
					</Grid.Column>
					<Grid.Column width={4}>
						{this.renderTechInfo()}
					</Grid.Column>
					<Grid.Column width={4}>
						{this.renderContracts()}
					</Grid.Column>
					<Grid.Column width={4}>
						{this.renderLocation()}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default graphql( mutation ) (
    graphql( query, { name: 'ProjectPermissionQuery' } )( ProjectViewDetails )
);
