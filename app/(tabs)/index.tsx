import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/src/components/ScreenContainer';
import { colors, radii, spacing, typography } from '@/src/constants/theme';

export default function HomeScreen() {
  return (
    <ScreenContainer contentContainerStyle={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.eyebrow}>SEU COMPANHEIRO DE FOCO</Text>
        <Text accessibilityRole="header" style={styles.title}>Olá, eu sou o Nimbo!</Text>
        <Text style={styles.description}>
          Seu tempo longe da tela me ajuda a crescer, ficar mais feliz e descobrir novas formas.
        </Text>
      </View>
      <View accessibilityLabel="Espaço reservado para o futuro personagem Nimbo" style={styles.cloudCard}>
        <Text style={styles.cloudEmoji}>☁️</Text>
        <Text style={styles.cloudHint}>futuro personagem</Text>
      </View>
      <View accessibilityLabel="Você tem zero gotas" style={styles.dropsCard}>
        <Text style={styles.dropEmoji}>💧</Text>
        <View>
          <Text style={styles.dropsLabel}>SUAS GOTAS</Text>
          <Text style={styles.dropsValue}>0 gotas</Text>
        </View>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityHint="Este botão será ativado em uma etapa futura"
        style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}>
        <Text style={styles.primaryButtonText}>Começar uma jornada</Text>
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.xl },
  intro: { gap: spacing.sm },
  eyebrow: { ...typography.caption, color: colors.primary },
  title: { ...typography.title, color: colors.text },
  description: { ...typography.body, color: colors.textMuted },
  cloudCard: {
    minHeight: 210,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    borderRadius: radii.xl,
    backgroundColor: colors.cloud,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cloudEmoji: { fontSize: 72 },
  cloudHint: { ...typography.caption, color: colors.textMuted },
  dropsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderRadius: radii.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  dropEmoji: { fontSize: 30 },
  dropsLabel: { ...typography.caption, color: colors.textMuted },
  dropsValue: { ...typography.subtitle, color: colors.text },
  primaryButton: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderRadius: radii.full,
    backgroundColor: colors.primary,
  },
  primaryButtonPressed: { opacity: 0.86 },
  primaryButtonText: { ...typography.button, color: colors.surface },
});
