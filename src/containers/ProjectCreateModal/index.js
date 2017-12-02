import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { notify } from 'react-notify-toast';
import { Message, Button, Modal, Segment, Header, Form, Loader, Dimmer, Divider, Icon } from 'semantic-ui-react';

import FormField from 'components/FormField';

import mutation from './mutations';
import query from './queries';
import validate from './validate';
import { FIELDS, FORM_FIELDS, MODAL_PROPS } from './constants';

class ProjectCreateModal extends Component {
    constructor () {
        super ();

        this.state = {
            fields  : FIELDS,
            errors  : [],
            loading : false,
            open    : false
        };

        this.renderContent = this.renderContent.bind( this );
        this.renderForms   = this.renderForms.bind( this );
        this.handleChange  = this.handleChange.bind( this );
        this.handleSubmit  = this.handleSubmit.bind( this );
    }

    handleSubmit () {
        this.setState({ loading: true });

        const { errors, empty } = validate( this.state.fields );

        if ( empty ) {
            const payload = {
                'basic' : {},
                'location' : {},
                'technical' : {},
                'contracts' : {}
            };

            _.map( FORM_FIELDS, ( values, key ) => _.map( values.fields, ( value, k ) => _.extend( payload[key], { [k]: this.state.fields[ k ] } ) ) );

            this.props.mutate({
                variables: {
                    projects              : payload.basic,
                    location              : payload.location,
                    technical_info        : payload.technical,
                    electricity_contracts : payload.contracts
                }
            }).then( ( { data } ) => {
                const message = `${data.project_create_relationship.name} is successfuly saved.`;

                this.setState({ open : false })

                notify.show( message, 'success', 5000, null );

                this.props.parent.data.refetch();

                this.setState({ loading: false, fields : FIELDS });
            } );
        } else {
            this.setState({ errors, loading: false });
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
        if ( this.props.loading || this.state.loading ) {
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
        return (
            <div>
                <Button onClick={() => this.setState({ open : !this.state.open })} primary floated='right' content='Create Project' icon='plus' labelPosition='left' />
                <Modal open={this.state.open} {...MODAL_PROPS} closeIcon={<Icon onClick={() => this.setState({ open : false })} name='close'/>}>
                    <Modal.Content>
                        {this.renderContent()}
                        <Message size='tiny' error hidden={ _.isEmpty( this.state.errors ) }>
                            <Message.Header>There is an error in your input</Message.Header>
                        </Message>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button content='Cancel' onClick={() => this.setState({ open : false })}/>
                        <Button positive content='Submit' onClick={this.handleSubmit}/>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

ProjectCreateModal.propTypes = {
    parent : PropTypes.object,
};

export default graphql( mutation )(
    graphql( query )( ProjectCreateModal )
);
