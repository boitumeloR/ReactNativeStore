import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
 import { Login } from './pages/Login.js';

 const Routes = () => {
    <Router>
        <Scene key = "login" component = { Login } title = "Login" initial = {true} hideNavBar = {true} />
    </Router>;
 };

 export default Routes;
