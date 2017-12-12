import React, { Component } from 'react';
import { Table, Input, Loader } from 'semantic-ui-react';
import { notify } from 'react-notify-toast';

import axios from 'axios';

import { HOST_URI } from 'utils/request';

class ProjectViewUploader extends Component {
	constructor () {
		super ();

		this.state = {
			loading: false
		};

		this.handleChange = this.handleChange.bind( this );
	}

	handleChange ( e ) {
		this.setState({ loading: true });

		let data = new FormData();

		data.append('file', e.target.files[0]);

		axios.post(`${HOST_URI}/api/v1/projects/upload?project_id=${this.props.data.projects_select._id}`, data).then( ( { data } ) => {
			this.props.data.refetch();

			this.props.handleGetImage( data.data.images.key );

			this.setState({ loading: false });

			notify.show( 'Upload complete! Please wait image will appear shortly.', 'success', 2000, null );
		});
	}

	render() {
		return (
            <Table selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>Upload Image</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
							<Loader active={this.state.loading} inline='centered' content='uploading please wait...' />
                            <Input size='small' type={ ( this.state.loading ) ? 'hidden' : 'file' } onChange={this.handleChange} />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
		);
	}
}

export default ProjectViewUploader;
