'use client'
import { SessionProvider } from 'next-auth/react'

const ClientSession = ({ children }) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default ClientSession