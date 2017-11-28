import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Button, Modal, Segment, Header, Form, Loader, Dimmer, Divider } from 'semantic-ui-react';

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
            loading : false
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
            }).then( ( res ) => {
                console.log( res );

                this.setState({ loading: false });
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
        return (
            <div>
                { _.map( FORM_FIELDS, this.renderForms ) }
            </div>
        );
    }

    render () {
        const { trigger, loading } = this.props;

        return (
            <Modal trigger={trigger} {...MODAL_PROPS}>
                <Modal.Content>
                    <Dimmer active={ loading || this.state.loading } inverted>
                        <Loader inverted content='Loading' />
                    </Dimmer>
                    {this.renderContent()}
                </Modal.Content>
                <Modal.Actions>
                    <Button positive content='Submit' onClick={this.handleSubmit}/>
                </Modal.Actions>
            </Modal>
        );
    }
}

ProjectCreateModal.propTypes = {
    auth : PropTypes.object.isRequired,
};

export default graphql( mutation )(
    graphql( query )( ProjectCreateModal )
);