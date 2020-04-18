import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import Card from '../components/Card'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Guessed in {props.totalRounds} of rounds</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
})

export default GameOverScreen;
