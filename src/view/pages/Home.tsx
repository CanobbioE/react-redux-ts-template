import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../stores/store'
import home from '../../constants/i18n/home'
import { SupportedLanguages } from '../../constants/i18n'
import { LanguageSelectors } from '../../stores/language/selectors'
import LanguageBtn from '../components/LanguageBtn'
import { LanguageActions } from '../../stores/language/actions'

const mapState = (state: RootState) => ({
  language: LanguageSelectors.selectLanguage(state)
})
const mapDispatch = {
  setLanguage: LanguageActions.setLanguage
}
const connector = connect(mapState, mapDispatch)
type HomeProps = ConnectedProps<typeof connector>

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { language, setLanguage } = props

  const description = <em>{home[language].HOME_DESCRIPTION}</em>

  return (
    <div>
      <div>{description}</div>
      <div>
        {[SupportedLanguages.EN, SupportedLanguages.IT].map((lang) => (
          <LanguageBtn key={lang} language={lang} onClick={(l: SupportedLanguages) => () => setLanguage(l)} />
        ))}
      </div>
    </div>
  )
}

export default connector(Home)
