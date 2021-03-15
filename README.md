# react-og-hamburger-menu

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-og-hamburger-menu.svg)](https://www.npmjs.com/package/react-og-hamburger-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-og-hamburger-menu
```

## Usage

```tsx
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
```

## License

MIT © [odenirdev](https://github.com/odenirdev)
