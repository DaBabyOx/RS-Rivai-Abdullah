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
import { styles } from "@/src/utils/ui/UiBuatKunjungan";

export default function BuatKunjunganPage({ onLogout }: any) {
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [selectedPoliklinik, setSelectedPoliklinik] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [value, setValue] = useState(null);

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

  return (
    <SafeAreaView style={styles.profileContainer}>
      {/* Profil Pasien */}
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
                onChange={(item: any) => {
                  setSelectedDoctor(item.value);
                }}
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

          {/* Buat Pendaftaran Button */}
          <TouchableOpacity
            style={styles.BuatPendaftaranBtn}
            onPress={onLogout}
          >
            <Text style={styles.logoutText}>Buat Pendaftaran</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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

