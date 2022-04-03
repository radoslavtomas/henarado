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
              {t.plan.title}
            </Heading>
            <p>{t.plan.description}</p>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.plan.friday}
          </Heading>
          <UnorderedList>{listItems(t.plan.friday_plan)}</UnorderedList>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.plan.saturday}
          </Heading>
          <UnorderedList>{listItems(t.plan.saturday_plan)}</UnorderedList>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.plan.sunday}
          </Heading>
          <UnorderedList>{listItems(t.plan.sunday_plan)}</UnorderedList>
        </Section>
      </Container>
    </Layout>
  )
}

export default Program
