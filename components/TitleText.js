import React from 'react'
import {Text, StyleSheet} from 'react-native'
import LanguageStrings from '../constants/strings'

const TitleText = props => {
    const Strings = LanguageStrings[props.language];
    return (
        <Text style={{...styles.title, ...props.style}}>
            {props.children}
        </Text>
    )
}

const styles=StyleSheet.create({
    title:{
        fontSize: 20,
        fontFamily: 'roboto-bold'
    }
})

export default TitleText