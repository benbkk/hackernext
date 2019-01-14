 
import Link from 'next/link'
import { slugify } from '../utils'
import { css, jsx } from '@emotion/core'
import { lighten, transparentize, rem } from 'polished'
import moment from 'moment'
import { getDate } from 'utils'

const listItem = css`
    padding: 36px 0;
    cursor: pointer;
    border-bottom: 4px solid ${transparentize(0.9, 'black')};

    h2 { 
        margin: 9px 0; max-width: 80%;
        a {
            color: ${lighten(0.3, 'black')};
            &:hover {
                color:  #ff7301;
            }
        }
    }
`
const storyInfo = css`
    display: inline-block;
    font-size: ${rem('14px')};
    margin-right: ${rem('9px')};
`

const linkStyle = css`
    font-weight: 700;
    &:hover {
        color: #ff7301;
    }
`




const StoriesList = ({stories}) => (
        <ul>
        {stories.map(story => (
            <li key={story.id} className='story' css={listItem}>
                <h2 className='story-title'>
                    <Link 
                        href={`/story?id=${story.id}`}
                        as={`/story/${story.id}`}
                    >
                        <a>{story.title}</a>
                    </Link>
                </h2>
                <div className='story-details'>
                    <span css={storyInfo}><b>{story.points ? story.points : 0}</b> points</span>
                    <Link 
                        href={`/story?id=${story.id}`}
                    >
                        <span css={storyInfo}><b><a css={linkStyle}>{story.comments_count || 0} comments</a></b></span>
                    </Link>
                    <p style={{margin: 0}}><span css={storyInfo}>Posted on {`${getDate(story.time)}, `}<b>{`${story.time_ago}`}</b></span></p>  
                </div>
            </li>
        ))}
        </ul>
)

 export default StoriesList