import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '@/src/utils/UiUtils';
import { SafeAreaView } from 'react-native';
export default function PhoneAuthPage() {
    return (
        // guna menutup keyboard ketika layar manapun diklik
        <SafeAreaView style={styles.contentContainer}>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <View style={styles.contentContainer}>
                {/* <View style={styles.loginHeaderTextStyle}> */}
                <Text style={styles.loginHeaderTextStyle}>Retrieve Account</Text>
                {/* </View> */}
                <View style={styles.loginHeaderContainer}>
                    <Text style={styles.loginDescStyle}>Silahkan masukan No.HP yang terdaftar untuk mengirimkan data akun anda via WhatsApp.</Text>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', textAlign: 'left', opacity: 0.5 }}>Dapatkan Akun Anda</Text>
                </View>

                {/* Input NIK Section */}
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
                        keyboardType='numeric'
                        maxLength={16}
                        // value={nik}
                        style={styles.inputStyle}
                        // onChangeText={(text) => setNik(text)} // update state NIK
                        onSubmitEditing={() => {
                            // handleCheckNIK();
                            Keyboard.dismiss();
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.loginButton}>
                        <TouchableOpacity >
                            <Text style={styles.loginButtonText}>
                                Dapatkan Akun
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/* </TouchableWithoutFeedback > */}
        </SafeAreaView >
    )
}
