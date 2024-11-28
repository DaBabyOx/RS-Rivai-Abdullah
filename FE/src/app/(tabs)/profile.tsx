import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';

export default function ProfileScreen() {

  const [loggedIn, setLoggedIn] = useState(false);

    return (
      <View style={styles.container}>
        <Text>Profile</Text>

        {loggedIn?(
          <LoggedInView onLogout={()=>setLoggedIn(false)} />):
          (<LoggedOutView onLogin={()=>setLoggedIn(true)} />)}
      </View>);}

  function LoggedInView({onLogout}){
    return(
      <View>
        <Text>Logged In</Text>
        <Text onPress={onLogout}>Logout</Text>
      </View>);}

  function LoggedOutView({onLogin}){
    return(
      <View>
        <Text>Logged Out</Text>
        <Text onPress={onLogin}>Login</Text>
      </View>);}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  