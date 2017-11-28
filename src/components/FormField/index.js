import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import { OPTIONS_PROPS } from './constants';

class FormField extends Component {
    constructor () {
        super ();

        this.renderField       = this.renderField.bind( this );
        this.renderFieldText   = this.renderFieldText.bind( this );
        this.renderFieldSelect = this.renderFieldSelect.bind( this );
    }

    renderFieldSelect () {
        let optionData = {};
        
        const { label, placeholder, handleChange, index, data, options, value } = this.props;

        optionData = data[ options.prop ];

        if ( _.isEmpty( optionData ) ) {
            optionData = OPTIONS_PROPS[ options.prop ];
        }

        const optionItems = _.map( optionData, ( { name, _id }, key ) => {
            return {
                key,
                text  : name,
                value : _id
            };
        } );

        return (
            <Form.Field>
                <label>{label}</label>
                <Form.Select onChange={handleChange} name={index} value={value} options={optionItems} placeholder={placeholder} />
            </Form.Field>
        );
    }

    renderFieldText () {
        const { label, placeholder, handleChange, index, value } = this.props;

        return (
            <Form.Field>
                <label>{label}</label>
                <Form.Input onChange={handleChange} name={index} value={value} placeholder={placeholder}/>
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
    data         : PropTypes.object.isRequired
};

export default FormField;
