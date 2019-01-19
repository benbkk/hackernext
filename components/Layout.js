import Link from 'next/link'
import Router from 'next/router'
import { Container, Nav, Scroll } from './BasicComponents'
import {css} from '@emotion/core'

const Back = css`
    background: white;
    box-shadow: none;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    &:active,
    &:focus {
        outline: none;
    }

    &:active {
        transform: translateY(1px);
    }
` 


const Layout = props => {
    const { children, title, backButton, description } = props
    return (
        <>
            <Nav>
                {backButton && 
                    <button
                        css={Back}
                        className='back-button' 
                        onClick={() => Router.back()}
                    >
                        &#x2b05;
                    </button>
                }
                <Link href="/">
                    <a>
                        <span className='main-title' style={{color: 'black', fontFamily: `'Merriweather', serif`}}>{title}</span>
                    </a>
                </Link>
            </Nav>
            <main>
                <Scroll>
                    <Container>
                        {children}
                    </Container>
                </Scroll>
            </main>
        </>
    )
}

Layout.defaultProps = {
    title: 'HackerNews'
}

export default Layout