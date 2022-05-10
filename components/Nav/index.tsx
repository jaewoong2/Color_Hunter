import React from 'react'
import Button from '../Button'
import Search from '../Search'

type NavProps = {
  title?: string
}

const GAP = 6

const Nav: React.FC<NavProps> = ({ title = 'Color Hunter😋' }) => {
  return (
    <nav className="flex w-full justify-center border-b">
      <section
        className={`flex w-full max-w-7xl items-center justify-center gap-${GAP} py-2`}
      >
        <h2 className={`pl-${GAP} font-mono font-bold md:text-xl`}>{title}</h2>
        <form className="w-full max-w-screen-md">
          <Search />
        </form>
        <form className="w-full max-w-[150px] font-mono text-sm font-bold ">
          <Button>Add To Chrome</Button>
        </form>
        <div className={`pr-${GAP} font-mono md:text-xl`}>•••</div>
      </section>
    </nav>
  )
}

export default Nav
