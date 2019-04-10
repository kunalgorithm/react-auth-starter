import React, { useState } from 'react';
import { Container, Row, Col, Form, Input, FormGroup, Label } from 'reactstrap';
import { Button, Alert } from '@smooth-ui/core-sc';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter, Link } from 'react-router-dom';
import store from 'store';

const SIGNUP_MUTATION = gql`
    mutation Signup($email: String!, $password: String!, $name: String!) {
        signup(email: $email, name: $name, password: $password) {
            user {
                name
                email
                id
            }
            token
        }
    }
`;

interface SignUpProps {
    history: any;
    location: any;
    match: any;
}

const SignUp: React.SFC<SignUpProps> = props => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <Row>
                <Col>
                    <Mutation
                        mutation={SIGNUP_MUTATION}
                        onCompleted={data => {
                            localStorage.setItem(
                                'auth-token',
                                data.signup.token
                            );
                            store.set('user', {
                                email: data.signup.user.email,
                                id: data.signup.user.id,
                                name: data.signup.user.name,
                            });

                            props.history.push(`/dashboard`);
                        }}
                    >
                        {(signupMutation, { loading, error, data }) => {
                            return (
                                <>
                                    <Form
                                        onSubmit={(e: any) => {
                                            e.preventDefault();
                                            signupMutation({
                                                variables: {
                                                    name,
                                                    email,
                                                    password,
                                                },
                                            });
                                        }}
                                    >
                                        <h3>Please create an account.</h3>
                                        <FormGroup>
                                            <Label for="name">Name</Label>
                                            <Input
                                                id="name"
                                                className={''}
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={e =>
                                                    setName(e.target.value)
                                                }
                                            />
                                        </FormGroup>
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
                                                ? 'Signing you up...'
                                                : 'Sign up'}
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
export default withRouter(SignUp);
