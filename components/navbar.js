import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import LanguageToggle from './language-toggle'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={1}
        _hover={{ underline: 'none', color: 'pink.600' }}
        _focus={{ outline: 'none' }}
        borderBottom={active ? 'solid' : undefined}
        borderBottomColor={active ? inactiveColor : undefined}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const navItemsDestop = items => {
  return items.map(item => {
    return (
      <LinkItem href={item.url} key={item.title}>
        {item.title}
      </LinkItem>
    )
  })
}

const navItemsMobile = items => {
  return items.map(item => {
    return (
      <NextLink href={item.url} key={item.title} passHref>
        <MenuItem as={Link}>{item.title}</MenuItem>
      </NextLink>
    )
  })
}

const Navbar = props => {
  const { path, t } = props

  const isNotLoginPage = path !== '/login'

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        {isNotLoginPage && (
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            {navItemsDestop(t.navbar)}
            {/* <LinkItem href="/" path={path}>
            {t.navbar.home}
          </LinkItem>
          <LinkItem href="/venue" path={path}>
            {t.navbar.venue}
          </LinkItem>
          <LinkItem href="/plan" path={path}>
            {t.navbar.plan}
          </LinkItem> */}
          </Stack>
        )}
        <Flex flex={1} justifyContent="end" alignItems="center">
          <LanguageToggle />
          <ThemeToggleButton />

          {isNotLoginPage && (
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  {navItemsMobile(t.navbar)}
                  {/* <NextLink href="/" passHref>
                  <MenuItem as={Link}>{t.navbar.home}</MenuItem>
                </NextLink>
                <NextLink href="/venue" passHref>
                  <MenuItem as={Link}>{t.navbar.venue}</MenuItem>
                </NextLink>
                <NextLink href="/plan" passHref>
                  <MenuItem as={Link}>{t.navbar.plan}</MenuItem>
                </NextLink> */}
                </MenuList>
              </Menu>
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
