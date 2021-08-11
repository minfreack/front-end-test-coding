import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ToastC = ({error}) => {

    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    return (
        <>
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <strong className="me-auto">Se ha generado un error</strong>
                </Toast.Header>
                <Toast.Body>{error.message}</Toast.Body>
            </Toast>
        </>
    );
};

ToastC.propTypes = {
    error: PropTypes.any
};


