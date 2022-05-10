import React from 'react'
import * as Styled from './styles'
import { BiSearch } from 'react-icons/bi'

type SearchProps = {
  icon?: React.ReactNode | React.ReactElement | JSX.Element
}

const Search: React.FC<SearchProps> = ({
  icon = <BiSearch width={'inherit'} />,
}) => {
  return (
    <Styled.Label className="flex w-full max-w-5xl items-center rounded-2xl border py-2 px-3">
      <span>{icon}</span>
      <Styled.Input className="w-full border-none px-2 outline-none" />
    </Styled.Label>
  )
}

export default Search
