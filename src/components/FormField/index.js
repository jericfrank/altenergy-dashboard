import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, List } from 'semantic-ui-react';

import { OPTIONS_PROPS } from './constants';

class FormField extends Component {
    constructor () {
        super ();

        this.renderField       = this.renderField.bind( this );
        this.renderFieldText   = this.renderFieldText.bind( this );
        this.renderFieldSelect = this.renderFieldSelect.bind( this );
        this.renderErrors      = this.renderErrors.bind( this );
    }

    renderErrors() {
        if ( _.isEmpty(this.props.errors) ) {
            return null;
        }

        return (
            <List size='mini' bulleted style={{ color: '#9f3a38' }}>
                { 
                    _.map( this.props.errors, ( message, key ) => {
                        return (
                            <List.Item key={key}>
                                {message}
                            </List.Item>
                        );
                    } ) 
                }
            </List>
        );
    }

    renderFieldSelect () {
        let optionData = {};
        
        const { label, placeholder, handleChange, index, data, options, value, errors } = this.props;

        if ( _.isEmpty( data[ options.prop ] ) ) {
            optionData = OPTIONS_PROPS[ options.prop ];
        } else {
            optionData = data[ options.prop ];
        }

        const optionItems = _.map( optionData, ( { name, _id }, key ) => {
            return {
                key,
                text  : name,
                value : _id
            };
        } );

        return (
            <Form.Field error={ !( _.isEmpty(errors) ) }>
                <label>{label}</label>
                <Form.Select onChange={handleChange} name={index} value={value} options={optionItems} placeholder={placeholder} />
                {this.renderErrors()}
            </Form.Field>
        );
    }

    renderFieldText () {
        const { label, placeholder, handleChange, index, value, errors } = this.props;

        return (
            <Form.Field error={ !( _.isEmpty(errors) ) }>
                <label>{label}</label>
                <Form.Input onChange={handleChange} name={index} value={value} placeholder={placeholder}/>
                {this.renderErrors()}
            </Form.Field>
        );
    }

    renderField () {
        const { type } = this.props;

        if ( type === 'select' ) {
            return this.renderFieldSelect();
        }

        return this.renderFieldText();
    }

    render() {
        return this.renderField();
    }
}

FormField.propTypes = {
    handleChange : PropTypes.func.isRequired,
    index        : PropTypes.string.isRequired,
    data         : PropTypes.object.isRequired,
    errors       : PropTypes.array
};

export default FormField;
