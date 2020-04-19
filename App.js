import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import Language from './screens/LanguageScreen'

const fetchFonts = () =>{
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber]= useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [guessNumber, setGuessNumber] = useState();
  const [language, setLanguage] = useState("EN");
  const [languageSelected, setLanguageSelected] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const startGameHandler = enteredNumber =>{
    setUserNumber(enteredNumber);
    setNumberOfRounds(0);
  }

  const onGameOverHandler = (count, guessNumber) =>{
    setNumberOfRounds(count);
    setGuessNumber(guessNumber);
  }

  const configureNewGameHandler = () => {
    setNumberOfRounds(0);
    setUserNumber(null);
  }
  
  const languageHandler = selectedLanguage => {
    setLanguage(selectedLanguage);
    setLanguageSelected(true);
  }

  let content = <Language selectLanguage={languageHandler}/>

  if(languageSelected && !userNumber){
    content = <StartGameScreen 
                onStartGame={startGameHandler}
                language={language}>
              </StartGameScreen>
  }else if(userNumber && numberOfRounds <= 0){
    content = <GameScreen 
                userChoice={userNumber}
                onGameOver={onGameOverHandler}
                language={language}>
              </GameScreen>
  }else if(userNumber && numberOfRounds > 0){
      content = <GameOverScreen 
                  totalRounds={numberOfRounds} 
                  newGameHandler={configureNewGameHandler}
                  guessNumber={guessNumber}
                  language={language}>    
                </GameOverScreen>
  }
  return (
    <View style={styles.container}>
      <Header language={language}></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'roboto-regular'
  },
});
