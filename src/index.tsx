import React from 'react'

import { Container } from './styles'

interface Props {
  show: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  color?: string
}

const MenuSwitcher = (props: Props) => {
  return (
    <Container
      className={`${props.show ? 'open' : ''}`}
      onClick={props.onClick}
      color={props.color}
    >
      <div className='burger-switcher' />
    </Container>
  )
}

export default MenuSwitcher
