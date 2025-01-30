import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { stylesImport } from '@/src/utils/UiUtils';
import { SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function MailAuthPage() {
  const router = useRouter(); // Menggunakan router dari expo-router


  return (
    <SafeAreaView style={stylesImport.contentContainer}>
      <View style={stylesImport.contentContainer}>

        <Text style={stylesImport.loginHeaderTextStyle}>Register Account</Text>
        <View style={stylesImport.loginHeaderContainer}>
          <Text style={stylesImport.loginDescStyle}>
            Silahkan selesaikan register dengan mengisi no. BPJS dan KK.
          </Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'left', opacity: 0.5 }}>
            Register
          </Text>
        </View>
        {/* Input No. BPJS */}
        <View style={{ width: '100%', position: 'relative', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <FontAwesome5
            name="heartbeat"
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
            placeholder="No. BPJS"
            placeholderTextColor="gray"
            keyboardType="numeric"
            maxLength={14}
            // value={} // Menampilkan +62 di depan input
            // onChangeText={handlePhoneInputChange} // Update nomor telepon yang diformat
            style={stylesImport.inputStyle}
            onSubmitEditing={() => {
              Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
            }}
          />
        </View>

        {/* Input No. KK */}
        <View style={{ width: '100%', position: 'relative', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <FontAwesome
            name="whatsapp"
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
            placeholder="No. KK"
            placeholderTextColor="gray"
            keyboardType="numeric"
            maxLength={14}
            // value={} // Menampilkan +62 di depan input
            // onChangeText={handlePhoneInputChange} // Update nomor telepon yang diformat
            style={stylesImport.inputStyle}
            onSubmitEditing={() => {
              Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
            }}
          />
        </View>

        <View style={stylesImport.buttonContainer}>
          <View style={stylesImport.loginButton}>
            <TouchableOpacity onPress={() => router.push('/ui/profile/auth/mail-auth/mail-preotp/page')}>
              <Text style={stylesImport.loginButtonText}>Cek</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
