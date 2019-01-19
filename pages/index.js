import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Link from 'next/link'
import Layout from '../components/Layout'
import StoriesList from '../components/Stories'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Container, Footer, FooterNav } from 'components/BasicComponents'

const A = styled.a`
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid #ff6600;
    color: black;
    background: #ff6600;
    cursor: pointer;
    border-radius: 6px;
    font-size: 14px;
    font-family: 'Merriweather', serif;
    opacity: 0.9;
    transition: opacity 0.2s linear;


    &:hover,
    &:active {
        opacity: 1;
    }

    &:active {
        transform: translateY(1px);
    }
`

class Index extends React.Component {
    static async getInitialProps({req, res, query}) {
        let stories
        let page
        try {
            page = Number(query.page) || 1
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
            stories = await response.json()
            
        } catch (err) {
            console.log(err)
            stories = []
        }
        return { stories, page }
    }

    componentDidMount () {
        if('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker Registration Successful', registration)
                })
                .catch(err => {
                    console.warn('Service Worker Registration Failed', err.message)
                })
        }
    }

    render() {
        const { stories, page } = this.props
        if (!stories || stories && stories.length === 0) {
            return <Error statusCode={503} />
        }
        return (
            <>
            <Head>
                <title>HackerNext | The HackerNews on Next</title>
            </Head>
            <Layout title='HackerNews' backButton={false}>
                <StoriesList stories={stories} />
                <Footer>
                    <FooterNav>
                        <Link
                            as={`/page/${page+1}`}
                            href={`/?page=${page+1}`}>
                            <A>Next Page</A>
                        </Link>
                    </FooterNav>
                </Footer>
            </Layout>
        </>
        )
    }
}

export default Index