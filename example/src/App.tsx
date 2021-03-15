import React, { useState } from 'react'

import MenuSwitcher from 'react-og-hamburger-menu'

import './styles.css'

const App = () => {
  const [show, setShow] = useState(false)

  function handleMenuSwitcherClick() {
    setShow(!show)
  }

  return <MenuSwitcher {...{ show }} onClick={handleMenuSwitcherClick} />
}

export default App
