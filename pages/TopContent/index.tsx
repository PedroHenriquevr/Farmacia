import { ListDashes } from "phosphor-react-native";
import { View, Text, StyleSheet } from "react-native";

export default function TopContent() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Ola, Pedro!</Text>
        <View>
          <View style={styles.icons}>
          <ListDashes size={32} />
          <Text style={styles.textIcons}>Sua Receita</Text>
          </View>
        </View>
      </View>
    )
} 

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 20,
    gap: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 2,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textIcons:{
    color: '#7b88f7ff',
    fontSize: 16,
    fontWeight: 'bold',

  }
})