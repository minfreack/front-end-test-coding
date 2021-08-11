import React from 'react';
import { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Wrapper } from '../Wrapper/Wrapper';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { UserPage } from '../UserPage/UserPage';

export const Main = () => {

    const [users, setUsers] = useState([]);

    return (
        <>
            {/* <NavBar setUsers={setUsers}/> */}
            {/* <Wrapper users={users}/> */}
            <Router>
                <Switch>
                    <Route exact path="/">
                        <NavBar setUsers={setUsers}/>
                        <Wrapper users={users}  />
                    </Route>
                    <Route exact path="/:user">
                        <NavBar setUsers={setUsers}/>
                        <UserPage />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
};
