import _ from 'lodash';
import React, { Component } from 'react';
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react';
import { graphql } from 'react-apollo';

import Logo from 'components/Sidebar/logo.png';
import Helmet from 'components/Helmet';
import { handleJwtToken } from 'utils/jwtToken';

import { FIELDS, META } from './constants';
import mutation from './mutations';

class LoginPage extends Component {
    constructor () {
        super();

        this.state = {
            username : '',
            password : '',
            loading  : false,
            errors   : []
        };

        this.renderFormField = this.renderFormField.bind( this );
        this.handleSubmit    = this.handleSubmit.bind( this );
        this.handleChange    = this.handleChange.bind( this );
    }

    handleSubmit ( e ) {
        e.preventDefault();

        const { username, password } = this.state;

        this.setState({ loading : true });

        this.props.mutate({
            variables: {
                username,
                password
            }
        }).then( ( res ) => {
            const { auth_login } = res.data;

            handleJwtToken( auth_login );

            this.props.history.push( '/' );
        } ).catch( ( { graphQLErrors } ) => {
            const errors = graphQLErrors.map( ( { message } ) => message );

            this.setState({ loading : false, errors });
        });
    }

    handleChange ( e ) {
        this.setState({ [e.target.name]: e.target.value });
    }

    renderFormField ( { placeholder, icon, type }, key ) {
        return (
            <Form.Input
                key={key}
                name={key}
                fluid
                icon={icon}
                iconPosition='left'
                placeholder={placeholder}
                value={this.state[ key ]}
                onChange={this.handleChange}
                type={type}
            />
        );
    }

    render() {
        return (
            <div>
                <Helmet {...META} />
                <Header as='h2' textAlign='center'>
                    <Image src={Logo} />
                    Altenergy Projects
                </Header>
                <Segment>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        { _.map( FIELDS, this.renderFormField ) }
                        <Button primary fluid size='large' loading={this.state.loading} >Login</Button>
                    </Form>
                    <Message
                        hidden={_.isEmpty(this.state.errors)}
                        error
                        list={this.state.errors}
                    />
                </Segment>
                <Message>
                    New to us? <a href='/'>Sign Up</a>
                </Message>
            </div>
        );
    }
}

export default graphql( mutation )( LoginPage );