import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { stylesImport } from "@/src/utils/UiUtils";
import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import Foundation from "@expo/vector-icons/Foundation";
import {
  validateBookingCode,
  handleCheckBookingCode,
} from "@/src/utils/CodeBookingUtils"; // Pastikan import yang benar
import AntDesign from "@expo/vector-icons/build/AntDesign";

export default function BuktiPendaftaranPage() {
  const [bookingCode, setBookingCode] = useState<string>(""); // Kode booking input state
  const [bookingCodeError, setBookingCodeError] = useState<string>(""); // Error message state
  const [isBookingConfirmed, setIsBookingConfirmed] = useState<boolean>(false); // Status konfirmasi booking
  const router = useRouter(); // Menggunakan router dari expo-router
  
  return (
    <SafeAreaView style={stylesImport.contentContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                Cek Bukti Pendaftaran
              </Text>
            </View>
          </TouchableOpacity>

          {/* Input Kode Booking Section */}
          <View
            style={{
              width: "100%",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 60,
            }}
          >
            <Foundation
              name="book-bookmark"
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
              placeholder="Kode Booking"
              placeholderTextColor="gray"
              keyboardType="numeric"
              maxLength={16}
              value={bookingCode}
              style={stylesImport.inputStyle}
              onChangeText={(text) => setBookingCode(text)} // update state kode booking
              onSubmitEditing={() => {
                // Validasi kode booking saat submit
                handleCheckBookingCode(
                  bookingCode,
                  setBookingCodeError,
                  setIsBookingConfirmed
                );
                Keyboard.dismiss();
              }}
            />
          </View>

          {/* Error Kode Booking Section */}
          {bookingCodeError ? (
            <Text style={{ color: "red", marginTop: 5, textAlign: "center" }}>
              {bookingCodeError}
            </Text>
          ) : null}

          {/* Tombol Konfirmasi Data Booking */}
          <View style={stylesImport.buttonContainer}>
            <View style={stylesImport.loginButton}>
              <TouchableOpacity onPress={() => handleCheckBookingCode(bookingCode, setBookingCodeError, setIsBookingConfirmed)}>
                <Text style={stylesImport.loginButtonText}>Cek</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
