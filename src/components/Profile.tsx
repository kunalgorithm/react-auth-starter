import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router';
import { Grid, Row, Col, Box, Alert } from '@smooth-ui/core-sc';
import { List as LoadingList } from 'react-content-loader';

const QUERY = gql`
    query me {
        me {
            name
            email
            id
        }
    }
`;

export default () => {
    if (!localStorage.getItem('auth-token')) <Redirect to="/" />;
    return (
        <Grid>
            <Row justifyContent="center">
                <Col>
                    <h1>Profile</h1>
                    <Box
                        p={10}
                        m={20}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        borderRadius={7}
                    >
                        <Query query={QUERY}>
                            {({ loading, error, data }) => {
                                if (loading) return <LoadingList />;
                                if (error) {
                                    return (
                                        <Alert variant="danger" mb={1}>
                                            Something went wrong, please try
                                            again.
                                        </Alert>
                                    );
                                }

                                return (
                                    data && (
                                        <div>
                                            <h2>Name: {data.me.name}</h2>
                                            <h2>Email: {data.me.email}</h2>
                                            <h2 />
                                        </div>
                                    )
                                );
                            }}
                        </Query>
                    </Box>
                </Col>
            </Row>
        </Grid>
    );
};
