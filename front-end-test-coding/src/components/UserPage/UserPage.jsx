import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './userpage.scss';

export const UserPage = () => {

    const { user } = useParams();
    
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}`)
            .then((res) => {
                setUserInfo(res.data);
            });
    }, []);

    return (
        // <div className="card" style={{ width: '18rem' }}>
        //     <img src={userInfo.avatar_url} className="card-img-top" alt=""/>
        //     <div className="card-body">
        //         <h5 className="card-title">{userInfo.login}</h5>
        //         <p className="card-text">{userInfo.name}</p>
        //         <a href="#" className="btn btn-primary">{user}</a>
        //     </div>
        // </div>
        <div className="card user-info-card m-3 border-secondary border-0">
            <div className="row g-0">
                <div className="col-md-4" >
                    <img src={userInfo.avatar_url} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-8 bg-dark">
                    <div className="card-body">
                        <h5 className="card-title">{userInfo.login}</h5>
                        <p className="card-text">{userInfo.name}</p>
                        <p className="card-text"><small className="text-muted">{user}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
