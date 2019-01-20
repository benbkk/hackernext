import React, { Component, createContext, createRef } from 'react'
import { smoothScroll } from 'utils'
import Layout from 'components/Layout'

const { Provider, Consumer } = createContext()

export class ScrollProvider extends Component {

  constructor(props) {
    super(props)
    this.myScroll = createRef()
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    
  }

  handleScroll = () => {
    console.log(window.scrollY);
  }

  handleScrollTop = (e) => {
    console.log(e.target)
    // console.log(smoothScroll.scrollTo())
    // this.smoothScroll.scrollTo('top')
  }

  render() {

    
    return (
      <Provider
        value={{
          handleScroll: (e) => this.handleScroll(e),
          ref: this.myScroll,
        }}>
        <Layout ref={this.myRef} {...this.props}>
          {this.props.children}
        </Layout>
      </Provider>
    )
  }
}

export { Consumer as ScrollConsumer}