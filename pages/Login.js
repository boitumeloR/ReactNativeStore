import React, { useEffect } from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput,
  View,
} from 'react-native';

import {LinearGradient} from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Login = () => {

  return (
    <View style = {styles.container}>
      <View style = { styles.header}>
        <Text style = {styles.text_header}>Login to Gain Access</Text>
      </View>
      <View style = {styles.footer}>
        <Text style = {styles.text_footer}>Email Address</Text>
        <View style = {styles.action}>
          <FontAwesome
            name = "user-o"
            color = "#05375a"
            size = {20}
          />
          <TextInput style = {styles.textInput}
          placeholder = "Enter your email"
          autoCapitalize = "none"
          />
          <Feather
            name = "check-circle"
            color = "green"
            size = {20}
          />
        </View>
        <Text style = {[styles.text_footer, styles.passwordAddition]}>Password</Text>
        <View style = {styles.action}>
          <FontAwesome
            name = "lock"
            color = "#05375a"
            size = {20}
          />
          <TextInput style = {styles.textInput}
          placeholder = "Password"
          autoCapitalize = "none"
          secureTextEntry = {true}
          />
          <Feather
            name = "eye-off"
            color = "grey"
            size = {20}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : 12,
    paddingLeft: 10,
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
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
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
