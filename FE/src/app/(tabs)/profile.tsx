import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { LoggedInView, LoggedOutView } from '@/src/components/ui/profile/ProfileUI';


export default function Jadwal() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <LoggedInView onLogout={() => setLoggedIn(false)} />
      ) : (
        <LoggedOutView onLogin={() => setLoggedIn(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F8F9FA',
    padding: 5,
    width: '100%'
  }
});