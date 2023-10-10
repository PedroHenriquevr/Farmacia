import { MagnifyingGlass } from "phosphor-react-native"
import { View, TextInput, StyleSheet } from "react-native"
import { useState } from "react"

type InputProps = {
    plaece: string;
}

export default function Input({plaece}: InputProps) {
    const [text, onChangeText] = useState('');

    return( 
        <View style={styles.buscador}>
            <MagnifyingGlass size={32} />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={plaece}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buscador: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        flexDirection: 'row',
        backgroundColor: '#dedede',
        gap: 10,
        borderRadius: 20,
        width: 'auto'
      },
      input: {
        width: 220,
        fontWeight: 'bold',
        fontSize: 16,
      },
})