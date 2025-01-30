import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { stylesImport } from "@/src/utils/UiUtils";
import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function UbahDataDiriPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={stylesImport.contentContainer}>
      <View style={stylesImport.contentContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <AntDesign name="caretleft" size={24} color="black" />
            <Text style={stylesImport.loginHeaderTextStyle}>
              Ubah Data Diri
            </Text>
          </View>
        </TouchableOpacity>

        {/* Form Field Ubah Data Diri  */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formContainer}>
            {/* Input No. KK */}
            <View
              style={{
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <MaterialCommunityIcons
                name="id-card"
                size={19}
                color="grey"
                style={{
                  position: "absolute",
                  top: 15,
                  left: 24,
                  zIndex: 10,
                  opacity: 0.4,
                }}
              />
              <TextInput
                placeholder="No. KK"
                placeholderTextColor="lightgrey"
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

            {/* Input Provinsi */}
            <View
              style={{
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <FontAwesome5
                name="building"
                size={19}
                color="grey"
                style={{
                  position: "absolute",
                  top: 15,
                  left: 24,
                  zIndex: 10,
                  opacity: 0.4,
                }}
              />
              <TextInput
                placeholder="Provinsi"
                placeholderTextColor="lightgrey"
                keyboardType="default"
                maxLength={14}
                style={stylesImport.inputStyle}
                onSubmitEditing={() => {
                  Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
                }}
              />
            </View>

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
                name="building-o"
                size={19}
                color="grey"
                style={{
                  position: "absolute",
                  top: 15,
                  left: 24,
                  zIndex: 10,
                  opacity: 0.4,
                }}
              />
              <TextInput
                placeholder="Kabupaten"
                placeholderTextColor="lightgrey"
                keyboardType="default"
                maxLength={14}
                style={stylesImport.inputStyle}
                onSubmitEditing={() => {
                  Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <MaterialCommunityIcons
                name="home-city-outline"
                size={19}
                color="grey"
                style={{
                  position: "absolute",
                  top: 15,
                  left: 24,
                  zIndex: 10,
                  opacity: 0.4,
                }}
              />
              <TextInput
                placeholder="Kelurahan"
                placeholderTextColor="lightgrey"
                keyboardType="default"
                maxLength={14}
                style={stylesImport.inputStyle}
                onSubmitEditing={() => {
                  Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <MaterialCommunityIcons
                name="home-variant-outline"
                size={19}
                color="grey"
                style={{
                  position: "absolute",
                  top: 15,
                  left: 24,
                  zIndex: 10,
                  opacity: 0.4,
                }}
              />
              <TextInput
                placeholder="RW"
                placeholderTextColor="lightgrey"
                keyboardType="default"
                maxLength={14}
                style={stylesImport.inputStyle}
                onSubmitEditing={() => {
                  Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
                }}
              />
            </View>

            {/* input RT */}
            <View
              style={{
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <FontAwesome6
                name="house-user"
                size={17}
                color="grey"
                style={{
                  position: "absolute",
                  top: 15,
                  left: 24,
                  zIndex: 10,
                  opacity: 0.4,
                }}
              />
              <TextInput
                placeholder="RT"
                placeholderTextColor="lightgrey"
                keyboardType="default"
                maxLength={14}
                style={stylesImport.inputStyle}
                onSubmitEditing={() => {
                  Keyboard.dismiss(); // Menyembunyikan keyboard ketika selesai
                }}
              />
            </View>

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
                name="whatsapp"
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
                placeholder="No. Handphone (WhatsApp)"
                placeholderTextColor="lightgrey"
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

            {/* Save Button */}
            <View style={stylesImport.buttonContainer}>
              <View style={stylesImport.loginButton}>
                <TouchableOpacity
                  onPress={() =>
                    router.push("/ui/profile/auth/mail-auth/mail-preotp/page")
                  }
                >
                  <Text style={stylesImport.loginButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F8F9FA",
    padding: 5,
    width: "100%",
    height: "100%",
    paddingTop: 30,
  },
});
