import React from 'react'

type ListProps = {
  listItems: (JSX.Element | React.ReactElement | React.ReactNode | string)[]
} & React.HtmlHTMLAttributes<HTMLUListElement>

const List: React.FC<ListProps> = ({ listItems, ...props }) => {
  return (
    <ul {...props}>
      {listItems.map((item) => (
        <ListItem className="aside-li">{item}</ListItem>
      ))}
    </ul>
  )
}

export const ListItem: React.FC<
  {} & React.HtmlHTMLAttributes<HTMLLIElement>
> = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

export default List
