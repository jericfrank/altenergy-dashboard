import React, { Component } from 'react';
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react';
import Logo from 'components/Logo/Logo.png';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Header as='h2' color='blue' textAlign='center'>
                    <Image src={Logo} />
                    Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Button color='blue' fluid size='large'>Login</Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='/'>Sign Up</a>
                </Message>
            </div>
        );
    }
}

export default LoginPage;
