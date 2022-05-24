import React from 'react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'

import Toggle from '../components/Toggle'

storiesOf('Toggle', module).add('default', () => {
  return <Toggle onClick={action('TOGGLE')}>Click this button</Toggle>
})
