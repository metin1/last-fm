import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import get from 'lodash/get'
import merge from 'lodash/merge'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import theme from 'src/styles/theme'

import { ThemeContextProps } from './Theme.types'

const modes = ['light', 'dark']

const getTheme = (mode: any) =>
  merge({}, theme, {
    colors: get(theme.colors.modes, mode, theme.colors),
  })

const ThemeContext = createContext({} as ThemeContextProps)

export function useTheme() {
  return useContext(ThemeContext)
}

interface Props {
  children: React.ReactNode
}

const ThemeProvider: FunctionComponent<Props> = props => {
  const [mode, setMode] = useState(modes[0])

  const selectedTheme = getTheme(mode)

  const changeTheme = useCallback(() => {
    setMode(mode === modes[0] ? modes[1] : modes[0])
  }, [mode])

  const value = useMemo(
    () => ({
      mode,
      changeTheme,
    }),
    [mode, changeTheme]
  )

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={selectedTheme}>
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
