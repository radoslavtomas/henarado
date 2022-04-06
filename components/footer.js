import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box mt={6} align="center" opacity={0.6} fontSize="sm">
      &copy; {new Date().getFullYear()} Hena & Rado | 3D Model -{' '}
      <Link target="_blank" href="https://etienne2424.wixsite.com/alfie">
        Alfons Serrano Carpinell
      </Link>
    </Box>
  )
}

export default Footer
