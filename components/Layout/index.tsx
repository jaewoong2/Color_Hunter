import React from 'react'
import { BiAlarm, BiCalendar, BiHeart } from 'react-icons/bi'
import Aside from '../Aside'
import List from '../List'
import Nav from '../Nav'
import Text from '../Text'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-7xl justify-center">
          <Aside className="pl-6 font-mono xl:pl-12">
            <List
              className="flex w-fit flex-col items-center justify-center gap-2 border-b py-5 text-left text-xl text-gray-400"
              listItems={[
                <Text size="xl" className="flex items-center gap-2">
                  New
                </Text>,
                <Text
                  size="xl"
                  icon={<BiHeart />}
                  className="flex items-center gap-2 font-sans text-xl"
                >
                  Popluar
                </Text>,
                <Text
                  size="xl"
                  icon={<BiAlarm />}
                  className="flex items-center gap-2 font-sans"
                >
                  Random
                </Text>,
                <Text
                  size="xl"
                  icon={<BiCalendar />}
                  className="flex items-center gap-2 font-sans"
                >
                  Collection
                </Text>,
              ]}
            />
          </Aside>
          <main className="w-full p-4">{children}</main>
        </div>
      </section>
    </div>
  )
}

export default Layout
