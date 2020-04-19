import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constants/colors'
import languageStrings from '../constants/strings'

export default function Header(props) {
    const Strings = languageStrings[props.language];

    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>{Strings.HeaderText}</Text>
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
