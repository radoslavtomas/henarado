import { useEffect } from 'react'
import Router from 'next/router'

const checkHash = () => {
  const cookie = document.cookie

  if (!cookie) return false

  const hash = document.cookie
    .split('; ')
    .find(row => row.startsWith('authHash'))
    .split('=')[1]

  if (hash && ['-270901830', '191995071', '-270901278'].includes(hash)) {
    return true
  }
}

const AuthMiddleware = () => {
  useEffect(() => {
    if (!checkHash()) {
      Router.push('/login')
    }
  }, [])
  return null
}

export default AuthMiddleware
