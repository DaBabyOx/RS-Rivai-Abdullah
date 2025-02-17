import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/src/components/useColorScheme";
import { StatusBar } from "expo-status-bar";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require("../../assets/fonts/Inter.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen
          name="ui/profile/auth/register/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/phone-auth/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/phone-auth/phone-preotp/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/phone-auth/phone-preotp/phone-otp/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/mail-auth/page"
          options={{ presentation: "card", headerShown: false }}
        />
        {/* <Stack.Screen name="ui/profile/auth/mail-auth/mail-preotp/page" options={{ presentation: 'card', headerShown: false }} /> */}
        <Stack.Screen
          name="ui/profile/auth/mail-auth/mail-preotp/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/mail-auth/mail-preotp/mail-otp/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/login/Pengaturan/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/rencana/validasi-bukti-pendaftaran/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/kunjungan/buat-kunjungan/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/rencana/validasi-bukti-pendaftaran/kode-booking/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/login/Pengaturan/ubah-data-diri/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/login/Pengaturan/ubah-bahasa/page"
          options={{ presentation: "card", headerShown: false }}
        />
        <Stack.Screen
          name="ui/profile/auth/login/page"
          options={{ presentation: "card", headerShown: false }}
        />
      </Stack>
      <StatusBar style="auto" translucent />
    </ThemeProvider>
  );
}
