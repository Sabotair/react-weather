import React from 'react'
import { Link } from 'react-router-dom'

import { Menu, Container, Image } from 'semantic-ui-react'

const MenuNavigation = () => {
  return (
    <Container>
      <Menu color="teal">
        <Link to={'/'}>
          <Menu.Item>
            <Image src="/logo.png" alt="logo" size="mini" />
          </Menu.Item>
        </Link>
      </Menu>
    </Container>
  )
}

export default MenuNavigation
