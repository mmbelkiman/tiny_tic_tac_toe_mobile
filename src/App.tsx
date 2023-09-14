import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {GameProvider, useGameContext} from './contexts/GameContext';
import Game from './screens/game';

const App: React.FC = () => {
  const {gameState, setGameState} = useGameContext();

  const startGame = () => {
    setGameState('RUNNING');
  };

  return (
    <View style={styles.container}>
      {gameState === 'STOP' ? (
        <Button title="START GAME" onPress={startGame} />
      ) : (
        <Game boardSize={10} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RootApp: React.FC = () => {
  return (
    <GameProvider>
      <App />
    </GameProvider>
  );
};

export default RootApp;
