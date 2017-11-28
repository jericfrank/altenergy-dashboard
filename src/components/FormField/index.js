import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

class FormField extends Component {
    constructor () {
        super ();

        this.renderField       = this.renderField.bind( this );
        this.renderFieldText   = this.renderFieldText.bind( this );
        this.renderFieldSelect = this.renderFieldSelect.bind( this );
    }

    renderFieldSelect () {
        const { label, placeholder, handleChange, index, data, options, value } = this.props;

        const optionItems = _.map( data[ options.prop ], ( { name, _id }, key ) => {
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
