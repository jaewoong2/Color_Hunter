import React, { ButtonHTMLAttributes } from 'react'
import * as Styled from './styles'
import { FiChrome } from 'react-icons/fi'

type ButtonProps = {
  leftIcon?: React.ReactNode | React.ReactElement | JSX.Element
  onClickWrapper?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClickWrapper,
      leftIcon = <FiChrome className="h-4 w-4" />,
      ...props
    },
    ref
  ) => {
    return (
      <Styled.ButtonWrapper
        onClick={onClickWrapper}
        className="flex w-full cursor-pointer items-center justify-around gap-1 rounded-md border py-2 px-1"
      >
        {leftIcon}
        <Styled.Button ref={ref} {...props}>
          {children}
        </Styled.Button>
      </Styled.ButtonWrapper>
    )
  }
)

export default Button
