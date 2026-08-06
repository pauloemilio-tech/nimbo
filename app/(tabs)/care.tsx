import { StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/src/components/ScreenContainer';
import { colors, radii, spacing, typography } from '@/src/constants/theme';

const careActions = [
  { emoji: '💙', title: 'Dar carinho' },
  { emoji: '💧', title: 'Alimentar' },
  { emoji: '✨', title: 'Brincar' },
] as const;

export default function CareScreen() {
  return (
    <ScreenContainer contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.title}>Cuide do Nimbo</Text>
        <Text style={styles.description}>Em breve, suas gotas poderão virar momentos de cuidado com seu companheiro.</Text>
      </View>
      {careActions.map((action) => (
        <View accessibilityState={{ disabled: true }} key={action.title} style={styles.actionCard}>
          <Text style={styles.actionEmoji}>{action.emoji}</Text>
          <View style={styles.actionText}>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <Text style={styles.comingSoon}>DISPONÍVEL EM BREVE</Text>
          </View>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.md },
  header: { gap: spacing.sm, marginBottom: spacing.md },
  title: { ...typography.title, color: colors.text },
  description: { ...typography.body, color: colors.textMuted },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    opacity: 0.72,
  },
  actionEmoji: { fontSize: 28 },
  actionText: { flex: 1, gap: spacing.xs },
  actionTitle: { ...typography.subtitle, color: colors.text },
  comingSoon: { ...typography.caption, color: colors.primary },
});
