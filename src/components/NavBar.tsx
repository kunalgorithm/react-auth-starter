import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../api/auth';
import store from 'store';
import { isMobile } from 'react-device-detect';
interface IState {
    isOpen?: boolean;
}
interface IProps {
    history: any;
    location: any;
    match: any;
}
class NavBar extends React.Component<IProps, IState> {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        if (!isAuthenticated()) return null;
        const routes = [
            { path: '/dashboard', name: 'Dashboard' },
            { path: '/profile', name: 'Profile' },
        ];

        return (
            <Navbar color="white" light expand="md">
                <NavbarBrand href="/">My App</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {routes.map((route, idx) => (
                            <NavItem key={idx}>
                                <NavLink href={route.path}>
                                    {route.name}
                                </NavLink>
                            </NavItem>
                        ))}

                        <NavItem>
                            <NavLink
                                onClick={() => {
                                    localStorage.removeItem('auth-token');
                                    store.remove('user');
                                    this.props.history.push('/logout');
                                }}
                            >
                                Logout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default withRouter(NavBar);
