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

const storyInfo = css`
    display: inline-block;
    font-size: ${rem('16px')};
    margin-right: ${rem('9px')};
`

class Story extends React.Component {
    static async getInitialProps ({req, res, query}) {
        let story
        try {
            const storyId = query.id

            const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
            story = await response.json()
        } catch (err) {
            console.log(err)
            story = null
        }

        return { story }
    }

    state = {
        comments: []
    }

    componentDidMount() {
        const { story } = this.props
        const comments = story.comments
        this.setState({
            comments
        })
    }


    render () {
        const { comments } = this.state
        const { story } = this.props 

        if (!story) {
            return <Error statusCode={503} />
        }
        console.log(story)
        return (
            <>
                <Head>
                    <title>{story.title} | HackerNext</title>
                </Head>
                <Layout backButton={true}>
                    <h1 className='story-title' style={{maxWidth: '80%'}}>
                        <a href={story.url} target='_blank'>{story.title}</a>
                    </h1>
                    <div className='story-details'>
                        <span css={storyInfo}><b>{story.points || 0}</b> points</span>
                        <span css={storyInfo}><b>{story.comments_count}</b> comments</span>
                        <p style={{margin: '5px 0'}}><span css={storyInfo}>Posted on {`${getDate(story.time)}, `}<b>{`${story.time_ago}`}</b></span></p> 
                        
                        
                    </div>
                        {story.comments_count <= 0
                        ? <p>No comments yet.</p>
                        : comments.length === 0
                            ? <p>Loading Comments...</p>
                            : <CommentsList comments={comments} />
                        }
                </Layout>
            </>
        )
    }
}

export default Story