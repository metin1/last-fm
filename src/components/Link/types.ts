import { AnchorHTMLAttributes } from 'react'

import { TextProps } from 'src/components/Text'

export interface LinkProps
  extends TextProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean
}
