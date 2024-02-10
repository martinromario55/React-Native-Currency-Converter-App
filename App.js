import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Converter from './src/screen/Converter'
import BGImage from './assets/background-image.jpg'
import Converter2 from './src/screen/Converter2'

export default function App() {
  return <Converter2 />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
