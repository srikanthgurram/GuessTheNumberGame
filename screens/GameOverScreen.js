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
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    resizeMode='stretch'
                    source={require('../assets/images/road_end.jpg')}/>
            </View>
            <BodyText>{Strings.NumberOfRoundsHelpText}: {props.totalRounds}</BodyText>
            <BodyText>{Strings.SelectedNumberHelpText}: {props.guessNumber}</BodyText>
            <View style={styles.buttonContainer}>
                <Button 
                    style={styles.button}
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
        justifyContent: 'center',
        fontSize: 20
    },
    header: {
        fontSize: 40,
        color: Colors.secondary,
        marginVertical: 10
    },
    buttonContainer:{
        marginVertical: 20,
        width: '50%',
        height: 40
    },
    button:{
        color: Colors.primary
    },
    imageContainer:{
        width: '80%',
        height: 320,
        borderRadius: 160,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 20
    },
    image:{
        width: '100%',
        height: '100%'
    }
})

export default GameOverScreen;
