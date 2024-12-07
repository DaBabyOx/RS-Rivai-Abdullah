import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/src/components/profile-components/LoggedOutView/LoggedOutViewClass'
import Ionicons from '@expo/vector-icons/Ionicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'

export default function LoginPage({ onLogin , onSwitchView }: any) {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    
    // Fungsi untuk menangani input dan auto-format tanggal
    const handleDateChange = (text: string) => {
        let formattedText = text.replace(/\D/g, ''); // Hanya angka

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

        setSelectedDate(formattedText);
        validateDate(formattedText); // Validasi input saat pengguna mengetik
    };

    // Fungsi validasi tanggal
    const validateDate = (date: string) => {
        const regex = /^(\d{2})-(\d{2})-(\d{4})$/; // Format DD-MM-YYYY
        if (!regex.test(date)) {
            setIsError(true);
            return;
        }

        const [day, month, year] = date.split('-').map(Number);

        if (
            day < 1 ||
            day > 31 || // Hari tidak valid
            month < 1 ||
            month > 12 || // Bulan tidak valid
            year < 1940 || // Tahun terlalu kecil
            year > 2007
        ) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };
    return (
        <>
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
                        style={styles.inputStyle}
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
                    <TextInput
                        placeholder="HH-BB-TT"
                        keyboardType="number-pad"  // Hanya menerima angka
                        maxLength={10}  // Membatasi panjang input menjadi 10 karakter (DD-MM-YYYY)
                        value={selectedDate}  // Menampilkan value yang sudah diformat
                        onChangeText={handleDateChange}  // Menangani perubahan input
                        style={[
                            styles.inputStyle,
                            { borderColor: isError ? 'red' : '#0BAF9A' }
                        ]}
                    />
                </View>

                {/* Triggered ketika error */}
                {isError && (
                    <Text style={{ color: 'red', marginTop: 5, textAlign: 'center' }}>
                        Tanggal lahir tidak valid. Format: HH-BB-TTTT
                    </Text>
                )}

                <View style={styles.forgotAccountStyle}>
                    <TouchableOpacity>
                        <Text style={styles.forgotAccountTextStyle}>Lupa akun?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.loginButton}>
                    <TouchableOpacity onPress={onLogin}>
                        <Text style={styles.loginButtonText}>Masuk</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Text>Belum punya akun?</Text>
                    <TouchableOpacity onPress={onSwitchView}>
                        <Text style={styles.haveNoAccountStyle}>Buat sekarang</Text>
                    </TouchableOpacity>
                </View>

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
        </>
    )
}