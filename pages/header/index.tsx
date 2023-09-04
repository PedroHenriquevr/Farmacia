import { StyleSheet, View, Dimensions, Image } from "react-native";
import { List, MagnifyingGlass, Info } from "phosphor-react-native";
import avatar from '../../assets/79656858.png'

const width = Dimensions.get("screen").width;

export default function HeaderFunctions() {
    return(
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <List size={32} />
        </View>
        <View style={styles.rightContainer}>
            <MagnifyingGlass size={32} style={{marginRight: 10}} />
            <Info size={32} style={{marginRight: 10}} />
            <Image
            style={styles.image}
            source={avatar}/>
        </View>
    </View>
    )
}  

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    leftContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    rightContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containerImage: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
       width: 32,
       height: 32,
       borderRadius: 20,
       marginRight: 10
      },
})