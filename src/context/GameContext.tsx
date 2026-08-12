import { createContext, type PropsWithChildren, useContext, useEffect, useReducer, useRef } from 'react';

import { loadGameState, saveGameState } from '@/src/services/storage';
import type { GameState } from '@/src/types';

export const initialGameState: GameState = {
  hasCompletedOnboarding: false,
  nimbo: {
    name: '',
    stage: 1,
    experience: 0,
    affection: 50,
    mood: 'content',
    drops: 0,
    equippedColor: 'default-cloud',
    equippedAccessory: null,
  },
  activeSession: null,
  sessionHistory: [],
  unlockedItems: ['default-cloud'],
};

type GameAction =
  | { type: 'HYDRATE'; payload: GameState }
  | { type: 'COMPLETE_ONBOARDING'; payload: { name: string } };

type GameContextValue = {
  state: GameState;
  isHydrated: boolean;
  completeOnboarding: (name: string) => Promise<void>;
};

const GameContext = createContext<GameContextValue | undefined>(undefined);

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'HYDRATE':
      return action.payload;
    case 'COMPLETE_ONBOARDING':
      return {
        ...state,
        hasCompletedOnboarding: true,
        nimbo: { ...state.nimbo, name: action.payload.name },
      };
  }
}

export function GameProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const [isHydrated, markAsHydrated] = useReducer(() => true, false);
  const lastPersistedState = useRef<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function hydrate() {
      const storedState = await loadGameState();
      if (!isMounted) return;

      if (storedState !== null) {
        lastPersistedState.current = JSON.stringify(storedState);
        dispatch({ type: 'HYDRATE', payload: storedState });
      } else {
        lastPersistedState.current = JSON.stringify(initialGameState);
      }

      markAsHydrated();
    }

    void hydrate();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const serializedState = JSON.stringify(state);
    if (serializedState === lastPersistedState.current) return;

    lastPersistedState.current = serializedState;
    void saveGameState(state);
  }, [isHydrated, state]);

  async function completeOnboarding(name: string) {
    const action: GameAction = { type: 'COMPLETE_ONBOARDING', payload: { name } };
    const nextState = gameReducer(state, action);

    lastPersistedState.current = JSON.stringify(nextState);
    await saveGameState(nextState);
    dispatch(action);
  }

  return (
    <GameContext.Provider value={{ state, isHydrated, completeOnboarding }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame(): GameContextValue {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
