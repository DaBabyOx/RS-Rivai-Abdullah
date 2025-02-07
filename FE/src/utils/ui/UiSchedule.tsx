import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { doctorData } from "@/src/utils/BuatKunjunganUtils";
import { Dropdown } from "react-native-element-dropdown";

export default function DoctorSchedulePage() {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [doctorSchedule, setDoctorSchedule] = useState<string[]>([]);

  const daysOfWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  const handleDoctorChange = (item: any) => {
    setSelectedDoctor(item.value);
    const selectedDoctorData = doctorData.find((doctor) => doctor.value === item.value);
    setDoctorSchedule(selectedDoctorData?.schedule || []);
  };

  const renderDayItem = (day: string) => {
    const isAvailable = doctorSchedule.includes(day);

    return (
      <View
        key={day}
        style={[
          styles.dayItem,
          { backgroundColor: isAvailable ? "#4CAF50" : "#BDBDBD" },
        ]}
      >
        <Text style={styles.dayText}>{day}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={doctorData}
        labelField="label"
        valueField="value"
        placeholder="Pilih Dokter"
        value={selectedDoctor}
        onChange={handleDoctorChange}
      />

      <ScrollView horizontal style={styles.scheduleContainer}>
        {daysOfWeek.map((day) => renderDayItem(day))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  dropdown: {
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  placeholderStyle: {
    color: "#B0B0B0",
  },
  selectedTextStyle: {
    color: "#333",
  },
  scheduleContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  dayItem: {
    padding: 12,
    borderRadius: 8,
    width: 80,
    alignItems: "center",
    marginRight: 8,
  },
  dayText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
