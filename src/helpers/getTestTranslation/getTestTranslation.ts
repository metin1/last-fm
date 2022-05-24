import { screen } from '@testing-library/react'
import { get, trim } from 'lodash'

import languageObj from 'src/locales/en/main.json'

const getTestTranslation = (key: string) => {
  return screen.getByText(trim(get(languageObj, key)))
}

export default getTestTranslation
