const next = require('next')
const compression = require('compression') 
const express = require('express')
const spdy = require('spdy');
const routes = require('./routes')
const url = require('url')
const path = require('path')

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
    app.render(req, res, route.page, query)
})

app.prepare()
    .then(() => {
        const server = express()
        
        server.use(compression())
        
        server.get('*', (req, res) => {
            if (req) {
                const parsedUrl = url.parse(req.url, true)
                const { pathname } = parsedUrl
                
                if (pathname === '/service-worker.js') {
                    const filePath = path.resolve('.next')
                    res.sendFile('service-worker.js', {root: filePath})
                }
                else {
                    return handler(req, res)
                }
            }
        })

        server.get('/story/:id', (req, res, query) => {
            const actualPage = '/story'
            const queryParams = { id: query.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/*', (req, res) => {
            return handler(req, res)
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