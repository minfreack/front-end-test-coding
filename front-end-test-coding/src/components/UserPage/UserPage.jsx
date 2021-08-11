import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './userpage.scss';
import { ToastC } from '../Toast/ToastC';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faUserFriends  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Col, Row } from 'react-bootstrap';

export const UserPage = () => {

    const { user } = useParams();
    const [userInfo, setUserInfo] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}`)
            .then((res) => {
                setUserInfo(res.data);
            }).catch( (error) => {setError(error);});
    }, []);

    return (
        <>
            { userInfo && (
                <div className="card box-shadow bg-light user-info-card m-3 border-secondary border-0">
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center align-items-center" >
                            <img src={userInfo.avatar_url} className="img-fluid rounded-circle profile-img" alt={userInfo.name}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-1">{userInfo.login}</h5>
                                <p className="card-text fs-2">{userInfo.name}</p>
                                <Row>
                                    <Col>
                                        <div className="card text-white bg-info mb-3">
                                            <div className="card-header">Repositories <FontAwesomeIcon icon={faCloud}/></div>
                                            <div className="card-body">
                                                <h5 className="card-title">{userInfo.public_repos}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="card text-white bg-warning mb-3">
                                            <div className="card-header">Followers <FontAwesomeIcon icon={faUserFriends}/></div>
                                            <div className="card-body">
                                                <h5 className="card-title">{userInfo.followers}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="card text-white bg-success mb-3">
                                            <div className="card-header">Following <FontAwesomeIcon icon={faUserFriends}/></div>
                                            <div className="card-body">
                                                <h5 className="card-title">{userInfo.following}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <a href={userInfo.html_url} target="_blank" className="btn btn-dark mt-3" rel="noreferrer">Ver en <FontAwesomeIcon icon={faGithub}/> </a>                            </div>
                        </div>
                    </div>
                </div>)
            }
            {error!='' && <ToastC error={error} />}
        </>
    );
};
