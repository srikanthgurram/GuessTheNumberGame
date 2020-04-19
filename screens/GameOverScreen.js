import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Number from '../components/Number'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Game Over !!!</Text>
            <Text>Number of Rounds: {props.totalRounds}</Text>
            <Text>The Number was</Text>
            <Number>{props.guessNumber}</Number>
            <View style={styles.buttonContainer}>
                <Button 
                    title="New Game" 
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
