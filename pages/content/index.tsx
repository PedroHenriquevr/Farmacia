import { View, StyleSheet } from "react-native";
import Card from './components/Card';
import carrinho from './components/mock.json'

export default function Content() {
    return(
        <View style={styles.content}>
            {carrinho.carrinho.map((item: any) => (
                <Card key={item.id} title={item.title} description={item.description} price={item.price}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap', // This property enables wrapping
    justifyContent: 'space-between',
    padding: 10,
    gap: 10,
    }
})