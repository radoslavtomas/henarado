import { Center, Box } from '@chakra-ui/react'

const LoginError = ({ authError }) => {
  return authError ? (
    <Box mb={2} p={1} border="red 1px solid" borderRadius="md">
      <Center color="red">
        <p>{authError}</p>
      </Center>
    </Box>
  ) : (
    ''
  )
}

export default LoginError
