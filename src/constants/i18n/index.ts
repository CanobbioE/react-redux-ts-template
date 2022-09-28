export enum SupportedLanguages {
  IT = 'IT',
  EN = 'EN',
}

export const FromString = (s: string): SupportedLanguages =>
  ({
    IT: SupportedLanguages.IT,
    EN: SupportedLanguages.EN
  }[s] ?? SupportedLanguages.EN)
