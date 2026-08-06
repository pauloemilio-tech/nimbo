import { StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/src/components/ScreenContainer';
import { colors, radii, spacing, typography } from '@/src/constants/theme';

export default function FocusScreen() {
  return (
    <ScreenContainer contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.title}>Hora de focar</Text>
        <Text style={styles.description}>Escolha o que você vai fazer e por quanto tempo deseja ficar presente.</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>ATIVIDADE</Text>
        <Text style={styles.fieldValue}>Escolha uma atividade</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>DURAÇÃO</Text>
        <Text style={styles.fieldValue}>Escolha o tempo de foco</Text>
      </View>
      <View accessibilityState={{ disabled: true }} style={styles.disabledButton}>
        <Text style={styles.disabledButtonText}>Iniciar foco</Text>
      </View>
      <Text style={styles.helper}>A configuração do cronômetro chega em uma próxima etapa.</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.md },
  header: { gap: spacing.sm, marginBottom: spacing.md },
  title: { ...typography.title, color: colors.text },
  description: { ...typography.body, color: colors.textMuted },
  field: {
    gap: spacing.sm,
    padding: spacing.lg,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  fieldLabel: { ...typography.caption, color: colors.primary },
  fieldValue: { ...typography.body, color: colors.textMuted },
  disabledButton: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
    borderRadius: radii.full,
    backgroundColor: colors.disabled,
  },
  disabledButtonText: { ...typography.button, color: colors.disabledText },
  helper: { ...typography.caption, color: colors.textMuted, textAlign: 'center' },
});
