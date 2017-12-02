import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Segment, Loader, Divider, Dropdown } from 'semantic-ui-react';
import { notify } from 'react-notify-toast';

import Header from 'components/Header';

import mutation from './mutations';
import query from './queries';

class ProjectViewPage extends Component {
    constructor () {
        super ();

        this.handleDelete = this.handleDelete.bind( this );
    }

    handleDelete () {
        const { projects_select } = this.props.data;

        this.props.mutate({
            variables: {
                _id : projects_select._id,
            }
        }).then( ( res ) => {
            notify.show( 'Deleted Successful', 'success', 5000, null );

            this.props.history.push( `/projects` );
        } );
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

export default graphql( mutation ) (
    graphql( query, {
        options: ( props ) => { return { variables: { _id: props.computedMatch.params._id } } }
    })( ProjectViewPage )
);
