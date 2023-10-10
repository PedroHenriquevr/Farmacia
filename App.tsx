import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import HeaderFunctions from './pages/header';
import TopContent from './pages/TopContent';
import Content from './pages/content';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.background}>
        <HeaderFunctions />
        <TopContent/>
        <Content/>
      </View>
    </SafeAreaView>
  );
}
 

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f5f7fbff',
    height: '100%',
  },
});