import { SupportedLanguages } from '../../constants/i18n'
import { DefaultAction } from '../Action'
import { SET_LANGUAGE } from './actions'

interface LanguageState {
  language: string
}

const INITIAL_STATE: LanguageState = {
  language: localStorage.getItem('language') ?? SupportedLanguages.EN
}

export const LanguageReducer = (state = INITIAL_STATE, action: DefaultAction<SupportedLanguages>) => {
  if (action.type === SET_LANGUAGE) {
    localStorage.setItem('language', action.payload ?? SupportedLanguages.EN)
    return { ...state, language: action.payload ?? SupportedLanguages.EN }
  }

  return { ...INITIAL_STATE, ...state }
}
