import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterPage from "@/src/app/ui/profile/auth/register/page";
import LoginPage from "@/src/app/ui/profile/auth/login/page";
import { stylesImport } from "@/src/utils/UiUtils";
import { View } from "react-native";

export function LoggedOutViewClass({ onLogin }: any) {
  const [isLoggedOutView, setIsLoggedOutView] = useState(true);

  // Fungsi untuk pindah tampilan (antara Login dan Register)
  const switchView = () => {
    setIsLoggedOutView(!isLoggedOutView); // Ganti tampilan
  };
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: string;
      // padding: number;
      width: "96%",
      // paddingHorizontal: number;
      // height: "100%"
    }}>
        {isLoggedOutView ? (
          <LoginPage onLogin={onLogin} onSwitchView={switchView} />
        ) : (
          <RegisterPage />
        )}
    </View>
  );
}
