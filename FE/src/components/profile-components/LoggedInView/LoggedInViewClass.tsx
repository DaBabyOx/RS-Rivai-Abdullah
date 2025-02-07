import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export function LoggedInViewClass({ onLogout }: any) {
  // const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  // const [faceIDEnabled, setFaceIDEnabled] = useState(true);

  const router = useRouter(); // Menggunakan router dari expo-router

  return (
    <LinearGradient
      colors={["#F5F7B1", "#FFFFFF"]}
      locations={[0.02, 1]} // Kuning sedikit banget di bagian atas
      start={{ x: 0.5, y: 0 }} // Kuning mulai dari tengah horizontal
      end={{ x: 0.5, y: 0.1 }} // Kuning cuma sampai 10% vertikal
      style={{
        flex: 1,
        padding: 5,
        width: "100%",
        height: "100%",

      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* <View style={{ flex: 1 }}> */}
        {/* Konten utama */}
        {/* <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}> */}
        <View style={styles.profileContainer}>
          {/* Profil Pasien */}
          <View style={styles.profileHeader}>
            <Text style={styles.profileTitle}>Profil Pasien</Text>
          </View>

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
                <Text style={styles.userNameStyle}>Mariko</Text>
                <Text style={styles.userRecordNoStyle}>20231201-RA001</Text>
              </View>
            </View>

            {/* Konten Menu Profile Section */}
            <View style={styles.infoStyle}>
              <MenuItem
                icon={
                  <FontAwesome5
                    name="list-alt"
                    size={21}
                    color="rgba(0, 0, 0, 0.7)"
                  />
                }
                label="Pendaftaran"
              />
              <MenuItem
                icon={
                  <MaterialIcons
                    name="route"
                    size={24}
                    color="rgba(0, 0, 0, 0.7)"
                    style={{ transform: [{ rotate: "90deg" }] }}
                  />
                }
                label="Alur Pendaftaran"
              />
              <MenuItem
                icon={
                  <Ionicons
                    name="settings-outline"
                    size={24}
                    color="rgba(0, 0, 0, 0.7)"
                  />
                }
                label="Pengaturan"
                onPress={() =>
                  router.push("/ui/profile/auth/login/Pengaturan/page")
                }
              />
              <MenuItem
                icon={
                  <Feather name="phone" size={24} color="rgba(0, 0, 0, 0.7)" />
                }
                label="Hubungi Kami"
              />
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Ionicons name="log-out-outline" size={24} color="#ffffff" />
            <Text style={styles.logoutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
        {/* </View> */}
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

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 7,
    gap: 30,
  },
  profileHeader: {
    alignItems: "flex-start",
    width: "100%",
  },
  profileTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
  },
  profileInfoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 1,
  },
  profileInfoBox: {
    backgroundColor: "#0BAF9A",
    width: "96%",
    height: 120,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 20,
    paddingLeft: 20,
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
  infoStyle: {
    width: "100%",
    paddingVertical: 20,
    gap: 20,
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
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  arrowContainer: {
    backgroundColor: "lightgray",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "80%",
    padding: 10,
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    borderColor: "yellow",
    borderWidth: 0.5,
  },
  logoutText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
