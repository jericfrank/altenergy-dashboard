import _ from 'lodash';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Button, Modal, Segment, Header, Form, Loader, Dimmer } from 'semantic-ui-react';

import FormField from 'components/FormField';

import query from './queries';
import { FORM_FIELDS, MODAL_PROPS } from './constants';

class ProjectCreateModal extends Component {
    constructor () {
        super ();

        this.renderContent = this.renderContent.bind( this );
        this.renderForms   = this.renderForms.bind( this );
        this.handleChange  = this.handleChange.bind( this );
    }

    handleChange () {
        console.log( 'change!' );
    }

    renderForms ( { label, fields }, key ) {
        return (
            <Segment.Group key={key}>
                <Header as='h5' attached='top'>
                    {label}
                </Header>
                <Segment>
                    <Form>
                        { _.map( fields, ( value, key ) => <FormField data={this.props.data} handleChange={this.handleChange} {...value} key={key} index={key}/> ) }
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }

    renderContent () {
        const { loading } = this.props.data;

        if ( loading ) {
            return (
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            );
        }

        return (
            <div>
                { _.map( FORM_FIELDS, this.renderForms ) }
                <Button positive labelPosition='right' icon='checkmark' content='Submit' floated='right'/>
            </div>
        );
    }

    render () {
        const { trigger } = this.props;

        return (
            <Modal trigger={trigger} {...MODAL_PROPS}>
                <Modal.Header>Create Project</Modal.Header>
                <Modal.Content scrolling>
                    {this.renderContent()}
                </Modal.Content>
            </Modal>
        );
    }
}

export default graphql( query )( ProjectCreateModal );
