import React, {createContext, ReactNode, useContext, useState} from 'react';

type GameState = 'STOP' | 'RUNNING';

interface GameContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

export const GameProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [gameState, setGameState] = useState<GameState>('STOP');

  return (
    <GameContext.Provider value={{gameState, setGameState}}>
      {children}
    </GameContext.Provider>
  );
};
