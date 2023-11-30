import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import contact from '../data/data'





export default function ChatList() {

    const data = contact;

    return (
        <ScrollView horizontal={false} style={styles.container}>

            {data?.map(({ name, id, message, imageUrl, time_stamp }) => (
                <TouchableOpacity
                    key={id}
                >
                    <TouchableOpacity>
                        <View style={styles.chatBox}>
                            <View>
                                <Image source={{ uri: imageUrl }} style={styles.chatImg} />
                            </View>
                            <View style={styles.chatInfoBox}>
                                <Text style={styles.username}>{name}</Text>
                                <Text style={styles.message}>{message}</Text>

                            </View>
                            <View>
                                <Text style={styles.time}>{time_stamp}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                </TouchableOpacity>
            ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15
    },
    chatBox: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        paddingLeft: 8
    },
    chatImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#eee',
        marginLeft: 2,
    },
    chatInfoBox: {
        flex:1,
        marginLeft:20
    },
    username: {
        fontSize:14,
        fontWeight:'700',
        color:'#4e4e4e'
    },
    message:{
        fontSize:12,
        marginTop:5,
        color:'#009887',
        fontWeight:'600',
        shadowColor:'#009887',
        shadowOpacity:0.1


    },
    time:{
        fontSize:9,
        marginTop:20,
        color:'#009887',
        fontWeight:'700',
        shadowColor:'#a0d3cd',
        shadowOpacity:0.1
    },


})