import { SupportedLanguages } from '../../constants/i18n'
import Action from '../Action'

export const SET_LANGUAGE = 'language.set'

const setLanguage = (language: SupportedLanguages) => Action.createDefault(SET_LANGUAGE, language)

export const LanguageActions = { setLanguage }
