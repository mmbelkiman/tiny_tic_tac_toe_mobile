import React, {useState} from 'react';
import Game from '@/screens/game';
import Menu from '@/screens/menu';

type GameState = 'STOPPED' | 'RUNNING';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('STOPPED');

  const onPressStart = () => {
    setGameState('RUNNING');
  };

  if (gameState === 'STOPPED') {
    return <Menu onPressStart={onPressStart} />;
  }

  return <Game boardSize={3} />;
};

export default App;
