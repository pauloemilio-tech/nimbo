import AsyncStorage from '@react-native-async-storage/async-storage';

import type { GameState } from '@/src/types';

export const GAME_STATE_STORAGE_KEY = '@nimbo/game-state';

function isGameState(value: unknown): value is GameState {
  if (typeof value !== 'object' || value === null) return false;

  const candidate = value as Record<string, unknown>;
  const nimbo = candidate.nimbo;

  if (typeof nimbo !== 'object' || nimbo === null) return false;

  const candidateNimbo = nimbo as Record<string, unknown>;

  return (
    typeof candidate.hasCompletedOnboarding === 'boolean' &&
    candidate.activeSession === null &&
    Array.isArray(candidate.sessionHistory) &&
    Array.isArray(candidate.unlockedItems) &&
    candidate.unlockedItems.every((item) => typeof item === 'string') &&
    typeof candidateNimbo.name === 'string' &&
    typeof candidateNimbo.stage === 'number' &&
    typeof candidateNimbo.experience === 'number' &&
    typeof candidateNimbo.affection === 'number' &&
    candidateNimbo.mood === 'content' &&
    typeof candidateNimbo.drops === 'number' &&
    typeof candidateNimbo.equippedColor === 'string' &&
    (typeof candidateNimbo.equippedAccessory === 'string' || candidateNimbo.equippedAccessory === null)
  );
}

export async function loadGameState(): Promise<GameState | null> {
  try {
    const storedState = await AsyncStorage.getItem(GAME_STATE_STORAGE_KEY);
    if (storedState === null) return null;

    const parsedState: unknown = JSON.parse(storedState);
    return isGameState(parsedState) ? parsedState : null;
  } catch {
    return null;
  }
}

export async function saveGameState(state: GameState): Promise<void> {
  try {
    await AsyncStorage.setItem(GAME_STATE_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // A persistence failure must not interrupt the current app session.
  }
}
