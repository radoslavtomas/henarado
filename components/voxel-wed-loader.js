import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const WedSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const WedContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-100px', '-180px', '-180px']}
    mb={['-5px', '-15px', '-15px']}
    w={[280, 480, 480]}
    h={[280, 480, 480]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <WedContainer>
      <WedSpinner />
    </WedContainer>
  )
}

export default Loader
