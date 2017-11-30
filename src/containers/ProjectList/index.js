import _ from 'lodash';
import React, { Component } from 'react';
import { Header, Table, Dimmer, Loader, Segment } from 'semantic-ui-react';
import moment from 'moment';

class ProjectList extends Component {
    constructor () {
        super ();

        this.renderTableHeader = this.renderTableHeader.bind( this );
        this.renderTableBody   = this.renderTableBody.bind( this );
        this.renderTableRow    = this.renderTableRow.bind( this );

        this.handleSelect = this.handleSelect.bind( this );
    }

    handleSelect ( { _id } ) {
        this.props.history.push( `projects/${_id}` );
    }

    renderTableHeader () {
        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Date Created</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );
    }

    renderTableRow ( values, key ) {
        const { name, type, state, status, createdAt } = values;

        return (
            <Table.Row key={key} onClick={() => this.handleSelect( values )}>
                <Table.Cell singleLine>
                    <Header as='h4'>{name}</Header>
                </Table.Cell>
                <Table.Cell>{type.name}</Table.Cell>
                <Table.Cell>{state.name}</Table.Cell>
                <Table.Cell>{status.name}</Table.Cell>
                <Table.Cell>{moment(createdAt).format('ll')}</Table.Cell>
            </Table.Row>
        );
    }

    renderTableBody () {
        return (
            <Table.Body>
                {_.map( this.props.data.projects_all, this.renderTableRow )}
            </Table.Body>
        );
    }

	render() {
		return (
            <Segment basic vertical>
                <Dimmer active={this.props.data.loading} inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
                <Table celled padded selectable singleLine>
                    {this.renderTableHeader()}
                    {this.renderTableBody()}
                </Table>
            </Segment>
		);
	}
}

export default ProjectList;
