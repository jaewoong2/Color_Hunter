import React from 'react'

type AsideProps = {} & React.HtmlHTMLAttributes<HTMLDivElement>

const Aside = React.forwardRef<HTMLDivElement, AsideProps>(
  ({ children, ...props }, ref) => {
    return (
      <aside ref={ref} {...props}>
        {children}
      </aside>
    )
  }
)

export default Aside
