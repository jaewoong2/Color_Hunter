import React from 'react'
import Aside from '../Aside'
import Nav from '../Nav'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-7xl justify-center">
          <Aside className="pl-6 font-mono xl:pl-12">
            <ul className="flex w-fit flex-col items-center justify-center gap-2 border-b py-5 text-left text-xl text-gray-400">
              <li className="aside-li">
                <strong>New</strong>
              </li>
              <li className="aside-li">
                <strong>Popluar</strong>
              </li>
              <li className="aside-li">
                <strong>Random</strong>
              </li>
              <li className="aside-li">
                <strong>Collection</strong>
              </li>
            </ul>
          </Aside>
          <main className="w-full">{children}</main>
        </div>
      </section>
    </div>
  )
}

export default Layout
