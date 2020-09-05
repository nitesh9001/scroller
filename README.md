# scroller

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/scroller.svg)](https://www.npmjs.com/package/scroller) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @nitesh2020/scroller
```

## Usage

```jsx
import React, { Component } from 'react'

import {Scroller} from 'scroller'
// If you want to use animation then import css//
import 'scroller/dist/index.css'

class Example extends Component {
  var objectScroll={
      backgroundColor: 'backkground color of icon in hexa decimal' ,
      color: 'color of icon in hexa decimal',
      borderRadius: 'border radius of box',
      right: 'alignment from the right',
      onhover: 'color when mousehover',
      shadowColor: 'color of shadow ',
  }
  render() {
    return <Scroller {...objectScroll} />
  }
}
```

## License

MIT © [nitesh9001](https://github.com/nitesh9001)
