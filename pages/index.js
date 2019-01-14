import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Link from 'next/link'
import Layout from '../components/Layout'
import StoriesList from '../components/Stories'
import Head from 'next/head'
import { Container, Footer } from 'components/BasicComponents'


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
                    <Link href={`/?page=${page + 1}`}>
                        <button>Next Page</button>
                    </Link>
                </Footer>
            </Layout>
            </>

        )
    }
}

export default Index