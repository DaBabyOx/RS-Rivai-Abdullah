import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  BackHandler,
  FlatList,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React, { useEffect, useState, useRef } from "react";
import { useColorScheme } from "@/src/components/useColorScheme";
import CalAdd from "@/assets/svg/calplus.svg";
import RoadMapL from "@/assets/svg/RoadMapLight.svg";
import RoadMapD from "@/assets/svg/RoadMapDark.svg";
import Logo from "@/assets/svg/Logo.svg";
import SideBar from "@/src/components/SideBar";
import TabLayout from "./_layout";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 500) * size;

const fonts = {
  large: scale(20),
  medium: scale(16),
  small: scale(12),
};

export default function Home() {
  const [barClicked, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [curIndex, setIndex] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false); // Manage sidebar visibility
  const flatListRef = useRef<FlatList>(null);
  const colorScheme = useColorScheme();

  const gambarBanner = [
    require("@/assets/banners/1.png"),
    require("@/assets/banners/2.png"),
    require("@/assets/banners/3.png"),
  ];

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === gambarBanner.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: curIndex,
        animated: true,
      });
    }
  }, [curIndex]);

  const themeText = colorScheme === "light" ? styles.darkText : styles.darkText;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (barClicked) {
          setFocus(false);
          Keyboard.dismiss();
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [barClicked]);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => {
    if (search === "") {
      setFocus(false);
    }
  };

  const handleClearText = () => {
    setSearch("");
    setFocus(false);
    Keyboard.dismiss();
  };

  return (
    // Bagian Fixed
    <SafeAreaView style={styles.container}>
      {sidebarVisible ? (
        <SideBar
          sidebarVisible={sidebarVisible}
          toggleSidebar={toggleSidebar}
        />
      ) : (
        <TabLayout sidebarVisible={sidebarVisible} />
      )}
      {/* <View style={styles.container}> */}
      {/* Overlay when sidebar is visible */}
      {/* Top Box */}
      <View style={styles.topBox}>
        {/* Container for Hamburger + Pendaftaran and Darurat */}
        <View style={styles.HaDafDar}>
          {/* Hamburger + Pendaftaran */}
          {/* Hamburger Button */}
          <View style={styles.kiribang}>
            <TouchableOpacity
              style={{
                padding: 2,
              }}
              onPress={toggleSidebar}
            >
              <FontAwesome name="bars" size={24} color="black" />
            </TouchableOpacity>
            <Logo height={25} width={188.17} />
          </View>
          {/* Darurat */}
          <TouchableOpacity style={styles.emergency}>
            <MaterialCommunityIcons
              name="alarm-light-outline"
              size={15}
              color="white"
            />
            <Text style={styles.emertext}>Darurat</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.barContainer}>
          {!barClicked && (
            <FontAwesome6 name="magnifying-glass" size={20} color="black" />
          )}
          <TextInput
            style={[styles.barnya, barClicked && styles.barnyaDiclick, { paddingLeft: 10 }]}
            placeholder="Cari disini..."
            value={search}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={setSearch}
          />

          {barClicked ? (
            <TouchableOpacity
              onPress={handleClearText}
              style={styles.iconButton}
            >
              <Entypo name="cross" size={20} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.iconButton}>
              <SimpleLineIcons name="microphone" size={20} color="black" />
            </TouchableOpacity>
          )}
        </View>

        {/* Buat Kunjungan */}
        <View style={styles.leBar}>
          <View style={styles.bagianKiriKunjungan}>
            <View style={styles.calAddBox}>
              <CalAdd width={35} height={33} />
            </View>
            <View style={styles.textKiri}>
              <Text
                style={{
                  fontSize: fonts.large,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Buat Kunjungan
              </Text>
              <Text
                style={{
                  fontSize: fonts.small,
                  color: "white",
                  fontWeight: "medium",
                }}
              >
                Buat jadwal kunjungan dengan dokter pilihan anda
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buatKunjungan}>
            <Text style={styles.buatKunjunganText}>Buat Kunjungan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bagian yang bisa di scroll */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Berita & Penawaran Khusus */}
        <View style={styles.containerBerita}>
          <Text style={[styles.textBerita, themeText]}>
            Berita & Penawaran Khusus
          </Text>
          <FlatList
            ref={flatListRef}
            data={gambarBanner}
            horizontal
            pagingEnabled
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.bannerContainer}>
                <Image source={item} style={styles.banner} />
              </View>
            )}
            contentContainerStyle={{ paddingHorizontal: 14 }}
            onScrollToIndexFailed={() => {}}
          />
        </View>

        {/* Blue Alur */}
        <View style={styles.alurContainer}>
          <View>
            <Image
              source={require("@/assets/blue/Kiri.png")}
              style={styles.iconsKiri}
            />
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 19,
                color: "#00BE61",
              }}
            >
              ALUR SISTEM
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 19,
                color: "white",
              }}
            >
              PENDAFTARAN
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 19,
                color: "black",
              }}
            >
              ONLINE
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 19,
                color: "#DC4031",
              }}
            >
              RAWAT JALAN
            </Text>
          </View>
          <View>
            <Image
              source={require("@/assets/blue/Kanan.png")}
              style={styles.iconsKanan}
            />
          </View>
        </View>

        {/* Roadmap */}
        <View style={styles.RoadMap}>
          {colorScheme === "light" ? (
            <RoadMapL width="100%" height={909.37} />
          ) : (
            <RoadMapD width="100%" height={909.37} />
          )}
        </View>

        {/* Orange Box Bottom */}
        <View style={styles.footer}>
          <Text style={{ fontSize: 10, color: "white" }}>
            RSUP DR. RIVAI ABDULLAH PALEMBANG
          </Text>
        </View>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F8F8F8"
  },

  // topBox ini adalah box header yang berwarna kuning itu
  topBox: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 210,
    backgroundColor: "#F5F7B1",
    paddingHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    zIndex: 1,
  },

  scrollContainer: {
    paddingTop: 275,
    alignItems: "center",
    zIndex: 0,
  },
  darkText: {
    color: "black",
  },
  lightText: {
    color: "white",
  },
  HaDafDar: {
    flexDirection: "row",
    paddingTop: 50,
    paddingHorizontal: 10,
    alignItems: "center",

    justifyContent: "space-between",
    width: "100%",
  },
  hamburger: {
    padding: 5,
  },
  pendaftaran: {
    height: 25,
    resizeMode: "contain",
  },
  kiribang: {
    flexDirection: "row",
    alignItems: "center",
  },
  emergency: {
    backgroundColor: "#FF2C2C",
    width: "30%",

    maxWidth: 120,
    minWidth: 100,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  emertext: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },

  // Bagian dibawah ini merupakan bagian dari search bar
  iconMag: {
    marginRight: 8,
  },
  barnya: {
    flex: 1,
    height: 36,
  },
  barnyaDiclick: {
    paddingLeft: 0,
  },
  iconButton: {
    paddingHorizontal: 10,
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
    elevation: 3,
    paddingHorizontal: 10,
    alignSelf: "center",
  },

  // Bagian dibawah ini merupakan bagian dari Buat Kunjungan
  calAddBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B1F7F3",
    width: 58,
    height: 58,
    borderRadius: 7,
  },
  textKiri: {
    flexDirection: "column",
    textAlign: "left",
    width: 140,
    marginLeft: 10,
  },
  bagianKiriKunjungan: {
    flexDirection: "row",
  },
  buatKunjungan: {
    backgroundColor: "white",
    width: "45%",
    maxWidth: 124,
    minWidth: 114,
    height: 31,
    borderRadius: 6.2,
    justifyContent: "center",
    alignItems: "center",
  },
  buatKunjunganText: {
    color: "#0BAF9A",
    fontSize: fonts.small,
    fontWeight: "bold",
  },
  leBar: {
    width: "95%",
    height: 88,
    backgroundColor: "#0BAF9A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 15,
  },

  // Bagian dibawah ini merupakan bagian dari Berita
  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bannerContainer: {
    width: width * 0.9,
    height: width * 0.9 * (209 / 387),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  containerBerita: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
  },
  textBerita: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: "bold",
  },

  // Bagian dibawah ini merupakan bagian dari Alur
  alurContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "105%",
    height: 110.4,
    marginTop: 15,
    backgroundColor: "#73CDFF",
    alignItems: "center",
  },
  iconsKiri: {
    left: 7,
  },
  iconsKanan: {
    right: 37,
  },
  RoadMap: {
    width: "100%",
    height: 909.37,
    marginTop: 50,
  },
  footer: {
    width: "105%",
    height: 68.1,
    backgroundColor: "#ED5931",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  mainText: {
    fontSize: 24,
    color: "black",
  },
});
