import React, { ReactNode } from 'react'

import Nav from './Nav'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default Layout
