import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import Card from '../components/Card'
import Number from '../components/Number'

const generateRandomBetween = (min, max, exclude) => {
    console.log(`Min ${min}`)
    console.log(`Max ${max}`)
    console.log(`Exlude ${exclude}`)
    
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
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const { userChoice, onGameOver } = props;

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess == userChoice){
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver])
    const nextGuessHandler = direction => {
        if(
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ){
            Alert.alert('Don\'t Lie!', "You know that", [
                {style:'cancel', text:'Sorry!'}
            ]);
            return;
        }

        if(direction === 'lower'){
            console.log(`guess lower than ${currentGuess}`)
            currentHigh.current = currentGuess;
        }else{
            console.log(`guess higher than ${currentGuess}`)
            currentLow.current = currentGuess;
        }
        console.log(`curren Low ${currentLow}`)
        console.log(`current High ${currentHigh}`)

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, props.userChoice);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    }

    let gameResult;
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Opponent's Guess</Text>
                <Number>{currentGuess}</Number>
                {gameResult}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Lower' onPress={nextGuessHandler.bind(this, 'lower')}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Greater' onPress={nextGuessHandler.bind(this, 'greater')}/>
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