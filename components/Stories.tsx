import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import contact from '../data/data';



export default function Stories() {
    const data = contact;
    return (
        <View >
            <ScrollView horizontal style={styles.container} >

                {data.map(({ id,imageUrl }) => (
                    <View key={id}>
                        <TouchableOpacity style={{ padding: 2, }}>
                            <Image style={styles.storyImg}
                                source={{uri:imageUrl}} resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </View>

                ))
                }
            </ScrollView>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        padding: 5,
        marginLeft: 0,
        marginTop: 10

    },
    storyImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#eee',
        marginLeft: 10,
        borderColor:'#97D5CE',
        borderWidth:2,
    }
})