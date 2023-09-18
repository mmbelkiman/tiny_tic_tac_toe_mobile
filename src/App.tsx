import React, {useState} from 'react';
import Game from '@/screens/game';
import Menu from '@/screens/menu';

type GameState = 'STOPPED' | 'RUNNING';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('STOPPED');
  const [boardSize, setBoardSize] = useState(3);

  const onPressStart = () => {
    setGameState('RUNNING');
  };

  const onPressBack = () => {
    setGameState('STOPPED');
  };

  if (gameState === 'STOPPED') {
    return (
      <Menu
        boardSize={boardSize}
        setBoardSize={setBoardSize}
        onPressStart={onPressStart}
      />
    );
  }

  return <Game boardSize={boardSize} onPressBack={onPressBack} />;
};

export default App;
