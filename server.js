const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
  
  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.get('/testimonials', (req, res) => {
    return app.render(req, res, '/testimonials', req.query)
  })

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact', req.query)
  })

  server.get('/gallery', (req, res) => {
    return app.render(req, res, '/gallery', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})