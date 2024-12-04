import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

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

function LoggedInView({ onLogout }: any) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIDEnabled, setFaceIDEnabled] = useState(true);

  return (
    <View style={styles.profileContainer}>
      {/* Profile Header */}
      <Image
        style={styles.avatar}
        source={{ uri: 'https://via.placeholder.com/100' }} // Ganti URL dengan gambar profil Anda
      />
      <Text style={styles.name}>Mariko</Text>
      <Text style={styles.email}>marikopratama@gmail.com</Text>
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit profile</Text>
      </TouchableOpacity>

      {/* Inventory Section */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>Appointment History</Text>
          <Text style={styles.itemCount}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>Support</Text>
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <View style={styles.switchItem}>
          <Text style={styles.sectionText}>Push notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </View>
        <View style={styles.switchItem}>
          <Text style={styles.sectionText}>Face ID</Text>
          <Switch
            value={faceIDEnabled}
            onValueChange={() => setFaceIDEnabled(!faceIDEnabled)}
          />
        </View>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>PIN Code</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

function LoggedOutView({ onLogin }: any) {
  return (
    // Safeareview = agar area design tidak terpotong/diluar frame device
    <SafeAreaView style={styles.container}>
        <Text style={styles.loggedOutText}>Account</Text>
        <View style={styles.infoStyle}>
          {/* Translate section */}
          <View style={styles.translateButton}>
            <MaterialIcons name="translate" size={24} color="#6BCB77" />
            <Text>Translate</Text>
          </View>
          {/* Help section */}
          <View style={styles.helpButton}>
            <AntDesign name="questioncircleo" size={24} color="#6BCB77" />
            <Text>Help</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.versionStyle}>Version 5.0.19</Text>
        </View>

    </SafeAreaView>
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
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  editProfileText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  section: {
    width: '90%',
    marginTop: 20,
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  switchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
  itemCount: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  loggedOutText: {
    fontSize: 25,
    marginBottom: 20,
    color: '#66BB6A',
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'flex-start',
    width: '100%',
  },
  loginButton: {
    height: 45,
    backgroundColor: '#6BCB77',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '97%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  infoStyle: {
    // padding: 
    width: '100%',
  },
  translateButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    gap: 10,
    width: '100%',
  },
  helpButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    gap: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  versionStyle: {
    color: "#A9A9A9",
    fontWeight: 'semibold',
  },
});
