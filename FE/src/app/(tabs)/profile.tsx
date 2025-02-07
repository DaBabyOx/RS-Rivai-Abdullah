import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { LoggedInView } from '@/src/app/ui/profile/ProfileUI';
import LoggedOutView from '@/src/app/ui/profile/ProfileUI';
import { LinearGradient } from 'expo-linear-gradient';


export default function ProfilePage() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    // <SafeAreaView>
    // <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

        <LinearGradient
          colors={["#F5F7B1", "#FFFFFF"]}
          locations={[0.02, 1]} // Kuning sedikit banget di bagian atas
          start={{ x: 0.5, y: 0 }} // Kuning mulai dari tengah horizontal
          end={{ x: 0.5, y: 0.1 }} // Kuning cuma sampai 10% vertikal
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
        <View style={styles.container}>
          {loggedIn ? (
            <LoggedInView onLogout={() => setLoggedIn(false)} />
          ) : (
            <LoggedOutView onLogin={() => setLoggedIn(true)} />
          )}
        </View>
        </LinearGradient>
      // </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    // padding: 5,
    width: '100%',
    // height: '100%'
  }
});