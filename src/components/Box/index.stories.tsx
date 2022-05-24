import React from 'react'

import { Link } from 'src/components/Link'

import Box from './Box'

export default {
  title: 'Box Component',
  component: Box,
  argTypes: {},
}

export const BoxComponent: React.FC = () => {
  return (
    <div>
      <Box as='p'>
        Contains background, border, layout, position, and space from{' '}
        <Link href='https://styled-system.com/api' target='_blank'>
          Styled System&lsquo;s API
        </Link>
      </Box>
    </div>
  )
}
