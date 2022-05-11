import React, { useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'

type TextProps = {
  icon?: JSX.Element | React.ReactNode | React.ReactElement
  size?: 'sm' | 'md' | 'lg' | string
} & React.HtmlHTMLAttributes<HTMLElement>

const Text: React.FC<TextProps> = ({
  children,
  size,
  icon = <BiCheck />,
  ...props
}) => {
  const [fontStyle, setFontStyle] = useState('')

  useEffect(() => {
    setFontStyle(() => {
      switch (size) {
        case 'sm':
          return 'text-sm'
        case 'md':
          return 'text-base'
        case 'lg':
          return 'text-lg'
        default:
          return `text-${size}`
      }
    })
  }, [size])

  return (
    <div {...props}>
      {icon}
      <div className={fontStyle}>{children}</div>
    </div>
  )
}

export default Text
