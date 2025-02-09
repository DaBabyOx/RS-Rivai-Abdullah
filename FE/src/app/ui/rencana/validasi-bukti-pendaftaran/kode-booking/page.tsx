import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { stylesImport } from "@/src/utils/UiUtils";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "@/src/utils/ui/UiBuktiKodeBooking";
import { poliklinikData, doctorData } from "@/src/utils/BuatKunjunganUtils";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";

export default function KodeBookingPage() {
  const router = useRouter(); // Menggunakan router dari expo-route
  const { selectedDate, selectedMonth, selectedPoliklinik, selectedDoctor } =
    useLocalSearchParams();
  const selectedPoliklinikLabel = poliklinikData.find(
    (item) => item.value === selectedPoliklinik
  )?.label;

  const selectedDoctorLabel = doctorData.find(
    (item) => item.value === selectedDoctor
  )?.label;

  return (
    <LinearGradient
      colors={["#F5F7B1", "#FFFFFF"]}
      locations={[0.02, 1]} // Kuning sedikit banget di bagian atas
      start={{ x: 0.5, y: 0 }} // Kuning mulai dari tengah horizontal
      end={{ x: 0.5, y: 0.1 }} // Kuning cuma sampai 10% vertikal
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'flex-start',
          // backgroundColor: '#F8F9FA',
          // padding: 5,
          width: "100%",
          // paddingHorizontal: 20,
          // height: '100%',
        }}
      >
        <View style={stylesImport.contentContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <View style={styles.backButtonContainer}>
              <AntDesign name="caretleft" size={24} color="black" />
              <Text style={stylesImport.loginHeaderTextStyle}>
                Kode Booking
              </Text>
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
              <Text style={styles.bookingCodeText}>
                Kode Booking: 9234777832477
              </Text>
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
                      <Text style={styles.scheduleDetail}>
                        {`${selectedDate} ${selectedMonth
                          .toLocaleString("default", { month: "long" })
                          .toLowerCase()} ${new Date().getFullYear()}`}
                      </Text>
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
              <Text style={styles.registrationDetailsHeader}>
                Detail Pendaftaran:
              </Text>
              <View style={styles.registrationDetailsContainer}>
                <View style={styles.registrationItem}>
                  <Text style={styles.registrationLabel}>No. Antrian</Text>
                  <Text style={styles.registrationValue}>89</Text>
                </View>
                <View style={styles.registrationItem}>
                  <Text style={styles.registrationLabel}>Nama Poliklinik</Text>
                  <Text style={styles.registrationValue}>
                    {selectedPoliklinikLabel}
                  </Text>
                </View>
                <View style={styles.registrationItem}>
                  <Text style={styles.registrationLabel}>Nama Dokter</Text>
                  <Text style={styles.registrationValue}>
                    {selectedDoctorLabel}
                  </Text>
                </View>
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoText}>
                  Peserta harap datang 60 menit lebih awal guna pencatatan
                  administrasi.
                </Text>
                <Text style={styles.infoText}>
                  Estimasi Pelayanan: 60 menit.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
