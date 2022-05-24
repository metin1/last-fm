import React from 'react'
import styled from 'styled-components'

import Text from 'src/components/Text/Text'

import { LinkProps } from './types'

const getExternalLinkProps = (): { target: string; rel: string } => ({
  target: '_blank',
  rel: 'noreferrer noopener',
})

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  color: ${({ theme, color }) => theme.colors[color]};
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
  }
`

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {}
  return <StyledLink as='a' bold {...internalProps} {...props} />
}

Link.defaultProps = {
  color: 'primary',
}

export default Link
