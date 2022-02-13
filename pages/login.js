import NextLink from 'next/link'
import {
  Link,
  Center,
  Container,
  Heading,
  Box,
  Input,
  Image,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import LoginError from '../components/loginError'

import { useRouter } from 'next/router'
import { en } from '../locales/en'
import { sk } from '../locales/sk'
import { useState } from 'react'

const Login = () => {
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')

  const { locale, push } = useRouter()
  const t = locale === 'en' ? en : sk

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleForm = event => {
    event.preventDefault()
    if (!password) {
      alert(t.login.password_validation)
    }

    setAuthCookie()

    if (validatePassword()) push('/')
  }

  const hashString = s => {
    return s.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0)
      return a & a
    }, 0)
  }

  const setAuthCookie = () => {
    const pass = hashString(password)
    console.log(pass)
    document.cookie = `authHash=${pass}; SameSite=Lax; MaxAge=${
      60 * 60 * 24 * 30
    } Secure`
  }

  const validatePassword = () => {
    const cookie = document.cookie

    if (!cookie) return

    const hash = document.cookie
      .split('; ')
      .find(row => row.startsWith('authHash'))
      .split('=')[1]

    if (!['-270901830', '191995071', '-270901278'].includes(hash)) {
      setAuthError(t.login.auth_error)
      return false
    }

    setAuthError('')
    return true
  }

  return (
    <Layout>
      <Container maxW="container.md">
        <Box display={{ md: 'flex' }} mb={6}>
          <Box flexGrow={1}>
            <Center>
              <Heading as="h2" variant="page-title" textAlign="center">
                {t.login.title}
              </Heading>
            </Center>
            <Center>
              <p textAlign="center">{t.login.description}</p>
            </Center>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Box maxW="350px" mx="auto">
            <LoginError authError={authError} />
            <form onSubmit={handleForm}>
              <Input
                id="password"
                autoFocus
                type="password"
                placeholder={t.login.password}
                backgroundColor="white"
                textAlign="center"
                value={password}
                onChange={handlePassword}
              />

              <Button
                type="submit"
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                variant="solid"
                w="100%"
                mt={2}
              >
                {t.login.login}
              </Button>
            </form>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Center>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              // maxWidth="100px"
              display="inline-block"
              borderRadius="md"
              src="/images/login.jpg"
              alt="Login picture"
            />
          </Center>
        </Section>
      </Container>
    </Layout>
  )
}

export default Login
