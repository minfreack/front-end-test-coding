import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './user.scss';


export const User = ({user}) => {
    return (
        <>
            <Card bg="dark" text="light" className="user-card m-4 justify-content-center">
                <Card.Img variant="top" className="p-2 justify-content-center" src={user.avatar_url} />
                <Card.Body>
                    <Card.Title>{user.login}</Card.Title>
                    <Card.Text>Id: {user.id}</Card.Text>
                    <Link to={`/${user.login}`}>
                        <Button variant="secondary" className="justify-content-center">Ver perfil</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

User.propTypes = {
    user: PropTypes.object
};