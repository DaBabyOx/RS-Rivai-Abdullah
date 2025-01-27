import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Jadwal() {
  // State untuk mengontrol tab yang aktif
  const [activeTab, setActiveTab] = useState("berlangsung"); // Default tab adalah 'berlangsung'

  return (
    <View style={styles.container}>
      {/* Profil Pasien */}
      <View style={styles.jadwalHeader}>
        <Text style={styles.jadwalTitle}>Jadwal</Text>
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
          <Text style={styles.switchText}>Berlangsung</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.switchButton,
            activeTab === "history" && styles.activeButton,
          ]}
          onPress={() => setActiveTab("history")}
        >
          <Text style={styles.switchText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Konten berdasarkan tab yang aktif */}
      {activeTab === "berlangsung" ? (
        <View style={styles.content}>
          <Text style={{ color: "lightgrey" }}>Anda Tidak Memiliki Rencana Kunjungan Berlangsung</Text>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={{ color: "lightgrey" }}>Konten History</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "98%",
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 7,
    gap: 30,
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
    padding: 20,
    marginHorizontal: 1,
    borderRadius: 5,
    
  },
  activeButton: {
    backgroundColor: "white",
  },
  switchText: {
    color: "#0BAF9A",
    fontSize: 25,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
    // backgroundColor: "#f8f8f8",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  jadwalHeader: {
    alignItems: "flex-start",
    width: "100%",
  },
  jadwalTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
  },
});
