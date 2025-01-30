import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { stylesImport } from "@/src/utils/UiUtils";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Dropdown } from "react-native-element-dropdown";
import {
  insuranceData,
  poliklinikData,
  doctorData,
} from "@/src/utils/BuatKunjunganUtils";

export default function KodeBookingPage({ onLogout }: any) {
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [selectedPoliklinik, setSelectedPoliklinik] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [value, setValue] = useState(null);

  const router = useRouter(); // Menggunakan router dari expo-route

  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={stylesImport.contentContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <View style={styles.backButtonContainer}>
            <AntDesign name="caretleft" size={24} color="black" />
            <Text style={stylesImport.loginHeaderTextStyle}>Kode Booking</Text>
          </View>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.profileContainer}>
          <View style={styles.profileInfoBox}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
              }}
              resizeMode="cover"
            />
            <View style={styles.profileDetails}>
              <Text style={styles.userNameStyle}>Nama</Text>
              <Text style={styles.userRecordNoStyle}>No Rekam Medik</Text>
            </View>
          </View>

          {/* QR Code n Detail jadwal Section */}
          <View style={styles.qrCodeSection}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={178}
              color="black"
            />
            <Text style={styles.bookingCodeText}>Kode Booking: 9234777832477</Text>
            <View style={styles.separatorLine} />
            <View style={styles.scheduleSection}>
              <View style={styles.scheduleItem}>
                <View style={styles.scheduleInfo}>
                  <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                      name="calendar-month-outline"
                      size={45}
                      color="white"
                    />
                  </View>
                  <View style={styles.scheduleTextContainer}>
                    <Text style={styles.scheduleLabel}>Pendaftaran</Text>
                    <Text style={styles.scheduleDetail}>30 Januari 2024</Text>
                  </View>
                </View>
              </View>
              <View style={styles.scheduleItem}>
                <View style={styles.scheduleInfo}>
                  <View style={styles.iconContainer}>
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={45}
                      color="white"
                    />
                  </View>
                  <View style={styles.scheduleTextContainer}>
                    <Text style={styles.scheduleLabel}>Jam Praktik</Text>
                    <Text style={styles.scheduleDetail}>10.00 WIB</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Detail Info Pendaftaran Section */}
          <View style={styles.registrationDetailsBox}>
            <Text style={styles.registrationDetailsHeader}>Detail Pendaftaran:</Text>
            <View style={styles.registrationDetailsContainer}>
              <View style={styles.registrationItem}>
                <Text style={styles.registrationLabel}>No. Antrian</Text>
                <Text style={styles.registrationValue}>89</Text>
              </View>
              <View style={styles.registrationItem}>
                <Text style={styles.registrationLabel}>Nama Poliklinik</Text>
                <Text style={styles.registrationValue}>{poliklinikData[0].label}</Text>
              </View>
              <View style={styles.registrationItem}>
                <Text style={styles.registrationLabel}>Nama Dokter</Text>
                <Text style={styles.registrationValue}>{doctorData[0].label}</Text>
              </View>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>
                Peserta harap datang 60 menit lebih awal guna pencatatan administrasi.
              </Text>
              <Text style={styles.infoText}>Estimasi Pelayanan: 60 menit.</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    alignItems: "center",
    width: "100%",
    gap: 30,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  profileInfoBox: {
    backgroundColor: "#0BAF9A",
    width: "100%",
    height: 120,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 20,
    paddingLeft: 20,
    marginTop: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "white",
  },
  profileDetails: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  userNameStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  userRecordNoStyle: {
    fontSize: 17,
    color: "#ffffff",
    fontWeight: "semibold",
  },
  qrCodeSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
  },
  bookingCodeText: {
    fontSize: 20,
  },
  separatorLine: {
    borderWidth: 0.7,
    borderColor: "lightgrey",
    width: "100%",
  },
  scheduleSection: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scheduleItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  iconContainer: {
    backgroundColor: "#0BAF9A",
    borderRadius: 10,
    padding: 7,
  },
  scheduleTextContainer: {
    flexDirection: "column",
  },
  scheduleLabel: {
    fontSize: 15,
    opacity: 0.7,
  },
  scheduleDetail: {
    fontSize: 18,
  },
  registrationDetailsBox: {
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 15,
    width: "100%",
  },
  registrationDetailsHeader: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  registrationDetailsContainer: {
    paddingVertical: 10,
  },
  registrationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  registrationLabel: {
    color: "grey",
    fontSize: 18,
  },
  registrationValue: {
    color: "grey",
    fontSize: 18,
  },
  infoTextContainer: {
    gap: 10,
  },
  infoText: {
    color: "black",
    fontSize: 16,
  },
  menuContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    width: "100%",
  },
  btnStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingVertical: 5,
    marginBottom: 1,
    gap: 10,
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  menuLabel: {
    fontSize: 17,
  },
  arrowContainer: {
    backgroundColor: "lightgray",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  scheduleInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  }
});
