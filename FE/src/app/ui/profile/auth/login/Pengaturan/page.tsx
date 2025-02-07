import { View, Text, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import { stylesImport } from "@/src/utils/UiUtils";
import { SafeAreaView } from "react-native";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function PhoneAuthPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter(); // Menggunakan router dari expo-router
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

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
    <SafeAreaView style={styles.container}>
      <View style={stylesImport.contentContainer}>
        {/* Header */}
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
            <Text style={stylesImport.loginHeaderTextStyle}>Pengaturan</Text>
          </View>
        </TouchableOpacity>

        {/* Content Menu Profile Section */}
        <View style={styles.infoStyle}>
          <MenuItem
            icon={
              <MaterialCommunityIcons
                name="account-edit-outline"
                size={26}
                color="black"
              />
            }
            label="Ubah Data Diri"
            onPress={() => router.push("/ui/profile/auth/login/Pengaturan/ubah-data-diri/page")}
          />
          <MenuItem
            label="Bahasa"
            icon={<Ionicons name="language" size={26} color="black" />}
            onPress={() => router.push("/ui/profile/auth/login/Pengaturan/ubah-bahasa/page")}
          />
          <View style={styles.darkModeContainer}>
            <MenuItem
              icon={<Ionicons name="moon-outline" size={26} color="black" />}
              label="Dark Mode"
            />
            <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
          </View>
        </View>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
}

const MenuItem = ({
  icon,
  label,
  onPress
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.menuContainer}>
      <View style={styles.menuItem}>
        <View style={styles.iconContainer}>
          {icon}
          <Text style={{ fontSize: 18 }}>{label}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

  },
  infoStyle: {
    flex: 1,
    alignItems: "flex-start",
    width: "100%",
    paddingVertical: 20,
  },
  menuContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    width: "100%",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  // New Style for Dark Mode Section
  darkModeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Align text and switch to opposite sides
    width: "86%", // Make sure it takes the full width
  },
});
