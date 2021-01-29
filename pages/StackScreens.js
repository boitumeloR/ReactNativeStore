import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './login';
import SignUp from './signUp';

const Stack = createStackNavigator();
const StackScreen = ({navigation}) => {
    <Stack.Navigator headerMode= "none">
        <Stack.Screen name = "Login" component = {Login} />
        <Stack.Screen name = "SignUp" component = {SignUp} />
    </Stack.Navigator>;
};

export default StackScreen;
