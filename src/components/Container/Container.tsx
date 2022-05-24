import React from 'react'

import { DesignSystemProps } from 'src/styles/styled'

import Box from 'components/Box'

export type IContainerProps = DesignSystemProps & {
  id?: string
  color?: string
  maxWidth?: string
  children: string | React.ReactNode
}

const Container = (props: IContainerProps) => {
  return (
    <Box bg='background'>
      <Box
        width='100%'
        minHeight='calc(100vh - 126px)'
        maxWidth={props.maxWidth}
        mx='auto'
        display='flex'
        flexDirection='column'
        borderRadius={2}
        {...props}
      />
    </Box>
  )
}

Container.defaultProps = {
  maxWidth: '1600',
}

export default Container
