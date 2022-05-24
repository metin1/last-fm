import React from 'react'

import { Link, LinkExternal } from './index'

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    fontSize: {
      name: 'fontSize',
      table: {
        type: { summary: 'string', detail: 'Fontsize in px or em' },
        defaultValue: { summary: '16px' },
      },
      control: {
        type: null,
      },
    },
  },
}

export const Default: React.FC = () => {
  return (
    <div>
      <div>
        <Link href='/'>Default</Link>
      </div>
      <div>
        <Link href='/' color='text'>
          Custom color
        </Link>
      </div>
      <div>
        <Link external href='/'>
          External
        </Link>
      </div>
      <div>
        <Link href='/'>
          With icon
          <svg
            clipRule='evenodd'
            fillRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit={2}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z'
              fillRule='nonzero'
            />
          </svg>
        </Link>
      </div>
      <div>
        <LinkExternal href='/'>LinkExternal</LinkExternal>
      </div>
    </div>
  )
}
