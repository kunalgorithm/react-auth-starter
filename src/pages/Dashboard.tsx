import React from 'react';

import { Redirect } from 'react-router';

import { isAuthenticated } from '../api/auth';
import { Grid, Row, Col, Box } from '@smooth-ui/core-sc';
import Button from 'reactstrap/lib/Button';
import { AlertSuccess } from '../components/Alert';
interface IState {}
class Dashboard extends React.Component<{}, IState> {
    state = {};

    render() {
        if (!isAuthenticated()) return <Redirect to="/" />;

        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <Box
                                height={1}
                                p={5}
                                borderRadius={8}
                                boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
                            >
                                Welcome to the dashboard. You are currently
                                logged in.
                                <br />
                                <Button onClick={() => AlertSuccess('Nice!')}>
                                    Click Me
                                </Button>
                            </Box>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Dashboard;
