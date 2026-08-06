import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { StyleSheet } from 'react-native';

const tabHitSlop = { top: 6, right: 2, bottom: 6, left: 2 } as const;

export function HapticTab({ onPressIn, style, ...props }: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      hitSlop={tabHitSlop}
      style={[style, styles.button]}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPressIn?.(ev);
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 48,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
