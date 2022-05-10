import React from 'react'
import Nav from '../Nav'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}

export default Layout
