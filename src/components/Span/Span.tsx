import styled from 'styled-components'
import {} from 'styled-components/cssprop'

import {
  background,
  border,
  color,
  DesignSystemProps,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'src/styles/styled'

export type SpanProps = DesignSystemProps & {
  disabled?: string
  css?: string
  cursor?: string
  textDecoration?: string
  wordBreak?:
    | 'normal'
    | 'break-word'
    | 'break-all'
    | 'keep-all'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset;'
}

const Span = styled.span<SpanProps>`
  ${layout}
  ${space}
  ${color}
  ${background}
  ${grid}
  ${layout}
  ${border}
  ${flexbox}
  ${typography}
  ${position}
  ${shadow} {
    disabled: ${props => props.disabled};
    cursor: ${props => props.cursor};
    text-decoration: ${props => props.textDecoration};
    word-break: ${props => props.wordBreak};
    ${props => props.css};
  }
`

Span.displayName = 'Span'

export default Span
