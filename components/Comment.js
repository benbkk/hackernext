import React, { Component } from 'react'
import parseContent from 'html-react-parser'
import { Highlight } from 'css/Highlight'
import { css, jsx } from '@emotion/core'
import { lighten, rem, transparentize } from 'polished'

import parseThis from 'html-react-parser'
import Prism from 'prismjs'
import CommentsList from 'components/CommentsList'

const listStyle = css`
    word-break: break-word;

    &.level-0 {
        padding-bottom: 36px;
        margin-top: 36px;
        border-bottom: 8px solid ${transparentize(0.9, 'black')};
    }
    
`
const userStyle = css`
    display: inline-block;
    margin-top: 6px;
    margin-bottom: 18px;
    margin-right: 10px;
    font-size: ${rem('14px')};
    span {
        display: inherit;
    }
`

const commentStyles = css`
    padding: 2px 18px;
    font-size: ${rem('16px')};
    margin-bottom: 0;
    margin-top: 9px;

    &.level-0 {
        background: ${lighten(0.40, '#3399cc')};
    }

    &.level-1 {
        background: ${lighten(0.41, '#3399cc')};
    }

    &.level-2 {
        background: ${lighten(0.42, '#3399cc')};
    }

    &.level-3 {
        background: ${lighten(0.43, '#3399cc')};
    }

    &.level-4 {
        background: ${lighten(0.44, '#3399cc')};
    }

    &.level-5 {
        background: ${lighten(0.45, '#3399cc')};
    }

     &.level-6 {
        background: ${lighten(0.46, '#3399cc')};
    }
     &.level-7 {
        background: ${lighten(0.47, '#3399cc')};
    }
    &.level-8 {
        background: ${lighten(0.48, '#3399cc')};
    }
`

class Comment extends Component {
    state = {
        content: ''
    }

    componentDidMount() {
        const { comment } = this.props
        const content = comment.content

        this.setState({
            content
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.content !== this.state.content) {
            Prism.highlightAll()
        }
    }

    render () {
        const { content } = this.state
        const { comment } = this.props
        return (
            <li className={`comment level-${comment.level}`} css={listStyle}>
                <div className={`comment-content level-${comment.level}`} css={commentStyles}>
                    {parseThis(content)}
                </div>
                <span className='comment-user' css={userStyle}>
                    <b>{comment.user}</b>
                </span>
                <span className='commented-on' css={userStyle}>{comment.time_ago}</span>
                {comment.comments.length > 0 &&
                    <CommentsList
                        comments={comment.comments}
                    />
                }
            </li>    
            )
    }
}

export default Comment