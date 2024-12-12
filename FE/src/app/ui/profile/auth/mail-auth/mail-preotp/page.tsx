import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '@/src/utils/UiUtils';
import { SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function MailAuthPage() {
    const [phoneNumber, setPhoneNumber] = useState<string>(''); // State untuk nomor telepon
    const router = useRouter(); // Menggunakan router dari expo-router


    return (
        <SafeAreaView style={styles.contentContainer}>
            <View style={styles.contentContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <AntDesign name="caretleft" size={24} color="black" />
                    <Text style={styles.loginHeaderTextStyle}>Email OTP</Text>
                </View>
                <View style={styles.loginHeaderContainer}>
                    <Text style={styles.loginDescStyle}>
                        Silahkan masukkan e-mail yang terdaftar untuk mengirimkan OTP via e-mail.
                    </Text>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'left', opacity: 0.5 }}>
                        Kirim OTP
                    </Text>
                </View>

                {/* Input Email */}
                <View style={{ width: '100%', position: 'relative', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <MaterialCommunityIcons
                        name="email-outline"
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
                        placeholder="Email"
                        placeholderTextColor="gray"
                        keyboardType="numeric"
                        maxLength={14}
                        // value={} // Menampilkan +62 di depan input
                        // onChangeText={handlePhoneInputChange} // Update nomor telepon yang diformat
                        style={styles.inputStyle}
                        onSubmitEditing={() => {
                            Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
                        }}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.loginButton}>
                        <TouchableOpacity onPress={() => router.push('/ui/profile/auth/mail-auth/mail-preotp/mail-otp/page')}>
                            <Text style={styles.loginButtonText}>Dapatkan OTP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
