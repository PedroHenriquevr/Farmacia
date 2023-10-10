import { Faders, MagnifyingGlass } from "phosphor-react-native";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Input from './Components/index';

export default function TopContent() {
  const [text, onChangeText] = useState('');
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>OmniPharm</Text>
        <View style={styles.buscadorContainer}>
          <Input plaece="Buscar Produtos"/>
          <View style={styles.icon}>
           <Faders size={32} color="#fff" />
          </View>
        </View>
      <View style={styles.buscadorContainer}>
      <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Analgesicos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Vitaminas</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  
  icon: {
    backgroundColor: 'black',
    borderRadius: 18,
    padding: 10,
  },
  buscadorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  buttonContainer:{

  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  }
})