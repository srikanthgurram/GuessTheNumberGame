import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const LanguageScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Select Language</Text>
            <View style={styles.button}>
                <Button 
                    title="ENGLISH" 
                    onPress={props.selectLanguage.bind(this, "EN")}
                />
            </View>
            <View style={styles.button}>
                <Button 
                    title="TELUGU" 
                    onPress={props.selectLanguage.bind(this, "TL")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    buttonContainer:{
        width: '80%',
        marginVertical: 10
    },
    button: {
        width: '40%',
        marginVertical: 10
    }
})

export default LanguageScreen