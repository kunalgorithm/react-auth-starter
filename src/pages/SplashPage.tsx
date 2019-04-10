import * as React from 'react';
import { Modal, ModalBody, Row, Col, Container } from 'reactstrap';

import Login from '../components/Login';
import SignUp from '../components/SignUp';

import { Button } from '@smooth-ui/core-sc';
interface IProps {
    compiler: string;
    framework: string;
}
interface IState {
    signInModal: Boolean;
    logInModal: Boolean;
}

class SplashPage extends React.Component<IProps, IState> {
    state = {
        signInModal: false,
        logInModal: false,
    };

    toggleSignIn = () => {
        this.setState(prevState => ({
            signInModal: !prevState.signInModal,
        }));
    };
    toggleLogIn = () => {
        this.setState(prevState => ({
            logInModal: !prevState.logInModal,
        }));
    };
    render() {
        return (
            <>
                <Container>
                    <Row style={{ margin: '70px 10px' }}>
                        <Col className="text-center">
                            <h1>Welcome</h1>

                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this.toggleSignIn}
                                my={1}
                            >
                                Sign up
                            </Button>
                            <br />
                            <Button
                                variant="secondary"
                                size="md"
                                onClick={this.toggleLogIn}
                            >
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Modal
                    isOpen={this.state.signInModal}
                    toggle={this.toggleSignIn}
                >
                    <ModalBody>
                        <SignUp />
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.logInModal} toggle={this.toggleLogIn}>
                    <ModalBody>
                        <Login />
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default SplashPage;
