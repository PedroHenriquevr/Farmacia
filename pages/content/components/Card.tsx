import { View, Text, StyleSheet } from "react-native";

type CardProps = {
    title: string;
    description: string;
    price: number;
}

export default function Card({title, description, price}: CardProps) {
    return(
        <View style={styles.Card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: '#dedede',
        padding: 10,
        width: "45%",
        height: 'auto',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 6,
    },
    description: {
        fontSize: 14,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})