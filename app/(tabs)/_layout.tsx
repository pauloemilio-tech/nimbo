import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { colors, spacing, typography } from '@/src/constants/theme';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomPadding = Math.max(insets.bottom, spacing.sm);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: [
          styles.tabBar,
          {
            height: 60 + bottomPadding,
            paddingBottom: bottomPadding,
          },
        ],
        tabBarItemStyle: styles.tabBarItem,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarLabelStyle: typography.caption,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarAccessibilityLabel: 'Aba Início',
          tabBarIcon: ({ color }) => <IconSymbol size={25} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="focus"
        options={{
          title: 'Foco',
          tabBarAccessibilityLabel: 'Aba Foco',
          tabBarIcon: ({ color }) => <IconSymbol size={25} name="timer" color={color} />,
        }}
      />
      <Tabs.Screen
        name="care"
        options={{
          title: 'Cuidados',
          tabBarAccessibilityLabel: 'Aba Cuidados',
          tabBarIcon: ({ color }) => <IconSymbol size={25} name="heart.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'Histórico',
          tabBarAccessibilityLabel: 'Aba Histórico',
          tabBarIcon: ({ color }) => <IconSymbol size={25} name="clock.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.surface,
    borderTopColor: colors.border,
    paddingTop: spacing.xs,
  },
  tabBarItem: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIcon: {
    marginTop: spacing.xs,
  },
});
