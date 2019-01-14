const routes = require('next-routes')

module.exports = routes()
    .add('home', '/', 'index')
    .add('story', '/story/:id', 'story')