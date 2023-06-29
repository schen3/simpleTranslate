import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FU from './src/uploader';
import SelectLang from './src/selectLang';


export default function App() {

  const languageConfig = {
    fileFrom: {
      label: 'FROM',
      countriesFlag: ["US", "ES", "CN", "TW", "FR", "DE", "IT"],
      countryLables: { US: "English", FR: "Français", DE: "Deutsch", IT: "italiano", CN: '中文-简体', TW: '中文-繁體', ES: 'español' },
      placeholder: 'Select source language'
    },
    fileTo: {
      label: 'TO',
      countriesFlag: ["US", "ES", "CN", "TW", "FR", "DE", "IT"],
      countryLables: { US: "English", FR: "Français", DE: "Deutsch", IT: "italiano", CN: '中文-简体', TW: '中文-繁體', ES: 'español' },
      placeholder: 'Select target language'
    }
  }


  return (
    <View style={styles.container}>
      <></>
      <Text style={styles.baseText}>Translate your file to selected languague</Text>
      <div style={styles.selectArea}>
        <SelectLang collection={languageConfig.fileFrom} />
        <SelectLang collection={languageConfig.fileTo} />
      </div>
      <FU></FU>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    minWidth:'100vh',
    overflow:'visible',
    fontFamily: 'system-ui',
    // justifyContent: 'center',
  },
  baseText: {
    fontSize: 30
  },
  selectArea: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    width: '100vh',
    paddingTop: 40,
    paddingBottom: 20
  }
});


