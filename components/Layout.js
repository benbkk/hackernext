import Link from 'next/link'
import Router from 'next/router'
import { Container, Nav, Scroll } from './BasicComponents'


const Layout = props => {
    const { children, title, backButton, description } = props
    return (
        <>
            <Nav>
                {backButton && 
                    <button 
                        className='back-button' 
                        onClick={() => Router.back()}
                    >
                        &#x2b05;
                    </button>
                }
                <Link href="/">
                    <a>
                        <span className='main-title' style={{color: 'white'}}>{title}</span>
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