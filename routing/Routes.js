import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
 import { Login } from '../pages/Login';

 const Routes = () => {
    <Router>
        <Scene key = "login" component = { Login } title = "Login" initial = {true} hideNavBar = {true} />
    </Router>;
 };

 export default Routes;
