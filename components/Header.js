import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constants/colors'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>Guess a Number</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20
    }
})
