import React, {useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ToastC } from '../Toast/ToastC';

export const NavBar = ({setUsers}) => {

    let history = useHistory();
    const [searchUser, setSearchUser] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        history.push('/');
        e.preventDefault();
        axios.get(`https://api.github.com/search/users?q=${searchUser}&per_page=10`)
            .then((res) => {
                setUsers(res.data.items);
                setError('');
            }).catch( (error) => {setError(error);});
    };

    const handleChange = (e) => {
        setSearchUser(e.target.value);
        e.preventDefault();
    };


    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">GitHub Searcher</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form onSubmit={handleSubmit} className="d-flex">
                            <FormControl
                                required
                                minLength="4"
                                pattern="(?!(|noloro)$)\S+"
                                type="text"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                title="Esta palabra no está permitida"
                                href=""
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>Requerido</Form.Control.Feedback> 
                            <Button type="submit" variant="outline-secondary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {error!='' && <ToastC error={error} />}
        </>
    );
};

NavBar.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func
};
