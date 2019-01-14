const next = require('next')
const express = require('express')
const routes = require('./routes')

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
    app.render(req, res, route.page, query)
})

app.prepare()
    .then(() => {
        const server = express()
        
        server.get('*', (req, res) => {
            return handler(req, res)
        })

        server.get('/story/:id', (req, res, query) => {
            const actualPage = '/story'
            const queryParams = { id: query.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.listen(3000, err => {
            if(err) throw err
            console.log('> Ready on http://localhost:3000')
        })
})
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })