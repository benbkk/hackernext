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
    padding: 6px 16px;
    border: 2px solid #ff6600;
    cursor: pointer;
    border-radius: 4px;
    color: #FF6600;
    transition: background-color 0.2s linear;

    &:hover,
    &:active {
        background: #FF6600;
        color: white;
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
    render() {
        const { stories, page } = this.props
        if (stories.length === 0) {
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
                        <Link href={`/?page=${page + 1}`}>
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