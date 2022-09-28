import { FromString, SupportedLanguages } from '../../constants/i18n'
import { RootState } from '../store'

const selectLanguage = (state: RootState): SupportedLanguages => FromString(state.i18n.language)

export const LanguageSelectors = { selectLanguage }
