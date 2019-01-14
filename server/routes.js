const routes = require('next-routes')

module.exports = routes()
    .add('/', 'index')
    .add('/page/:page', 'index')
    .add('/story/:id', 'story')