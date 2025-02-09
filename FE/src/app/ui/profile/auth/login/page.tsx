import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { handleDateChange } from "@/src/utils/DateUtils";
import { stylesImport } from "@/src/utils/UiUtils";
import { router } from "expo-router";

export default function LoginPage({ onLogin, onSwitchView }: any) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const today = new Date();
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{
          flex: 1,
          overflow: "hidden",
          width: "96%",
        }}
      >
        {/* <View style={stylesImport.contentContainer}> */}
        <Text style={stylesImport.loginHeaderTextStyle}>Login Account</Text>
        <View style={stylesImport.loginHeaderContainer}>
          <Text style={stylesImport.loginDescStyle}>
            Silahkan login terlebih dahulu dengan menggunakan No. Rekam Medik
            dan tanggal lahir anda.
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
            Login
          </Text>
        </View>

        <View style={stylesImport.infoStyle}>
          {/* Input No. Rekam Medik section */}
          <View
            style={{
              width: "100%",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SimpleLineIcons
              name="docs"
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
              keyboardType="default"
              placeholderTextColor="gray"
              placeholder="No. Rekam Medik"
              style={stylesImport.inputStyle}
            />
          </View>

          {/* Input Tgl Lahir section */}
          <View
            style={{
              width: "100%",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="calendar-outline"
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
              placeholder="HH-BB-TT"
              placeholderTextColor="gray"
              keyboardType="number-pad" // Hanya menerima angka
              maxLength={10} // Membatasi panjang input menjadi 10 karakter (DD-MM-YYYY)
              value={selectedDate} // Menampilkan value yang sudah diformat
              onChangeText={(text) =>
                handleDateChange(text, setSelectedDate, setIsError)
              } // Menangani perubahan input
              style={[
                stylesImport.inputStyle,
                { borderColor: isError ? "red" : "#0BAF9A" },
              ]}
            />
          </View>

          {/* Triggered ketika error */}
          {isError && (
            <Text style={{ color: "red", marginTop: 5, textAlign: "center" }}>
              Tanggal lahir tidak valid. Format: HH-BB-TTTT
            </Text>
          )}

          <View style={stylesImport.forgotAccountStyle}>
            <TouchableOpacity>
              <Text style={stylesImport.forgotAccountTextStyle}>
                Lupa akun?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={stylesImport.buttonContainer}>
          <View style={stylesImport.loginButton}>
            <TouchableOpacity onPress={onLogin}>
              <Text style={stylesImport.loginButtonText}>Masuk</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text>Belum punya akun?</Text>
            <TouchableOpacity
              onPress={() => router.push("/ui/profile/auth/register/page")}
            >
              <Text style={stylesImport.haveNoAccountStyle}>Buat sekarang</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesImport.separatorContainer}>
            <View style={stylesImport.separatorLine} />
            <Text style={stylesImport.separatorText}>Or Login With</Text>
            <View style={stylesImport.separatorLine} />
          </View>

          <View style={{ gap: 10, width: "98%" }}>
            <TouchableOpacity
              style={stylesImport.loginOptionButton}
              onPress={() => router.push("/ui/profile/auth/phone-auth/page")}
            >
              <Ionicons
                name="call-outline"
                size={20}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text style={stylesImport.loginOptionText}>
                Continue With Phone
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesImport.loginOptionButton}
              onPress={() => router.push("/ui/profile/auth/mail-auth/page")}
            >
              <Ionicons
                name="mail-outline"
                size={20}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text style={stylesImport.loginOptionText}>
                Continue With Mail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
    // </LinearGradient>
  );
}
