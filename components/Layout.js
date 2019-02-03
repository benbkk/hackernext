import Link from 'next/link'
import Router from 'next/router'
import { Container, Nav, Scroll } from './BasicComponents'
import {css} from '@emotion/core'

const alignMiddle = css`
    display: inline-flex;
    align-items: center;
`

const Back = css`
    ${alignMiddle};
    background: white;
    box-shadow: none;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    padding: 6px 12px;
    display: inline-flex;
    align-self: center;
    &:active,
    &:focus {
        outline: none;
    }
    -webkit-appearance: none;
    -moz-appearance: none;

    &:active {
        transform: translateY(1px);
    }

    &:before {
        content: '';
        display: block;
        transform: translateX(-2px);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 8px 6px 0;
        border-color: transparent #000000 transparent transparent;
    }

    .sr-only {
        opacity: 0;
        width: 0;
        height: 0;
        overflow: hidden;
        position: absolute;
    }

    & + a {
        ${alignMiddle};
    }
` 


const Layout = props => {
    const { children, title, backButton, description, scrollRef } = props
    return (
        <>
            <Nav>
                {backButton && 
                    <button
                        css={Back}
                        className='back-button' 
                        onClick={() => Router.back()}
                    >
                        <span className='sr-only'>Back to Previous Page</span>
                    </button>
                }
                <Link href="/">
                    <a>
                        <span className='main-title' style={{color: 'black', fontFamily: `'Merriweather', serif`}}>{title}</span>
                    </a>
                </Link>
            </Nav>
            <main ref={scrollRef}>
               <Container>
                    {children}
                </Container>
            </main>
        </>
    )
}

Layout.defaultProps = {
    title: 'HackerNews'
}

export default Layout