import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '@/src/components/profile-components/LoggedOutView/LoggedOutViewClass';

const dummyData = {
    namaLengkap: 'John Undoe',
    jenisKelamin: 'Laki-laki',
    provinsi: 'Banten',
    kabupaten: 'Kota Tangerang',
    kelurahan: 'Alam Sutera',
    rw: '02',
    rt: '10',
};
export default function RegisterPage() {
    const [nik, setNik] = useState<string>('');
    const [additionalFields, setAdditionalFields] = useState<any>(null);
    const [isDataConfirmed, setIsDataConfirmed] = useState<boolean>(false);
    const [nikError, setNikError] = useState<string>('');

    // validasi NIK
    const validateNIK = (nik: string) => {
        if (nik.trim() === '') {
            setNikError('NIK tidak boleh kosong');
            return false;
        }

        const nikRegex = /^\d{16}$/;
        if (nikRegex.test(nik)) {
            setNikError('');
            return true;
        } else {
            setNikError('NIK harus terdiri dari 16 digit angka');
            return false;
        }
    }
    const handleCheckNIK = () => {
        if(validateNIK(nik)){ // jika NIK KTP benar
            setAdditionalFields(dummyData);
            setIsDataConfirmed(true); // data sudah dikonfirmasi
        }
    }
    return (
        <View style={styles.contentContainer}>
            {/* <View style={styles.loginHeaderTextStyle}> */}
            <Text style={styles.loginHeaderTextStyle}>Register Account</Text>
            {/* </View> */}
            <View style={styles.loginHeaderContainer}>
                <Text style={styles.loginDescStyle}>Silahkan register dengan mengisi NIK anda.</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'left', opacity: 0.5 }}>Register</Text>
            </View>

            {/* Input NIK Section */}
            <View style={{ width: '100%', position: 'relative', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
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
                    placeholder="NIK KTP"
                    keyboardType='numeric'
                    maxLength={16}
                    value={nik}
                    style={styles.inputStyle}
                    onChangeText={(text) => setNik(text)} // update state NIK
                />
            </View>

            {/* Error NIK Section */}
            {nikError ? (
                <Text style={{ color: 'red', marginTop: 5, textAlign: 'center' }}>
                    {nikError}
                </Text>
            ) : null}

            {/* Render Input Tambahan akan muncul ketika NIK valid */}
            {additionalFields && (
                <View style={{ marginTop: 10, width: '100%' }}>
                    {Object.entries(dummyData).map(([key, value]) => (
                        <View key={key} style={{ marginBottom: 10 }}>
                            {/* <Text style={styles.inputLabel}>
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </Text> */}
                            <View style={{ width: '100%', position: 'relative', alignItems: 'center' }}>
                                {/* Menambahkan Icon di sebelah kiri input */}
                                <FontAwesome
                                    name="vcard-o"
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
                                    value={value}
                                    editable={false}
                                    style={[styles.inputStyle, { backgroundColor: 'white', paddingLeft: 54 }]}  // Padding kiri untuk memberi ruang untuk ikon
                                />
                            </View>
                        </View>
                    ))}
                </View>
            )}


            <View style={styles.buttonContainer}>
                <View style={styles.loginButton}>
                    <TouchableOpacity onPress={handleCheckNIK}>
                        <Text style={styles.loginButtonText}>
                            {isDataConfirmed ? 'Konfirmasi Data KTP' : 'Cek'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}