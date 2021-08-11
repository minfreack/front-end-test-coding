import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { User } from '../User/User';
import PropTypes from 'prop-types';

export const Wrapper = ({users}) => {
    return (
        <Container>
            <Row className="justify-content-center">
                {
                    users.map(user => (
                        <User user={user} key={user.id}/>
                    ))
                }
            </Row>
        </Container>
    );
};

Wrapper.propTypes = {
    users: PropTypes.array,
};

