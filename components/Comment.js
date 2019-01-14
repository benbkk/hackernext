import React, { Component } from 'react'
import parseContent from 'html-react-parser'
import { css, jsx } from '@emotion/core'
import { lighten, rem, transparentize } from 'polished'

import parseThis from 'html-react-parser'
import CommentsList from 'components/CommentsList'

const listStyle = css`
    word-break: break-word;

    code {
        display: contents;
        white-space: pre-line;
    }

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
    font-size: ${rem('14px')};
    span {
        display: inherit;
    }

    &.comment-user:after {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        display: inline-block;
        border-width: 28px 28px 0 0;
        margin: -20px 0 0 16px;
        transform: rotate(15deg);
        border-color: ${lighten(0.40, '#3399cc')} transparent transparent transparent;
    }
`

const commentStyles = css`
    padding: 2px 18px;
    font-size: ${rem('16px')};
    margin-bottom: 0;
    margin-top: 9px;
    background: ${lighten(0.40, '#3399cc')};
`

class Comment extends Component {
    state = {
        content: null,
        isLoading: true,
    }

    componentDidMount() {
        const { comment } = this.props
        const content = comment && parseThis(comment.content)

        this.setState({
            content,
            isLoading: false,
        })
    }

    render () {
        const { content, isLoading } = this.state
        const { comment } = this.props
        return (
            <>
                {!content
                ? ''
                : (
                    <li className={`comment level-${comment.level}`} css={listStyle}>
                        <div className={`comment-content level-${comment.level}`} css={commentStyles}>
                            {content}
                        </div>
                        <span className='comment-user' css={userStyle}><b>{comment.user}</b></span>
                        <span className='commented-on' css={userStyle}>{comment.time_ago}</span>
                        {comment.comments.length > 0 &&
                            <CommentsList
                                comments={comment.comments}
                            />
                        }
                    </li>
                )
                }
            </>
            
        )
    }
}

export default Comment