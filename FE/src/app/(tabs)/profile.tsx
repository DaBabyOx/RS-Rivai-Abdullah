import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { LoggedInView } from '@/src/app/ui/profile/ProfileUI';
import LoggedOutView from '@/src/app/ui/profile/ProfileUI';


export default function ProfilePage() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    // <SafeAreaView>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
          {loggedIn ? (
            <LoggedInView onLogout={() => setLoggedIn(false)} />
          ) : (
            <LoggedOutView onLogin={() => setLoggedIn(true)} />
          )}
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F8F9FA',
    padding: 5,
    width: '100%',
    height: '100%'
  }
});