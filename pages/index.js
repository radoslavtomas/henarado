import NextLink from 'next/link'
import {
  Link,
  Center,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/page'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Countdown from '../components/countdown'
import { Teaser } from '../components/teaser'
import { useRouter } from 'next/router'
import { en } from '../locales/en'
import { sk } from '../locales/sk'

import AuthMiddleware from '../components/auth-middleware'

const Home = () => {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : sk

  return (
    <Layout title="Home">
      <AuthMiddleware />
      <Container maxW="container.md" mt={8}>
        <Teaser />
        <Box mb={6}>
          <Box textAlign="center">
            <Heading as="h2" variant="page-title">
              {t.home.title}
            </Heading>
            <p>{t.home.description}</p>
            <Countdown t={t} />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Center>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              // maxWidth="100px"
              display="inline-block"
              borderRadius="md"
              src="/images/hena-rado-weds.jpg"
              alt="Profile image"
            />
          </Center>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
