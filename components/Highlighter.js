import React, { Component, createRef } from 'react'
import Prism from 'prismjs'
import { Highlight } from 'css/Highlight'

class Highlighter extends Component {
    constructor (props) {
        super (props)

        this.myCode = createRef
    }
    componentDidMount () {
        Prism.highlightAll()
    }

    render () {
        return (
            <pre ref={myCode} styles={Highlight}>
                <code className='language-javascript language-react-jsx language-css language-html'>
                    {this.props.children}
                </code>
            </pre>
        )
    }
}

export default Highlighter
