import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { stylesImport } from "@/src/utils/UiUtils";
import { SafeAreaView } from "react-native";
import { dummyData, handleCheckNIK, handleConfirm } from "@/src/utils/NikUtils"; // Pastikan import yang benar
import { useRouter } from "expo-router";

export default function RegisterPage() {
  // State declarations
  const [nik, setNik] = useState<string>(""); // NIK input state
  const [nikError, setNikError] = useState<string>(""); // Error message state
  const [additionalFields, setAdditionalFields] = useState<any>(null); // State untuk data dummy
  const [isDataConfirmed, setIsDataConfirmed] = useState<boolean>(false); // Status konfirmasi data

  const router = useRouter();
  // Fungsi untuk handle konfirmasi data
  const handleConfirmKTP = () => {
    if (additionalFields) {
      setIsDataConfirmed(true); // Tandai data sudah terkonfirmasi
      handleConfirm(); // Navigasi ke halaman OTP
    } else {
      setNikError("Harap cek NIK terlebih dahulu.");
    }
  };

  return (
    <SafeAreaView style={stylesImport.contentContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={stylesImport.contentContainer}>
          <Text style={stylesImport.loginHeaderTextStyle}>
            Register Account
          </Text>
          <View style={stylesImport.loginHeaderContainer}>
            <Text style={stylesImport.loginDescStyle}>
              Silahkan register dengan mengisi NIK anda.
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "black",
                textAlign: "left",
                opacity: 0.5,
              }}
            >
              Register
            </Text>
          </View>

          {/* Input NIK Section */}
          <View
            style={{
              width: "100%",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <FontAwesome
              name="vcard-o"
              size={19}
              color="#0BAF9A"
              style={{
                position: "absolute",
                top: 15,
                left: 24,
                zIndex: 10,
                opacity: 0.4,
              }}
            />
            <TextInput
              placeholder="NIK KTP"
              placeholderTextColor="gray"
              keyboardType="numeric"
              maxLength={16}
              value={nik}
              style={stylesImport.inputStyle}
              onChangeText={(text) => setNik(text)} // update state NIK
              onSubmitEditing={() => {
                handleCheckNIK(nik, setNikError, setAdditionalFields); // Validasi NIK
                Keyboard.dismiss();
              }}
            />
          </View>

          {/* Error NIK Section */}
          {nikError ? (
            <Text style={{ color: "red", marginTop: 5, textAlign: "center" }}>
              {nikError}
            </Text>
          ) : null}

          {/* Render Input Tambahan akan muncul ketika NIK valid */}
          {additionalFields && (
            <View style={{ marginTop: 10, width: "100%" }}>
              {Object.entries(dummyData).map(([key, value]) => (
                <View key={key} style={{ marginBottom: 10 }}>
                  <View
                    style={{
                      width: "100%",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome
                      name="vcard-o"
                      size={19}
                      color="#0BAF9A"
                      style={{
                        position: "absolute",
                        top: 15,
                        left: 24,
                        zIndex: 10,
                        opacity: 0.4,
                      }}
                    />
                    <TextInput
                      value={value}
                      editable={false}
                      style={[
                        stylesImport.inputStyle,
                        { backgroundColor: "white", paddingLeft: 54 },
                      ]} // Padding kiri untuk memberi ruang untuk ikon
                    />
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Tombol Konfirmasi Data KTP */}
          {additionalFields ? (
            <View style={stylesImport.buttonContainer}>
              <View style={stylesImport.loginButton}>
                <TouchableOpacity onPress={handleConfirmKTP}>
                  <Text style={stylesImport.loginButtonText}>
                    Konfirmasi Data KTP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={{ flexDirection: "column", width: "100%" }}>
              <View style={stylesImport.buttonContainer}>
                <View style={stylesImport.loginButton}>
                  <TouchableOpacity
                    onPress={() =>
                      handleCheckNIK(nik, setNikError, setAdditionalFields)
                    }
                  >
                    <Text style={stylesImport.loginButtonText}>Cek</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Text>Sudah memiliki akun?</Text>
                <TouchableOpacity
                  onPress={() => router.back()}
                >
                  <Text style={stylesImport.haveNoAccountStyle}>
                    Login Sekarang
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
