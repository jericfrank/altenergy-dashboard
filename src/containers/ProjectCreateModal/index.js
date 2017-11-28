import _ from 'lodash';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Button, Modal, Segment, Header, Form, Loader, Dimmer, Divider } from 'semantic-ui-react';

import FormField from 'components/FormField';

import validate from './validate';
import query from './queries';
import { FIELDS, FORM_FIELDS, MODAL_PROPS } from './constants';

class ProjectCreateModal extends Component {
    constructor () {
        super ();

        this.state = {
            fields : FIELDS,
            errors : []
        };

        this.renderContent = this.renderContent.bind( this );
        this.renderForms   = this.renderForms.bind( this );
        this.handleChange  = this.handleChange.bind( this );
        this.handleSubmit  = this.handleSubmit.bind( this );
    }

    handleSubmit () {
        const { errors, empty } = validate( this.state.fields );

        if ( empty ) {
            console.log( this.state );
        } else {
            this.setState({ errors });
        }
    }

    handleChange ( e, { name, value } ) {
        this.setState({
            fields : {
                ...this.state.fields,
                [name] : value
            },
            errors : {
                ...this.state.errors,
                [name] : []
            }
        });
    }

    renderForms ( { label, fields }, key ) {
        return (
            <div key={key}>
                <Header as='h2'>
                    {label}
                </Header>
                <Segment basic>
                    <Form>
                        { _.map( fields, ( value, key ) => <FormField errors={this.state.errors[key]} value={this.state.fields[key]} data={this.props.data} handleChange={this.handleChange} {...value} key={key} index={key}/> ) }
                    </Form>
                </Segment>
                <Divider hidden/>
            </div>
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
            </div>
        );
    }

    render () {
        const { trigger } = this.props;

        return (
            <Modal trigger={trigger} {...MODAL_PROPS}>
                <Modal.Content>
                    {this.renderContent()}
                </Modal.Content>
                <Modal.Actions>
                    <Button positive content='Submit' onClick={this.handleSubmit}/>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default graphql( query )( ProjectCreateModal );
