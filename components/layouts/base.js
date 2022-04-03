import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { useRouter } from 'next/router'
import { en } from '../../locales/en'
import { sk } from '../../locales/sk'

const LazyVoxelWed = dynamic(() => import('../voxel-wed'), {
  ssr: false,
  loading: () => <VoxelWedLoader />
})

const Main = ({ children, router }) => {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : sk

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hena&Rado" />
        <meta name="author" content="Radoslav Tomas" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Hena&Rado" />
        <meta property="og:type" content="website" />
        <title>Hena & Rado</title>
      </Head>

      <NavBar path={router.asPath} t={t} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
