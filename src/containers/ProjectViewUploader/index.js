import React, { Component } from 'react';
import { Table, Button, Input } from 'semantic-ui-react';

import axios from 'axios';

class ProjectViewUploader extends Component {
	constructor () {
		super ();

		this.handleChange = this.handleChange.bind( this );
	}

	handleChange ( e ) {
		let data = new FormData();

		data.append('file', e.target.files[0]);

		axios.post(`http://localhost:8080/api/v1/projects/upload?project_id=${this.props.data.projects_select._id}`, data).then( ( response ) => {
			console.log( response ); // do something with the response
		});
	}

	render() {
		console.log( this.props.data.projects_select );

		return (
            <Table selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>Upload Image</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Image</Table.Cell>
                        <Table.Cell>
                            <Input size='small' type='file' onChange={this.handleChange} />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row >
                        <Table.Cell textAlign='right' colSpan='2'>
                            <Button primary loading={false} content='Upload' />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
		);
	}
}

export default ProjectViewUploader;
