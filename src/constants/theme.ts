export const colors = {
  sky: '#EAF7FF',
  skyStrong: '#CDEEFF',
  cloud: '#F8FCFF',
  surface: '#FFFFFF',
  primary: '#2878A8',
  primarySoft: '#D8F0FC',
  text: '#17344A',
  textMuted: '#587184',
  accent: '#F8D978',
  border: '#C9E2F0',
  disabled: '#D9E3E9',
  disabledText: '#7B8C97',
} as const;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 } as const;

export const radii = { sm: 10, md: 16, lg: 22, xl: 30, full: 999 } as const;

export const typography = {
  title: { fontSize: 32, lineHeight: 39, fontWeight: '700' },
  subtitle: { fontSize: 20, lineHeight: 26, fontWeight: '700' },
  body: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  button: { fontSize: 16, lineHeight: 22, fontWeight: '700' },
  caption: { fontSize: 12, lineHeight: 17, fontWeight: '700', letterSpacing: 0.6 },
} as const;
