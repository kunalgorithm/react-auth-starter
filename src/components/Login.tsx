import React, { useState } from 'react';
import { Container, Row, Col, Form, Input, FormGroup, Label } from 'reactstrap';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';

import { Button, Alert } from '@smooth-ui/core-sc';

import store from 'store';
const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
                name
                email
                id
            }
            token
        }
    }
`;

interface LoginProps {
    history: any;
    location: any;
    match: any;
}

const Login: React.SFC<LoginProps> = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <Row>
                <Col>
                    <Mutation
                        mutation={LOGIN_MUTATION}
                        onCompleted={data => {
                            localStorage.setItem(
                                'auth-token',
                                data.login.token
                            );
                            store.set('user', {
                                email: data.login.user.email,
                                id: data.login.user.id,
                            });
                            // TODO: route this to /
                            props.history.push(`/dashboard`);
                        }}
                    >
                        {(loginMutation, { loading, error, data }) => {
                            return (
                                <>
                                    <Form
                                        onSubmit={(e: any) => {
                                            e.preventDefault();
                                            loginMutation({
                                                variables: {
                                                    email,
                                                    password,
                                                },
                                            });
                                        }}
                                    >
                                        <FormGroup>
                                            <h3>Please sign in.</h3>
                                            <FormGroup>
                                                <Label for="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={e =>
                                                        setEmail(e.target.value)
                                                    }
                                                />
                                            </FormGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="passowrd">
                                                Password
                                            </Label>
                                            <Input
                                                id="password"
                                                type="password"
                                                value={password}
                                                onChange={e =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </FormGroup>

                                        <Button
                                            variant="primary"
                                            size="lg"
                                            // type="submit"
                                        >
                                            {loading
                                                ? 'Logging you in...'
                                                : 'Log In'}
                                        </Button>
                                    </Form>
                                    {error && (
                                        <Alert variant="danger" mt={1}>
                                            Something went wrong 😔
                                        </Alert>
                                    )}
                                </>
                            );
                        }}
                    </Mutation>
                </Col>
            </Row>
        </Container>
    );
};
export default withRouter(Login);
