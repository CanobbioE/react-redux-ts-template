import React from 'react'
import { SupportedLanguages } from '../../constants/i18n'

interface LanguageBtnProps {
  language: SupportedLanguages
  onClick: (l: SupportedLanguages) => React.MouseEventHandler
}
const LanguageBtn: React.FC<LanguageBtnProps> = (props: LanguageBtnProps) => <button onClick={props.onClick(props.language)}>{props.language}</button>

export default LanguageBtn
