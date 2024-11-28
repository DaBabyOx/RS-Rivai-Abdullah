import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useColorScheme } from '@/src/components/useColorScheme';
import DarkTC from '@/assets/svg/TataCaraDark.svg';
import LightTC from '@/assets/svg/TataCaraLight.svg';


export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const themeText = colorScheme === 'light' ? styles.lightText : styles.darkText;




  return (
    <View style={styles.container}>
      {/* Komponen Atas (Texts)*/}
      <View>
        <Text style={[styles.judulAtas, themeText]}>Rencana Kunjungan</Text>
        <Text style={[styles.isiPenjelasan, themeText]}>Silahkan pilih menu dibawah ini untuk membuat rencana kunjungan anda</Text>
      </View>


      {/* Komponen Tengah (Button)*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Buat Kunjungan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Cek Bukti Pendaftaran</Text>
        </TouchableOpacity>
      </View>

      
      {/* Komponen Bawah (Image)*/}
      <View style={styles.imagePrefix}>
        <Text style={[styles.textPendaftaran, themeText]}>Tata Cara Pendaftaran:</Text>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {colorScheme === 'light' ? (
            <LightTC width="200%" height={433} />
          ) : (
            <DarkTC width="200%" height={433} />
          )}
        </ScrollView>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },


  // Permasalahan Text
  judulAtas:{
    fontWeight: 'bold',
    fontSize: 29,
    marginTop: 60,
    paddingTop: 15,
  },
  isiPenjelasan:{
    fontWeight: 'regular',
    fontSize: 14,
    marginTop: 83,
    marginBottom: 26,
  },


  //Permasalahan Button
  buttonContainer:{
    alignItems: 'center',
    width: '100%',

  },
  buttonStyle:{
    backgroundColor: '#0BAF9A',
    height: 45,
    borderRadius: 5.16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginBottom: 5,
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
  },

  //Permasalahan Image
  textPendaftaran:{
    fontWeight: 'bold',
    fontSize: 25.08,
    marginTop: 20,
  },

  //Texts
  lightText: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },

  
  //Image
  imagePrefix:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  
  scrollView:{
    flexGrow: 1,
    width: '200%',
    marginTop: 20,
  },

  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },


});
