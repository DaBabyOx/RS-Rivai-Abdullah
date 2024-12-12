import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '@/src/utils/UiUtils';
import { SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/build/AntDesign';
export default function PhoneAuthPage() {
  const [phoneNumber, setPhoneNumber] = useState<string>(''); // State untuk nomor telepon
  const router = useRouter(); // Menggunakan router dari expo-router

  // Fungsi validasi nomor telepon
  const validatePhoneNumber = (number: string): boolean => {
    console.log('Validating phone number:', number); // Tambahkan log untuk debugging
    // Validasi nomor yang dimulai dengan 62 dan panjang antara 11-13 karakter
    const phoneRegex = /^62[0-9]{9,12}$/;
    return phoneRegex.test(number);
  };

  // Fungsi untuk menangani aksi "Dapatkan Akun"
  const handleGetAccount = () => {
    console.log("Handle Get Account triggered with phone number:", phoneNumber);

    if (validatePhoneNumber(phoneNumber)) {
      console.log("Valid phone number:", phoneNumber);

      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Nomor valid!',
        text2: 'OTP akan segera dikirimkan.',
      });

      setTimeout(() => {
        console.log("Navigating to OTP page with phone number:", phoneNumber);
        router.push(`/ui/profile/auth/phone-auth/phone-otp/page?phoneNumber=${phoneNumber}`);
      }, 1500);
    } else {
      console.log("Invalid phone number:", phoneNumber);

      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Nomor tidak valid!',
        text2: 'Harap masukkan nomor WhatsApp yang benar.',
      });
    }
  };

  // Fungsi untuk meng-handle perubahan input nomor telepon
  const handlePhoneInputChange = (input: string) => {
    let formattedInput = input;

    // Jika input dimulai dengan '0', ganti dengan '62'
    if (formattedInput.startsWith('0')) {
      formattedInput = '62' + formattedInput.slice(1);
    }

    // Simpan input dengan format yang benar
    setPhoneNumber(formattedInput);
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.contentContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
          <AntDesign name="caretleft" size={24} color="black" />
          <Text style={styles.loginHeaderTextStyle}>Retrieve Account</Text>
        </View>
        <View style={styles.loginHeaderContainer}>
          <Text style={styles.loginDescStyle}>
            Silahkan masukan No.HP yang terdaftar untuk mengirimkan data akun anda via WhatsApp.
          </Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'left', opacity: 0.5 }}>
            Dapatkan Akun Anda
          </Text>
        </View>

        {/* Input Nomor Telepon */}
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
            placeholder="No. Handphone (WhatsApp)"
            placeholderTextColor="gray"
            keyboardType="numeric"
            maxLength={14}
            // value={} // Menampilkan +62 di depan input
            onChangeText={handlePhoneInputChange} // Update nomor telepon yang diformat
            style={styles.inputStyle}
            onSubmitEditing={() => {
              Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.loginButton}>
            <TouchableOpacity onPress={() => router.push('/ui/profile/auth/phone-auth/phone-preotp/page')}>
              <Text style={styles.loginButtonText}>Dapatkan Akun</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
