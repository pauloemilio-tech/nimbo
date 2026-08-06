import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { colors } from '@/src/constants/theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider
        value={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: colors.sky, primary: colors.primary },
        }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style="dark" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
