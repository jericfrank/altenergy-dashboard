import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Segment, Loader, Divider, Dropdown } from 'semantic-ui-react';

import Header from 'components/Header';

import query from './queries';

class ProjectViewPage extends Component {
    constructor () {
        super ();

        this.handleDelete = this.handleDelete.bind( this );
    }

    handleDelete () {
        console.log( 'Delete!' );
    }

    render() {
        const { loading, projects_select } = this.props.data;

        if ( loading ) {
            return (
                <Segment basic>
                    <Loader active inline='centered' content='Loading' />
                </Segment>
            );
        }

        return (
            <div>
                <Segment basic vertical floated='right' style={{ zIndex : 1 }}>
                    <Dropdown text='Options' icon='cogs' floating labeled button className='icon'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleDelete}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Segment>
                <Segment basic vertical>
                    <Header title={`Projects - ${projects_select.name}`} />
                </Segment>
                <Divider hidden/>
            </div>
        );
    }
}

export default graphql( query, {
  options: ( props ) => { return { variables: { _id: props.computedMatch.params._id } } }
})( ProjectViewPage );
