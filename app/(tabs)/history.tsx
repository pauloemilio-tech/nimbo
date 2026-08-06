import { StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/src/components/ScreenContainer';
import { colors, radii, spacing, typography } from '@/src/constants/theme';

export default function HistoryScreen() {
  return (
    <ScreenContainer contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.title}>Seu tempo presente</Text>
        <Text style={styles.description}>Acompanhe aqui os momentos que você dedicou ao que importa.</Text>
      </View>
      <View style={styles.emptyState}>
        <View style={styles.emptyIcon}><Text style={styles.emptyEmoji}>🌤️</Text></View>
        <Text style={styles.emptyTitle}>Tudo começa com uma pausa</Text>
        <Text style={styles.emptyDescription}>
          Suas sessões concluídas aparecerão aqui quando você iniciar sua jornada de foco.
        </Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.xl },
  header: { gap: spacing.sm },
  title: { ...typography.title, color: colors.text },
  description: { ...typography.body, color: colors.textMuted },
  emptyState: {
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.xl,
    borderRadius: radii.xl,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  emptyIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 88,
    height: 88,
    borderRadius: radii.full,
    backgroundColor: colors.primarySoft,
  },
  emptyEmoji: { fontSize: 42 },
  emptyTitle: { ...typography.subtitle, color: colors.text, textAlign: 'center' },
  emptyDescription: { ...typography.body, color: colors.textMuted, textAlign: 'center' },
});
