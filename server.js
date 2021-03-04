const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const postmark = require("postmark")
const bodyParser = require('body-parser')

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

  server.get('/sectors', (req, res) => {
    return app.render(req, res, '/sectors', req.query)
  })

  server.get('/sectors/schools', (req, res) => {
    return app.render(req, res, '/sectors/schools', req.query)
  })

  server.get('/sectors/factories-industrial', (req, res) => {
    return app.render(req, res, '/sectors/factories-industrial', req.query)
  })

  server.get('/sectors/offices', (req, res) => {
    return app.render(req, res, '/sectors/offices', req.query)
  })

  server.get('/sectors/retail-shops', (req, res) => {
    return app.render(req, res, '/sectors/retail-shops', req.query)
  })

  server.get('/services', (req, res) => {
    return app.render(req, res, '/services', req.query)
  })

  server.get('/services/painting', (req, res) => {
    return app.render(req, res, '/services/painting', req.query)
  })

  server.get('/services/decorative-coatings', (req, res) => {
    return app.render(req, res, '/services/decorative-coatings', req.query)
  })

  server.get('/services/protective-coatings', (req, res) => {
    return app.render(req, res, '/services/protective-coatings', req.query)
  })

  server.get('/services/internal-external-paint-spray', (req, res) => {
    return app.render(req, res, '/services/internal-external-paint-spray', req.query)
  })

  server.get('/services/cladding-restoration', (req, res) => {
    return app.render(req, res, '/services/cladding-restoration', req.query)
  })

  server.get('/services/rendering-plastering', (req, res) => {
    return app.render(req, res, '/services/rendering-plastering', req.query)
  })

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact', req.query)
  })

  server.post('/contact-me', (req, res) => {
    let client = new postmark.ServerClient(`${process.env.SERVER_TOKEN}`);
    
    client.sendEmail(
      {
        From: req.body.From,
        To: req.body.To,
        Subject: req.body.Name,
        HtmlBody: req.body.HtmlBody,
        ReplyTo: req.body.ReplyTo
      }
    ).then(response => {
      console.log('Sending message')
      console.log(response.To)
      console.log(response.Message)
      console.log(res.statusCode)
      return res.sendStatus(200)
    }).catch(error => {
      console.log(error)
      return res.sendStatus(500)
    })
  })

  server.get('/careers', (req, res) => {
    return app.render(req, res, '/careers', req.query)
  })

  server.get('/legal', (req, res) => {
    return app.render(req, res, '/legal', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})