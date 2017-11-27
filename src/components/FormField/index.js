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
        const { label, placeholder, handleChange, index } = this.props;

        console.log( handleChange );

        const options = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
        ];

        return (
            <Form.Field>
                <label>{label}</label>
                <Form.Select onChange={handleChange} name={index} options={options} placeholder={placeholder} />
            </Form.Field>
        );
    }

    renderFieldText () {
        const { label, placeholder, handleChange, index } = this.props;

        return (
            <Form.Field>
                <label>{label}</label>
                <input onChange={handleChange} name={index} placeholder={placeholder} />
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
    index        : PropTypes.string.isRequired
};

export default FormField;