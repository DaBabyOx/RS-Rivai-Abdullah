import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from '@/src/utils/UiUtils';
import { useLocalSearchParams } from 'expo-router'; // Importing the correct hook
import Toast from 'react-native-toast-message';
import AntDesign from '@expo/vector-icons/build/AntDesign';

export default function PhoneOTPPage() {
    const [otp, setOtp] = useState<string>('');
    const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>(); // Accessing phoneNumber

    // Update OTP based on user input
    const handleOtpChange = (text: string, index: number) => {
        let newOtp = otp.split('');
        newOtp[index] = text;
        setOtp(newOtp.join(''));
    };

    // Focus next input automatically
    const handleFocusNextInput = (index: number, text: string) => {
        if (text.length === 1 && index < 3) {
            const nextInput = index + 1;
            const nextTextInput = document.getElementById(`otp-input-${nextInput}`) as any;
            if (nextTextInput) nextTextInput.focus();
        }
    };

    const handleVerifyOTP = () => {
        if (otp.length === 4) {
            console.log(`Verifying OTP for number: ${phoneNumber}`);
            Toast.show({
                type: 'success',
                text1: 'OTP Verified',
                text2: 'Successfully verified the OTP.',
            });
        } else {
            console.log('Invalid OTP');
            Toast.show({
                type: 'error',
                text1: 'Invalid OTP',
                text2: 'Please enter a valid 4-digit OTP.',
            });
        }
    };

    return (
        <SafeAreaView style={styles.contentContainer}>
            <View style={styles.contentContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <AntDesign name="caretleft" size={24} color="black" />
                    <Text style={styles.loginHeaderTextStyle}>Phone OTP</Text>
                </View>
                <View style={styles.loginHeaderContainer}>
                    <Text style={styles.loginDescStyle}>
                        Silahkan masukkan OTP yang dikirimkan pada WhatsApp anda.
                    </Text>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'left', opacity: 0.5 }}>
                        Verifikasi OTP
                    </Text>
                </View>

                {/* OTP Input */}
                <View style={styles.otpContainer}>
                    {Array(4)
                        .fill('')
                        .map((_, index) => (
                            <TextInput
                                key={index}
                                id={`otp-input-${index}`}
                                style={styles.otpInput}
                                keyboardType="numeric"
                                maxLength={1}
                                value={otp[index] || ''}
                                onChangeText={(text) => {
                                    handleOtpChange(text, index);
                                    handleFocusNextInput(index, text);
                                }}
                                textAlign="center"
                            />
                        ))}
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.loginButton}>
                        <TouchableOpacity onPress={handleVerifyOTP}>
                            <Text style={styles.loginButtonText}>Dapatkan Akun</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

// Contoh styling untuk input OTP
