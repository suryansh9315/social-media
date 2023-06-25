'use client'
import { RecoilRoot } from 'recoil'

const ClientRecoil = ({ children }) => {
  return (
    <RecoilRoot>{children}</RecoilRoot>
  )
}

export default ClientRecoil