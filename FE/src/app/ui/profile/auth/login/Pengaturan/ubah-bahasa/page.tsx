import {
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
  } from "react-native";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native";
  import { useRouter } from "expo-router";
  import AntDesign from "@expo/vector-icons/AntDesign";
  import { StyleSheet } from "react-native";
import { stylesImport } from "@/src/utils/UiUtils";
  
  const options = [
    { id: "1", label: "English" },
    { id: "2", label: "Indonesia" },
  ];
  
  export default function UbahDataDiriPage() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
  
    return (
      <SafeAreaView style={stylesImport.contentContainer}>
        <View style={stylesImport.contentContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <View style={styles.header}>
              <AntDesign name="caretleft" size={24} color="black" />
              <Text style={stylesImport.loginHeaderTextStyle}>Bahasa</Text>
            </View>
          </TouchableOpacity>
  
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => setSelectedOption(option.id)}
                  style={[
                    styles.radioContainer,
                    {
                      borderColor:
                        selectedOption === option.id ? "#0BAF9A" : "#ddd",
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.radioCircle,
                      selectedOption === option.id && styles.selectedCircle,
                    ]}
                  />
                  <Text style={styles.radioText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      paddingVertical: 20,
      width: "100%",
      paddingTop:  35
    },
    radioContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 8,
      borderWidth: 1,
      borderRadius: 5, // Border radius independen tiap item
      padding: 10,
      width: "100%",
      paddingVertical: 20
    },
    radioCircle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#ddd",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
    },
    selectedCircle: {
      backgroundColor: "#0BAF9A",
      borderColor: "#0BAF9A",
    },
    radioText: {
      fontSize: 16,
      color: "black",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
    },
  });
  