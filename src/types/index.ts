export type Nimbo = {
  name: string;
  stage: number;
  experience: number;
  affection: number;
  mood: 'content';
  drops: number;
  equippedColor: string;
  equippedAccessory: string | null;
};

export type GameState = {
  hasCompletedOnboarding: boolean;
  nimbo: Nimbo;
  activeSession: null;
  sessionHistory: readonly unknown[];
  unlockedItems: readonly string[];
};
