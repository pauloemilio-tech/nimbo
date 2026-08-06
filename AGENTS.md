# AGENTS.md

## Project overview

Nimbo is a cross-platform mobile application built with React Native, Expo and TypeScript.

The MVP combines a focus timer with a virtual cloud companion. Users complete focus sessions, earn drops and experience, interact with Nimbo and unlock visual progression.

The MVP must work on Android and iOS.

## Technical stack

- React Native
- Expo SDK 54
- Expo Router
- TypeScript
- React Context and useReducer
- AsyncStorage
- StyleSheet

## Development rules

- Use TypeScript strict mode.
- Do not use `any`.
- Keep code identifiers in English.
- Keep user-facing text in Brazilian Portuguese.
- Preserve compatibility with Expo Go on Android and iOS.
- Do not use platform-exclusive APIs without a compatible alternative.
- Avoid unnecessary dependencies.
- Do not add a backend during the MVP.
- Do not add authentication during the MVP.
- Do not add Redux or Zustand unless explicitly requested.
- Separate business rules from visual components.
- Prefer small and focused components.
- Avoid large components containing navigation, persistence and business logic together.
- Use `StyleSheet.create` for component styles.
- Respect safe areas and mobile accessibility.
- Avoid replacing working code without a clear reason.
- Do not modify unrelated files.
- Do not suppress TypeScript or lint errors.
- Do not install a package without explaining why it is necessary.

## Required validation

After code changes:

1. Run the project lint command.
2. Run a TypeScript check.
3. Report any errors.
4. List the files changed.
5. Explain how to test the change manually.

Recommended commands:

```bash
npm run lint
npx tsc --noEmit
```
