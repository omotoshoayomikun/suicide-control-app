import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Card = (props) => {
    return (
        <View style={styles.card}>
            {
                props.children
            }
        </View>
    )
}

export const BoxCard = (props) => {


    const { header, text, icon, icon2 } = props.list

    return (
        <TouchableOpacity>
            <View style={styles.border_box}>
                <View>
                    <FontAwesome5 name='list-ul' solid={false} size={20} />
                </View>
                <View style={{ width: '75%' }}>
                    <Text style={styles.text_help1}>{header}</Text>
                    <Text style={styles.text_help2}>{text}</Text>
                </View>
                <View>
                    <FontAwesome5 name='angle-right' solid={false} size={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#555',
        fontFamily: 'Montserrat',
        width: '100%',
    },
    border_box: {
        padding: 20,
        paddingTop: 18,
        paddingBottom: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#0E0E241A',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text_help1: {
        fontSize: 18,
        // fontFamily: 'Montserrat',
        // fontWeight: '900'
    },
    text_help2: {
        fontSize: 12,
        fontFamily: 'RaleWay',
    },
})