import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
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