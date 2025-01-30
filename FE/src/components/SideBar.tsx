import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function SideBar({ sidebarVisible, toggleSidebar }: any) {
  if (!sidebarVisible) {
    return null;
  }

  return (
    <>
        {/* Overlay */}
        <View style={styles.overlay} onTouchEnd={toggleSidebar} />
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
            <FontAwesome name="times" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.sidebarContent}>
            <Text style={styles.sidebarItem}>Home</Text>
            <Text style={styles.sidebarItem}>Rencana</Text>
            <Text style={styles.sidebarItem}>Jadwal</Text>
            <Text style={styles.sidebarItem}>Profile</Text>
          </View>
        </View>

    </>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80%",
    height: "110%",
    backgroundColor: "white",
    zIndex: 9999,
    paddingTop: 60,
    paddingLeft: 20,
  },
  closeButton: {
    marginBottom: 20,
  },
  sidebarContent: {
    flex: 1,
    justifyContent: "center",
  },
  sidebarItem: {
    color: "black",
    fontSize: 18,
    marginBottom: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "1090%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 998,
  },
});
