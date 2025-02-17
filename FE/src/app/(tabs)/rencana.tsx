import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useColorScheme } from "@/src/components/useColorScheme";
import DarkTC from "@/assets/svg/TataCaraDark.svg";
import LightTC from "@/assets/svg/TataCaraLight.svg";
import { stylesImport } from "@/src/utils/UiUtils";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const themeText =
    colorScheme === "light" ? styles.lightText : styles.darkText;

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
      <SafeAreaView style={styles.container}>
        {/* Komponen Atas */}
        <Text style={stylesImport.loginHeaderTextStyle}>Rencana Kunjungan</Text>
        <View style={stylesImport.loginHeaderContainer}>
          <Text style={stylesImport.loginDescStyle}>
            Silahkan pilih menu dibawah ini untuk membuat rencana kunjungan anda
          </Text>
        </View>

        {/* Komponen Tengah (Button)*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => router.push("/ui/kunjungan/buat-kunjungan/page")}
          >
            <Text style={styles.buttonText}>Buat Kunjungan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              router.push("/ui/rencana/validasi-bukti-pendaftaran/page")
            }
          >
            <Text style={styles.buttonText}>Cek Bukti Pendaftaran</Text>
          </TouchableOpacity>
        </View>

        {/* Komponen Bawah (Image)*/}
        <View style={styles.imagePrefix}>
          <Text style={[styles.textPendaftaran, themeText]}>
            Tata Cara Pendaftaran:
          </Text>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {colorScheme === "light" ? (
              <LightTC width="200%" height={433} />
            ) : (
              <DarkTC width="200%" height={433} />
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: "100%",
  },

  // Permasalahan Text
  judulAtas: {
    fontWeight: "bold",
    fontSize: 29,
    marginTop: 60,
    paddingTop: 15,
  },
  isiPenjelasan: {
    fontWeight: "regular",
    fontSize: 14,
    marginTop: 83,
    marginBottom: 26,
  },

  //Permasalahan Button
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
  buttonStyle: {
    backgroundColor: "#0BAF9A",
    height: 45,
    borderRadius: 5.16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  //Permasalahan Image
  textPendaftaran: {
    fontWeight: "bold",
    fontSize: 25.08,
    marginTop: 20,
  },

  //Texts
  lightText: {
    color: "black",
  },
  darkText: {
    color: "white",
  },

  //Image
  imagePrefix: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },

  scrollView: {
    flexGrow: 1,
    width: "200%",
    marginTop: 20,
  },

  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
});
