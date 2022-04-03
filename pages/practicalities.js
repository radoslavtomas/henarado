import NextLink from 'next/link'
import {
  Link,
  Center,
  Container,
  Heading,
  Box,
  Image,
  List,
  ListItem,
  UnorderedList,
  SimpleGrid,
  Button,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/page_simple'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { Teaser } from '../components/teaser'
import { useRouter } from 'next/router'
import { en } from '../locales/en'
import { sk } from '../locales/sk'

import AuthMiddleware from '../components/auth-middleware'

const Program = () => {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : sk

  const listItems = items => {
    return items.map((item, index) => {
      return (
        <ListItem key={index}>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </ListItem>
      )
    })
  }

  return (
    <Layout>
      <AuthMiddleware />
      <Container maxW="container.md" mt={8}>
        <Teaser />
        <Box mb={16}>
          <Box textAlign="center">
            <Heading as="h2" variant="page-title">
              {t.practicalities.title}
            </Heading>
            <p>{t.practicalities.description}</p>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.practicalities.dress}
          </Heading>
          <p>{t.practicalities.dress_desc}</p>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.practicalities.gethere}
          </Heading>
          <p>{t.practicalities.gethere_desc}</p>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.practicalities.weather}
          </Heading>
          <p>{t.practicalities.weather_desc}</p>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.practicalities.food}
          </Heading>
          <p>{t.practicalities.food_desc}</p>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.practicalities.gifts}
          </Heading>
          <p>{t.practicalities.gifts_desc}</p>
        </Section>
      </Container>
    </Layout>
  )
}

export default Program
