import { router } from 'expo-router';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { ScreenContainer } from '@/src/components/ScreenContainer';
import { colors, radii, spacing, typography } from '@/src/constants/theme';

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 16;

function getNameError(name: string): string | null {
  const trimmedName = name.trim();

  if (trimmedName.length === 0) {
    return 'Digite um nome para sua nuvem.';
  }

  if (trimmedName.length < MIN_NAME_LENGTH) {
    return 'O nome precisa ter pelo menos 2 caracteres.';
  }

  if (trimmedName.length > MAX_NAME_LENGTH) {
    return 'Escolha um nome com no máximo 16 caracteres.';
  }

  return null;
}

export default function OnboardingScreen() {
  const [name, setName] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const nameError = getNameError(name);
  const isNameValid = nameError === null;

  function handleConfirm() {
    if (!isNameValid) {
      return;
    }

    setName(name.trim());
    router.replace('/(tabs)');
  }

  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
        <ScreenContainer contentContainerStyle={styles.container}>
        <View style={styles.intro}>
          <Text style={styles.eyebrow}>UMA NOVA COMPANHIA</Text>
          <Text accessibilityRole="header" style={styles.title}>
            Como vamos chamar sua nuvem?
          </Text>
          <Text style={styles.description}>
            Ela será sua companheira nos momentos de foco e crescerá junto com você.
          </Text>
        </View>

        <View
          accessibilityLabel="Uma nuvem sorridente, sua futura companheira"
          style={styles.cloudCard}>
          <Text style={styles.cloudEmoji}>☁️</Text>
          <View style={styles.cloudFace}>
            <View style={styles.cloudEye} />
            <View style={styles.cloudEye} />
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome da sua nuvem</Text>
          <TextInput
            accessibilityLabel="Nome da sua nuvem"
            autoCapitalize="words"
            autoCorrect={false}
            enterKeyHint="done"
            onBlur={() => setHasInteracted(true)}
            onChangeText={(value) => {
              setName(value);
              setHasInteracted(true);
            }}
            onSubmitEditing={handleConfirm}
            placeholder="Ex.: Floquinho"
            placeholderTextColor={colors.textMuted}
            returnKeyType="done"
            style={[styles.input, hasInteracted && nameError ? styles.inputError : null]}
            value={name}
          />
          <View style={styles.feedbackRow}>
            <Text accessibilityLiveRegion="polite" style={styles.errorText}>
              {hasInteracted ? nameError : null}
            </Text>
            <Text style={styles.counter}>{name.trim().length}/{MAX_NAME_LENGTH}</Text>
          </View>
        </View>

        <Pressable
          accessibilityHint="Abre a tela inicial do aplicativo"
          accessibilityRole="button"
          disabled={!isNameValid}
          onPress={handleConfirm}
          style={({ pressed }) => [
            styles.button,
            !isNameValid && styles.buttonDisabled,
            pressed && isNameValid && styles.buttonPressed,
          ]}>
          <Text style={[styles.buttonText, !isNameValid && styles.buttonTextDisabled]}>
            Conhecer meu Nimbo
          </Text>
        </Pressable>
        </ScreenContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  keyboardView: { flex: 1 },
  container: { justifyContent: 'center', gap: spacing.lg },
  intro: { gap: spacing.sm },
  eyebrow: { ...typography.caption, color: colors.primary },
  title: { ...typography.title, color: colors.text },
  description: { ...typography.body, color: colors.textMuted },
  cloudCard: {
    minHeight: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xl,
    backgroundColor: colors.cloud,
  },
  cloudEmoji: { fontSize: 92 },
  cloudFace: {
    position: 'absolute',
    top: 84,
    flexDirection: 'row',
    gap: spacing.md,
  },
  cloudEye: {
    width: 5,
    height: 7,
    borderRadius: radii.full,
    backgroundColor: colors.text,
  },
  form: { gap: spacing.sm },
  label: { ...typography.button, color: colors.text },
  input: {
    minHeight: 54,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    backgroundColor: colors.surface,
    color: colors.text,
    fontSize: typography.body.fontSize,
  },
  inputError: { borderColor: '#B54747' },
  feedbackRow: {
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  errorText: { flex: 1, ...typography.caption, color: '#B54747' },
  counter: { ...typography.caption, color: colors.textMuted },
  button: {
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderRadius: radii.full,
    backgroundColor: colors.primary,
  },
  buttonDisabled: { backgroundColor: colors.disabled },
  buttonPressed: { opacity: 0.86 },
  buttonText: { ...typography.button, color: colors.surface },
  buttonTextDisabled: { color: colors.disabledText },
});
