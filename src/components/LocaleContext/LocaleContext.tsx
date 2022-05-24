import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { LocaleContextProps } from './Locale.types'

const LocaleContext = createContext<LocaleContextProps>(
  {} as LocaleContextProps
)

export function useLocale() {
  return useContext(LocaleContext)
}

interface Props {
  locale?: string
  setLocale?: (locale: string) => void
}

const LocaleProvider: FunctionComponent<Props> = props => {
  const getLocale = (): string => {
    const storageLocale = sessionStorage.getItem('locale')
    return storageLocale != null ? storageLocale : 'en'
  }

  const [locale, setStateLocale] = useState<string>(getLocale())

  const setLocale = useCallback(
    (newLocale: string) => {
      sessionStorage.setItem('locale', newLocale)
      setStateLocale(newLocale)
    },
    [setStateLocale]
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [setLocale, locale]
  )

  return (
    <LocaleContext.Provider value={value}>
      {props.children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
