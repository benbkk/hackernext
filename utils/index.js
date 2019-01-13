import moment from 'moment'

export const slugify = (myText) => (
    myText.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '')             // Trim - from end of text
)

export const getDate = (timeStamp) => {
    let postDate
    if (timeStamp) {
        postDate = new Date(timeStamp)
        postDate = moment.unix(timeStamp).format('dddd, LL')
        return postDate
    }
}