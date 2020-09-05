# scroller

> Scoller UI and Scroll to top function 

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
      backgroundColor: 'blue' ,
      color: 'white',
      borderRadius: '40',
      right: '30',
      onhover: 'orange',
      shadowColor: 'black',
  }
  render() {
    return <Scroller {...objectScroll} />
  }
}
```
## DataType
 ```
/-----------------------------------------------------------------------------------------------------------\
|                     |                                                 |                                   |
|     Prop Name       |                     Use                         |               Type                |
|_____________________|_________________________________________________|___________________________________|
| backgroundColor     |   Add background Color to scrollTop btn         |  hex, rbga , rbg , name           |
| color               |   Define color for arrow in scrollTop btn       |  hex, rbga , rbg , name           |
| shadowColor         |   Define color of sahdow in scrollTop btn       |  hex, rbga , rbg , name           |
| onHover             |   Define color on mouse hover on scrollTop btn  |  hex, rbga , rbg , name           |
| right               |   Give indentation from right side (in px)      |  numeric value                    |
| borderRadius        |   Provide border radius to button  (in px)      |  numeric value                    |
\-----------------------------------------------------------------------------------------------------------/
 ```
## License

MIT © [nitesh9001](https://github.com/nitesh9001)
