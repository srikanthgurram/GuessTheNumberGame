import React from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import Colors from '../constants/colors'
import Number from '../components/Number'
import languageStrings from '../constants/strings'

const GameOverScreen = props => {
    const Strings = languageStrings[props.language];

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>{Strings.GameOverHeaderText}</Text>
            <Text>{Strings.NumberOfRoundsHelpText}{props.totalRounds}</Text>
            <Text>{Strings.SelectedNumberHelpText}</Text>
            <Number>{props.guessNumber}</Number>
            <View style={styles.buttonContainer}>
                <Button 
                    title={Strings.StartNewGameButtonText} 
                    onPress={props.newGameHandler} 
                    color={Colors.primary}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 40,
        color: Colors.secondary,
        marginVertical: 20
    },
    buttonContainer:{
        marginVertical: 20,
        width: '50%'
    },
    button:{
        color: Colors.primary
    }
})

export default GameOverScreen;
