import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterPage from '../../ui/profile/auth/Register/page';
import LoginPage from '../../ui/profile/auth/Login/page';

export function LoggedOutViewClass({ onLogin }: any) {
  const [isLoggedOutView, setIsLoggedOutView] = useState(true);

  // Fungsi untuk pindah tampilan (antara Login dan Register)
  const switchView = () => {
    setIsLoggedOutView(!isLoggedOutView);  // Ganti tampilan
  }
  return (
    <SafeAreaView style={styles.contentContainer}>
      {isLoggedOutView ? (
        <LoginPage onLogin={onLogin} onSwitchView={switchView} />
      ) : (
        <RegisterPage />
      )
      }
    </SafeAreaView >
  );
}

// 'reusable code' agar tidak redundansi
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#F8F9FA',
    padding: 5,
    width: '95%',
    height: '100%',
  },
  loginHeaderTextStyle: {
    fontSize: 30,
    marginBottom: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
  },
  loginDescStyle: {
    fontSize: 16,
    marginBottom: 12,
    color: 'black',
    textAlign: 'left',
    opacity: 0.5,
    width: '100%',
  },
  infoStyle: {
    width: '95%',
    paddingVertical: 20,
    gap: 20,
  },
  forgotAccountStyle: {
    alignItems: 'flex-end',
    marginTop: -10,
  },
  forgotAccountTextStyle: {
    fontSize: 15,
    color: "black",
    opacity: 0.5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#0BAF9A',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    width: '100%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  haveNoAccountStyle: {
    color: "#0BAF9A",
    fontWeight: 'semibold',
    paddingVertical: 10,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '97%',
    marginTop: 29,
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    opacity: 0.2,
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: 'black',
    opacity: 0.5,
  },
  loginOptionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  loginOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.8,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#0BAF9A',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 54,
    width: '100%',
    height: 50,
    fontSize: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  loginHeaderContainer: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'flex-start',
    width: '95%',
  },
});