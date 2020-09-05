import React, { Component } from 'react'
import styles from './styles.module.css'

export default class Scroller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: props.backgroundColor,
      color: props.color,
      borderRadius: props.borderRadius,
      right: props.right,
      onhover: props.onHover,
      shadowColor: props.shadowColor,
      colorSustain: props.backgroundColor
    }
    this.changecolor = this.changecolor.bind(this)
    this.deColor = this.deColor.bind(this)
    this.scroll = this.scroll.bind(this)
  }

  scroll() {
    this.setState({
      backgroundColor: this.state.onhover
    })
    window.scrollTo(0, 0)
  }

  changecolor() {
    this.setState({
      backgroundColor: this.state.onhover
    })
  }

  deColor() {
    this.setState({
      backgroundColor: this.state.colorSustain
    })
  }

  render() {
    var styleScr = {
      hide: false,
      color: this.state.color,
      backgroundColor: this.state.backgroundColor,
      borderRadius: this.state.borderRadius,
      right: this.state.right,
      border: '0px solid black',
      fontSize: '30px',
      onhover: this.state.onHover,
      boxShadow: `3px 5px 5px ${this.state.shadowColor}`,
      width: '40px',
      position: 'fixed',
      bottom: '20px',
      height: '40px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: '.2s linear',
      zIndex: 1000000,
      padding: '0.0em 0.1em .2em .1em'
    }
    var action = {
      fontSize: '30px',
      color: this.state.color,
      fontWeight: '500',
      textShadow: '4px 2px 5px black',
      textAlign: 'center',
      verticalHeight: 'middle'
    }
    return (
      <div
        className={styles.scroller}
        style={styleScr}
        onClick={this.scroll}
        onMouseOver={this.changecolor}
        onMouseOut={this.deColor}
      >
        <span style={action} className={styles.animateicon}>
          &#8911;
        </span>
      </div>
    )
  }
}
