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
import { BiMap } from 'react-icons/bi'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Teaser } from '../components/teaser'
import AuthMiddleware from '../components/auth-middleware'
import { useRouter } from 'next/router'
import { en } from '../locales/en'
import { sk } from '../locales/sk'

const Venue = () => {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : sk

  return (
    <Layout>
      <AuthMiddleware />
      <Container maxW="container.md">
        <Teaser />
        <Box display={{ md: 'flex' }} mb={6}>
          <Box flexGrow={1}>
            <Center>
              <Heading as="h2" variant="page-title">
                {t.venue.title}
              </Heading>
            </Center>
            <Center>
              <BiMap />
              <p>{t.venue.description}</p>
            </Center>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid">
            <Center>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4396.05506111795!2d19.762055963002172!3d49.069345817907276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47159b4a5f7cb9db%3A0xfdff46afdd11c078!2sChata%20Alpine!5e0!3m2!1sen!2suk!4v1643380352882!5m2!1sen!2suk"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </Center>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Venue
