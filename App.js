import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber]= useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const startGameHandler = enteredNumber =>{
    setUserNumber(enteredNumber);
    setNumberOfRounds(0);
  }

  const onGameOverHandler = count =>{
    setNumberOfRounds(count);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}></StartGameScreen>
  if(userNumber && numberOfRounds <= 0){
    content = <GameScreen 
                userChoice={userNumber}
                onGameOver={onGameOverHandler}>
                </GameScreen>
  }else if(userNumber && numberOfRounds > 0){
      <GameOverScreen></GameOverScreen>
  }
  return (
    <View style={styles.container}>
      <Header></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
