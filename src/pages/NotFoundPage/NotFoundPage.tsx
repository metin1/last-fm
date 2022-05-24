import React from 'react'
import { useTranslation } from 'react-i18next'

import Box from 'components/Box'
import Container from 'components/Container'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Box display='flex'>{t('page.NotFoundPage.title')}</Box>
    </Container>
  )
}

export default NotFoundPage
