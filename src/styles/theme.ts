import { DefaultTheme } from 'styled-components'

export const colors = {
  alert: 'red',
  background: 'green',
  grey: '#5e5e5e',
  primary: '#a0d5ff',
  lightGrey: '#a3a3a3',
  heading: '#E1EFFF',
  border: '#5e5e5e',
  card: '#185818',
  text: '#E1EFFF',
  footer: '#E1EFFF',
  link: '#1890ff',
  detail: '#83b03e',
  rate: '#1890ff',
  modes: {
    dark: {
      alert: 'red',
      primary: '#5e5e5e',
      background: '#092609',
      grey: '#5e5e5e',
      lightGrey: '#a3a3a3',
      heading: '#E1EFFF',
      border: '#5e5e5e',
      card: '#082c08',
      text: '#868e96',
      detail: '#42591f',
      footer: '#E1EFFF',
      link: '#1890ff',
      rate: '#1890ff',
    },
  },
}
export interface ITheme extends DefaultTheme {
  colors: typeof colors
  backgroundColor: typeof colors
  [key: string]: any
}

const theme: ITheme = {
  colors,
  backgroundColor: { ...colors },
  space: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128, 160], // 16px, 24px, 32px, 48px, 64px, 96px, 160px
  breakpoints: ['320px', '768px', '1024px', '1366px'],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 36],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: ['sans-serif', 'Roboto', 'Open Sans', 'Helvetica Neue'],
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  shadows: [0, 2, 4, 10, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
}

export default theme
