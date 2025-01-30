import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
export default function JadwalPage() {
  // State untuk mengontrol tab yang aktif
  const [activeTab, setActiveTab] = useState("berlangsung"); // Default tab adalah 'berlangsung'

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.jadwalContainer}>
        <View>
          <Text style={styles.jadwalTitle}>Jadwal</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <FontAwesome6 name="magnifying-glass" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Switch Tab */}
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.switchButton,
            activeTab === "berlangsung" && styles.activeButton,
          ]}
          onPress={() => setActiveTab("berlangsung")}
        >
          <Text
            style={[
              styles.switchText,
              activeTab == "history" && { color: "grey" },
            ]}
          >
            Berlangsung
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.switchButton,
            activeTab === "history" && styles.activeButton,
          ]}
          onPress={() => setActiveTab("history")}
        >
          <Text
            style={[
              styles.switchText,
              activeTab == "berlangsung" && { color: "grey" },
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>
      {/* Konten berdasarkan tab yang aktif */}
      {activeTab === "berlangsung" ? (
        <View style={styles.content}>
          <FontAwesome6 name="calendar-times" size={90} color="lightgrey" />
          <Text style={{ color: "lightgrey" }}>
            Anda Tidak Memiliki Rencana Kunjungan Berlangsung
          </Text>
        </View>
      ) : (
        <View style={styles.content}>
          <FontAwesome6 name="list-ul" size={90} color="lightgrey" />
          <Text style={{ color: "lightgrey" }}>Konten History</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F8F9FA",
    padding: 5,
    width: "100%",
    paddingHorizontal: 20,
    height: "100%",
    gap: 30,
  },
  jadwalTitle: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
  },
  switchContainer: {
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 20,
  },
  switchButton: {
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: "white",
  },
  switchText: {
    color: "#0BAF9A",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
    // backgroundColor: "#f8f8f8",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    display: "flex",
    gap: 10,
  },
  jadwalHeader: {
    alignItems: "flex-start",
    width: "100%",
  },
  jadwalContainer: {
    flexDirection: "row", // Letakkan teks dan icon secara horizontal
    justifyContent: "space-between", // Memberikan ruang antara teks dan ikon
    alignItems: "center", // Menyelaraskan vertikal ke tengah
    width: "100%", // Mengisi seluruh lebar kontainer
  },
  iconContainer: {
    flexDirection: "row", // Letakkan ikon secara horizontal
    gap: 10, // Menambahkan jarak antar ikon
  },
});
