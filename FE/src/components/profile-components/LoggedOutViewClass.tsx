import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export function LoggedOutViewClass({ onLogin }: any) {
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Fungsi untuk menangani input dan auto-format tanggal
  const handleDateChange = (text: string) => {
    let formattedText = text.replace(/\D/g, '');  // Hanya ambil angka

    // Format hari (DD)
    if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + '-' + formattedText.slice(2);
    }
    
    // Format bulan (MM)
    if (formattedText.length > 5) {
      formattedText = formattedText.slice(0, 5) + '-' + formattedText.slice(5);
    }

    // Format tahun (YYYY)
    if (formattedText.length > 10) {
      formattedText = formattedText.slice(0, 10);
    }

    setSelectedDate(formattedText);  // Set ke state untuk menampilkan di TextInput
  };

  return (
    <SafeAreaView style={styles.loginAccountContainer}>
      <Text style={styles.loginHeaderTextStyle}>Login Account</Text>
      <View style={styles.loginHeaderContainer}>
        <Text style={styles.loginDescStyle}>Silahkan login terlebih dahulu dengan menggunakan No. Rekam Medik dan tanggal lahir anda.</Text>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'left', opacity: 0.5 }}>Login</Text>
      </View>

      <View style={styles.infoStyle}>
        {/* Input No. Rekam Medik section */}
        <View style={{ width: '100%', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <SimpleLineIcons
            name="docs"
            size={19}
            color="#0BAF9A"
            style={{
              position: 'absolute',
              top: 15,
              left: 24,
              zIndex: 10,
              opacity: 0.4,
            }}
          />
          <TextInput
            placeholder="No. Rekam Medik"
            style={{
              borderWidth: 1,
              borderColor: '#0BAF9A',
              borderRadius: 5,
              padding: 10,
              paddingLeft: 49,
              width: '100%',
              height: 50,
              fontSize: 18,
            }}
          />
        </View>

        {/* Input Tgl Lahir section */}
        <View style={{ width: '100%', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons
            name="calendar-outline"
            size={19}
            color="#0BAF9A"
            style={{
              position: 'absolute',
              top: 15,
              left: 24,
              zIndex: 10,
              opacity: 0.4,
            }}
          />

          {/* TextInput untuk input tanggal lahir dengan format DD-MM-YYYY */}
          <TextInput
            placeholder="HH-BB-TT"
            keyboardType="number-pad"  // Hanya menerima angka
            maxLength={10}  // Membatasi panjang input menjadi 10 karakter (DD-MM-YYYY)
            value={selectedDate}  // Menampilkan value yang sudah diformat
            onChangeText={handleDateChange}  // Menangani perubahan input
            style={{
              borderWidth: 1,
              borderColor: '#0BAF9A',
              borderRadius: 5,
              padding: 10,
              paddingLeft: 49,
              width: '100%',
              height: 50,
              fontSize: 18,
            }}
          />
        </View>

        <View style={styles.forgotAccountStyle}>
          <TouchableOpacity>
            <Text style={styles.forgotAccountTextStyle}>Lupa akun?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonText}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.haveNoAccountStyle}>Belum punya akun? Buat sekarang</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or Login With</Text>
          <View style={styles.separatorLine} />
        </View>

        <View style={{ gap: 10, width: '98%' }}>
          <TouchableOpacity style={styles.loginOptionButton}>
            <Ionicons name="call-outline" size={20} color="black" style={{ marginRight: 10 }} />
            <Text style={styles.loginOptionText}>Continue With Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginOptionButton}>
            <Ionicons name="mail-outline" size={20} color="black" style={{ marginRight: 10 }} />
            <Text style={styles.loginOptionText}>Continue With Mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginAccountContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F8F9FA',
    padding: 5,
    width: '100%',
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
    width: '98%',
  },
  loginButton: {
    height: "17%",
    backgroundColor: '#0BAF9A',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    width: '97%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  haveNoAccountStyle: {
    color: "#A9A9A9",
    fontWeight: 'semibold',
    marginTop: 10,
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
  loginHeaderContainer: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: 'flex-start',
    width: '95%',
  },
});

