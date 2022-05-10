import React from 'react'
import Button from '../Button'
import Search from '../Search'

type NavProps = {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav className="flex w-full justify-center">
      <div className="flex w-full max-w-6xl items-center justify-center gap-6 py-4">
        <div className="pl-6 font-mono font-bold md:text-xl">
          Color Hunter😋
        </div>
        <Search />
        <div className="font-mono font-bold md:text-xl">
          <Button />
        </div>
        <div className="pr-6 font-mono md:text-xl">•••</div>
      </div>
    </nav>
  )
}

export default Nav
