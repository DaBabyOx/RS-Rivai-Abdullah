import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
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
  doctorScheduleData,
} from "@/src/utils/BuatKunjunganUtils";
import { styles } from "@/src/utils/ui/UiBuatKunjungan";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const daysOfWeek = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];

const getStartedAndEndOfWeek = (date: Date) => {
  const currDay = date.getDay();
  const distanceToMonday = (currDay + 6) % 7;
  const monday = new Date(date);
  monday.setDate(date.getDate() - distanceToMonday);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return { monday, sunday };
};

const formatDate = (date: Date) => {
  return `${date.getDate()}`;
};

const formatMonth = (date: Date) => {
  return date.toLocaleString("id-ID", { month: "short" }).toUpperCase();
};

const getFormattedMonth = (date: Date): string => {
  return date.toLocaleString("id-ID", { month: "long" });
};

export default function BuatKunjunganPage({ onLogout }: any) {
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [selectedPoliklinik, setSelectedPoliklinik] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorSchedule, setDoctorSchedule] = useState<string[]>([]);
  const today = new Date();
  const { monday } = getStartedAndEndOfWeek(today);
  const [value, setValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableDates, setAvailableDates] = useState([]);

  // Fungsi untuk menangani pemilihan tanggal
  const handleDateSelect = (dateString: Date, isAvailable: boolean) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (dateString >= today && isAvailable) {
      setSelectedDate(dateString);
    } else {
      alert("Tanggal tidak tersedia");
    }
    // // Navigasi ke halaman kode booking dengan parameter tanggal yang dipilih
  };

  const daysFromToday = Array.from({ length: 7 }, (_, idx) => {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + idx);
    return futureDate;
  });

  const handleSubmit = () => {
    if (selectedDoctor && selectedDate) {
      // Navigasi ke halaman KodeBookingPage dengan parameter yang dipilih
      router.push("/ui/rencana/validasi-bukti-pendaftaran/kode-booking/page");
    } else {
      Alert.alert(
        "Peringatan",
        "Silakan pilih dokter dan tanggal terlebih dahulu."
      );
    }
  };

  const handleDoctorChange = (item: any) => {
    setSelectedDoctor(item.value);
    // Update jadwal dokter
    setDoctorSchedule(doctorScheduleData[item.label] || []);
  };

  const router = useRouter(); // Menggunakan router dari expo-router
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  useEffect(() => {
    if (selectedDoctor) {
      setSelectedDate(null); // Reset tanggal jika dokter berubah
    }
  }, [selectedDoctor]);

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
        {/* Profil Pasien */}
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
                  Buat Kunjungan
                </Text>
              </View>
            </TouchableOpacity>

            {/* Profile Header */}
            <View style={styles.profileInfoContainer}>
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

              {/* Konten Menu Buat Kunjungan */}

              <View style={{ paddingVertical: 30, width: "100%" }}>
                {/* Tanggal Kedatangan Section */}
                <View style={styles.infoStyle}>
                  <View
                    style={{
                      width: "100%",
                      position: "relative",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="calendar-month-outline"
                      size={22}
                      color="lightgrey"
                      style={{
                        position: "absolute",
                        top: 15,
                        left: 24,
                        zIndex: 10,
                        opacity: 0.8,
                      }}
                    />
                    <TextInput
                      placeholder="Tanggal Kedatangan"
                      placeholderTextColor="lightgrey"
                      keyboardType="numeric"
                      maxLength={16}
                      // value={bookingCode}
                      style={stylesImport.inputStyle}
                      // onChangeText={(text) => setBookingCode(text)} // update state kode booking
                      // onSubmitEditing={() => {
                      //   // Validasi kode booking saat submit
                      //   handleCheckBookingCode(
                      //     bookingCode,
                      //     setBookingCodeError,
                      //     setIsBookingConfirmed
                      //   );
                      //   Keyboard.dismiss();
                      // }}
                    />
                  </View>
                </View>

                {/* Asuransi Section */}
                <View style={styles.infoStyle}>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={insuranceData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Jaminan / Asuransi"
                    searchPlaceholder="Cari Asuransi..."
                    value={selectedInsurance}
                    onChange={(item: any) => {
                      setSelectedInsurance(item.value);
                    }}
                    renderLeftIcon={() => (
                      <FontAwesome5
                        style={[styles.icon, { opacity: 0.8 }]}
                        color="lightgrey"
                        name="hand-holding-medical"
                        size={20}
                      />
                    )}
                    renderItem={renderItem}
                  />
                </View>

                {/* Pilih Poliklinik section */}
                <View style={styles.infoStyle}>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={poliklinikData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Pilih Poliklinik"
                    searchPlaceholder="Cari Poliklinik..."
                    value={selectedPoliklinik}
                    onChange={(item: any) => {
                      setSelectedPoliklinik(item.value);
                    }}
                    renderLeftIcon={() => (
                      <FontAwesome5
                        style={[styles.icon, { opacity: 0.8 }]}
                        name="hospital-user"
                        size={20}
                        color="lightgrey"
                      />
                    )}
                    renderItem={renderItem}
                  />
                </View>

                {/* Pilih DOkter */}
                <View style={{ paddingVertical: 1, width: "100%" }}>
                  <View style={styles.infoStyle}>
                    <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={doctorData}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder="Pilih Dokter"
                      searchPlaceholder="Cari Dokter..."
                      value={selectedDoctor}
                      onChange={handleDoctorChange}
                      renderLeftIcon={() => (
                        <FontAwesome6
                          style={[styles.icon, { opacity: 0.8 }]}
                          color="lightgrey"
                          name="user-doctor"
                          size={20}
                        />
                      )}
                      renderItem={renderItem}
                    />
                  </View>
                </View>

                {/* Jadwal Dokter Section */}
                <Text style={{ opacity: 0.6, paddingVertical: 5 }}>
                  Tersedia pada:
                </Text>
                <View
                  style={{
                    gap: 5,
                    height: "35%",
                    width: "100%",
                    borderWidth: 1,
                    borderColor: "#0BAF9A",
                    borderRadius: 5,
                  }}
                >
                  {selectedDoctor ? (
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                    >
                      <View style={styles.scheduleContainer}>
                        {doctorData
                          .filter((doctor) => doctor.value === selectedDoctor)
                          .map((doctor, index) => (
                            <View key={index} style={{ flexDirection: "row" }}>
                              {daysFromToday.map((dateObj, idx) => {
                                const dayName = dateObj.toLocaleDateString(
                                  "id-ID",
                                  { weekday: "long" }
                                );
                                const formattedDate = dateObj.getDate();
                                const formattedMonth = dateObj.toLocaleString(
                                  "id-ID",
                                  { month: "short" }
                                ); // Convert month langsung built-in
                                const isAvailable =
                                  doctor.schedule.includes(dayName);

                                // Fix compare selected date
                                const isSelected =
                                  selectedDate &&
                                  selectedDate.toDateString() ===
                                    dateObj.toDateString();

                                return (
                                  <TouchableOpacity
                                    key={idx}
                                    style={[
                                      styles.dayItem,
                                      {
                                        borderColor: isSelected
                                          ? "#0BAF9A"
                                          : isAvailable
                                          ? "#0BAF9A"
                                          : "lightgrey",
                                        borderWidth: isAvailable ? 2 : 1,
                                        borderRadius: 100,
                                        justifyContent: "space-between",
                                        backgroundColor: isSelected
                                          ? "#0BAF9A"
                                          : "transparent",
                                      },
                                    ]}
                                    onPress={() =>
                                      handleDateSelect(dateObj, isAvailable)
                                    }
                                    disabled={!isAvailable}
                                  >
                                    <Text
                                      style={{
                                        color: isSelected
                                          ? "#ffffff"
                                          : isAvailable
                                          ? "#0BAF9A"
                                          : "#aaa",
                                        fontWeight: isAvailable ? "600" : "300",
                                        fontSize: 16,
                                      }}
                                    >
                                      {dayName}
                                    </Text>
                                    <Text
                                      style={{
                                        color: isSelected
                                          ? "#ffffff"
                                          : isAvailable
                                          ? "#0BAF9A"
                                          : "#aaa",

                                        fontWeight: isAvailable ? "600" : "300",
                                        fontSize: 16,
                                      }}
                                    >
                                      {formattedDate}
                                    </Text>
                                    <Text
                                      style={{
                                        color: isSelected
                                          ? "#ffffff"
                                          : isAvailable
                                          ? "#0BAF9A"
                                          : "#aaa",

                                        fontWeight: isAvailable ? "600" : "300",
                                      }}
                                    >
                                      {formattedMonth}
                                    </Text>
                                  </TouchableOpacity>
                                );
                              })}
                            </View>
                          ))}
                      </View>
                    </ScrollView>
                  ) : (
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 17,
                          textAlign: "center",
                          color: "#ddd",
                        }}
                      >
                        Silahkan pilih dokter terlebih dahulu
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Buat Pendaftaran Button */}
              <TouchableOpacity
                style={styles.BuatPendaftaranBtn}
                onPress={() =>
                  router.push({
                    pathname:
                      "/ui/rencana/validasi-bukti-pendaftaran/kode-booking/page",
                    params: {
                      selectedDate: formatDate(selectedDate ?? new Date()),
                      selectedMonth: formatMonth(selectedDate ?? new Date()),
                      selectedPoliklinik: selectedPoliklinik,
                      selectedDoctor: selectedDoctor,
                    },
                  })
                }
              >
                <Text style={styles.logoutText}>Buat Pendaftaran</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
}

export const MenuItem = ({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) => (
  <View style={styles.menuContainer}>
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <View style={styles.menuItem}>
        <View style={styles.iconContainer}>
          {icon}
          <Text style={{ fontSize: 17 }}>{label}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <MaterialIcons name="arrow-forward-ios" size={14} color="#0BAF9A" />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);
