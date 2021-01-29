import React, { useEffect, useState } from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput,
  View,
  StatusBar,
} from 'react-native';

import {LinearGradient} from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import {Feather} from 'react-native-vector-icons/Feather';

const Login = ({navigation}) => {

  const [data, setData] = useState({
    email: 'Hello',
    password: 'World',
    checkInputChange: false,
    secureTextEntry: true,
  });

  const changeInput = (value) => {
    if (value.length !== 0 ) {
      setData({
        ...data,
        email: value,
        checkInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        checkInputChange: false,
      });
    }
  };

  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };

  const togglePassword = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style = {styles.container}>
      <StatusBar barStyle = "light-content" backgroundColor = "#009387"/>
      <View style = { styles.header}>
        <Text style = {styles.text_header}>Login to Gain Access</Text>
      </View>

      <Animatable.View
      style = {styles.footer}
      animation = "fadeInUpBig"
      >
      <Text style = {styles.text_footer}>Email Address</Text>
      <View style = {styles.action}>
        <TextInput style = {styles.textInput}
          placeholder = "Enter your email"
          autoCapitalize = "none"
          value = {data.email}
          onChangeText = { (val) => changeInput(val)}
          />
      </View>
      <Text style = {[styles.text_footer, styles.passwordAddition]}>Password</Text>
      <View style = {styles.action}>
        <TextInput style = {styles.textInput}
        placeholder = "Password"
        autoCapitalize = "none"
        secureTextEntry = {data.secureTextEntry}
        value = {data.password}
        focusable = {true}
        onChangeText = { (val) => handlePasswordChange(val)}
        />
      </View>

      <View style = { styles.button}>
          {/* <LinearGradient
            colors = {['#08d4c4', '#01ab9d']}
            style = {styles.signIn}
          >
            <Text style = { [styles.textSign, styles.textAddon]}>Sign In</Text>
          </LinearGradient> */}
          <TouchableOpacity
            onPress = { () => navigation.navigate('SignUp')}
            style = { [styles.signIn]}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
      </View>
    </Animatable.View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#009387',
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : 12,
    paddingLeft: 10,
    height: 60,
  },
  passwordAddition: {
    marginTop: 35,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#009387',
    borderRadius: 30,
    color: '#fff',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signUpAdd: {
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#009387',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textAddon: {
    color: '#fff',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
});

export default Login;



