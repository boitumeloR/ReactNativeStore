import React from 'react';

import {
  Text,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const Login = () => {

  return (
    <View style = {styles.centeredView}>
      <View>
        <Text style =  {styles.txt}>Login to Gain Access</Text>
      </View>
      <TextInput style = {styles.username} />
      <TextInput style = {styles.username}/>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
  },
  username: {
    fontSize: 18,
    width: '100%',
    borderBottomWidth: 1,
  },
});


export default Login;
