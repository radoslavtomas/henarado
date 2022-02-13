import { Container, Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { en } from '../locales/en'
import { sk } from '../locales/sk'

export const Teaser = () => {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : sk

  return (
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hena & Rado | {t.headline}
      </Box>
    </Container>
  )
}
