/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Text,
  View,Button
} from 'react-native';

import Login from './component/Login'

const App = () => {

  function helloUser(){
    alert("hello , user")
  }

  return (
    <View>
      <Text>hello world</Text>
      <Login />
      <Button title='btn1' onPress={()=>alert("hi, user")} />
      <Button title='btn2' onPress={helloUser} />
    </View>
  );
};

export default App;
