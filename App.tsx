import { SafeAreaView, StatusBar, View } from 'react-native';
import HeaderFunctions from './pages/header';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{flex: 1, marginTop:20}}>
      <StatusBar />
      <HeaderFunctions />
      </View>
    </SafeAreaView>
  );
}
 