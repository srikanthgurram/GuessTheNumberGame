import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, TouchableWithoutFeedback, 
        Keyboard, Alert} from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import Number from '../components/Number'
import languageStrings from '../constants/strings'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmedInput, setConfirmedInput] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const Strings = languageStrings[props.language];

    const inputTextHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmedInput(false);
    }

    const confirmInputHandler = () => {
        let enteredNumber = parseInt(enteredValue);
        if(isNaN(enteredNumber) || enteredNumber <=0 || enteredNumber > 99){
            Alert.alert(
                "Invalid Number!", 
                "Enter a valid number between 1 and 99.", 
                [{ text:"Okay", style:'destructive', onPress: resetInputHandler }]
                )
            return;
        }
        setConfirmedInput(true);
        setEnteredValue('');
        setSelectedNumber(enteredNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if(confirmedInput){
        confirmedOutput = (
            <View>
                <Card style={styles.summaryContainer}>
                    <Text>{Strings.SelectedNumberHelpText}</Text>
                    <Number>{selectedNumber}</Number>
                    <Button
                        title={Strings.StartGameButtonText} 
                        onPress={props.onStartGame.bind(this, selectedNumber)}
                        />
                </Card>
            </View>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen}>
                <Card>
                    <Text style={styles.title}>{Strings.StartGameHeaderText}</Text>
                    <Text>{Strings.UserChoiceInputText}</Text>
                    <Input
                        style={styles.textBox} 
                        keyboardType="number-pad" 
                        maxLength={2} 
                        autoFocus={true} 
                        onChangeText={inputTextHandler} 
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button 
                                title={Strings.ResetButtonText} 
                                color={Colors.secondary} 
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title={Strings.ConfirmButtonText} 
                                color={Colors.primary}
                                onPress={confirmInputHandler}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        paddingBottom: 10
    },
    inputContainer:{
        marginTop: 20,
        maxWidth: '90%',
        alignItems: 'center',
    },
    card: {
        elevation: 8,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.26,
        padding: 20,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 2}
    },
    button:{
        width: '30%'
    },
    buttonContainer:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    textBox: {
        width: 50,
        height: 40,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    summaryContainer: {
        marginVertical: 10
    }
})

export default StartGameScreen;