import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function AppHeader() {
    return (
        <View style={styles.container}>

            <View>
                <TouchableOpacity style={styles.btn}>
                    <Image resizeMode='contain' style={styles.iconImage} source={require('../assets/menu.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.box2}>
                <Text style={styles.headerText}>WhatsApp</Text>
                <TouchableOpacity>
                    <Image resizeMode='contain' style={styles.iconImage} source={require('../assets/search.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        padding: 6,
        marginLeft: 5,
        marginRight: 5,
        marginTop:0
    },
    box2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:20
    },
    btn: {},
    iconImage: {
        height: 20,
        width: 20,

    },
    headerText: {
        fontSize: 16,
        fontWeight: '800',
        color:'#424242'
    },

})