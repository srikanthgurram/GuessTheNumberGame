import React from 'react'
import {View, StyleSheet, Button, Image} from 'react-native'
import Colors from '../constants/colors'
import languageStrings from '../constants/strings'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = props => {
    const Strings = languageStrings[props.language];

    return (
        <View style={styles.screen}>
            <TitleText style={styles.header}>{Strings.GameOverHeaderText}</TitleText>
            <Image 
                style={styles.image}
                resizeMode='stretch'
                source={require('../assets/images/road_end.jpg')}/>
            <BodyText>{Strings.NumberOfRoundsHelpText}: {props.totalRounds}</BodyText>
            <BodyText>{Strings.SelectedNumberHelpText}: {props.guessNumber}</BodyText>
            <BodyText>{props.guessNumber}</BodyText>
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
    },
    image:{
        width: '80%',
        height: 320
    }
})

export default GameOverScreen;
