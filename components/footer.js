import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Hena & Rado | 3D Art - Alfons Serrano Carpinell
    </Box>
  )
}

export default Footer
