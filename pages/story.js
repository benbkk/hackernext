import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Layout from '../components/Layout'
import CommentsList from '../components/CommentsList'
import { Container } from 'components/BasicComponents'
import Head from 'next/head'
import { css, jsx } from '@emotion/core'
import { rem } from 'polished'
import moment from 'moment'
import { getDate } from 'utils'
import { slugify } from '../utils';

const storyInfo = css`
    display: inline-block;
    font-size: ${rem('16px')};
    margin-right: ${rem('9px')};
`

const storyTitle = css`
    font-size: 1.8rem;
    width: 100%;
    @media (min-width: 557px) {
        width: 80%;
        font-size: 2.5rem;
    }
`

class Story extends React.Component {
    static async getInitialProps ({req, res, query}) {
        let story
        try {
            const storyId = query.id
            let response
            try {
                response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
                story = await response.json()
            } catch {
                res.writeHead(302, {
                    Location: '/'
                })
                res.end()
            }
        } catch (err) {
            console.log(err)
        }

        return { 
            story
        }
    }

    state = {
        isLoading: false
    }

    componentDidMount () {
        const { story } = this.props
        if (story) {
            this.setState({
                isLoading: true
            })
        }
    }

    render () {
        const { story } = this.props
        const comments = story && story.comments

        if (!story) {
            return <Error statusCode={503} />
        }
        return (
            <>
                <Head>
                    <title>{story.title} | HackerNext</title>
                </Head>
                <Layout backButton={true}>
                    <h1 className='story-title' css={storyTitle}>
                        <a href={story.url} target='_blank'>{story.title}</a>
                    </h1>
                    <div className='story-details'>
                        <span css={storyInfo}><b>{story.points || 0}</b> points</span>
                        <span css={storyInfo}><b>{story.comments_count}</b> comments</span>
                        <p style={{margin: '5px 0'}}><span css={storyInfo}>Posted on {`${getDate(story.time)}, `}<b>{`${story.time_ago}`}</b></span></p> 
                        
                        
                    </div>
                        {!story.comments && <p>No Comments</p>}
                        
                        {story.comments_count <= 0
                        ? <p>No comments yet.</p>
                        : story.comments.length === 0
                            ? <p>Loading Comments...</p>
                            : <CommentsList comments={comments} />
                        }
                </Layout>
            </>
        )
    }
}

export default Story