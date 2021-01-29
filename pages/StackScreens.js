import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import SignUp from './signUp';
import Splash from './Splash';

const Stack = createStackNavigator();
const StackScreen = ({navigation}) => {
    return (
    <Stack.Navigator headerMode= "none">
        {/* <Stack.Screen name = "SplashScreen" component = {Splash} /> */}
        <Stack.Screen name = "LoginScreen" component = {Login} />
        <Stack.Screen name = "SignUpScreen" component = {SignUp} />
    </Stack.Navigator>
    );
};

export default StackScreen;
