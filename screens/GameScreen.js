import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import Card from '../components/Card'
import Number from '../components/Number'
import languageStrings from '../constants/strings'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randNumber = Math.floor(Math.random() * (max-min)) + min;
    
    if(randNumber === exclude){
        generateRandomBetween(min, max, exclude);
    }else{
        return randNumber;
    }
}

const GameScreen = props => {
    const Strings = languageStrings[props.language];
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const { userChoice, onGameOver } = props;
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        console.log(`Low:${currentLow.current} , Guess:${currentGuess} , High:${currentHigh.current}`)
        if(currentGuess === userChoice){
            onGameOver(rounds, currentGuess);
        }
    }, [currentGuess, userChoice, onGameOver])
    
    const nextGuessHandler = direction => {
        if(
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ){
            Alert.alert(
                Strings.FalseButtonAlertTitle, 
                Strings.FalseButtonAlertDescription, [
                {style:'cancel', text:Strings.SorryButtonText}
            ]);
            return;
        }

        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    }

    let gameResult;
    return (
        <View style={styles.screen}>
            <Card>
                <Text>{Strings.OpponentGuessHelpText}</Text>
                <Number>{currentGuess}</Number>
                {gameResult}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={Strings.LowerButtonText} onPress={nextGuessHandler.bind(this, 'lower')}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={Strings.GreaterButtonText} onPress={nextGuessHandler.bind(this, 'greater')}/>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        marginVertical: 10,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly'
    },
    button: {
        width: '40%'
    }
})
export default GameScreen