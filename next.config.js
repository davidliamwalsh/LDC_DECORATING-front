const withSass = require('@zeit/next-sass')

require("dotenv").config()

module.exports = withSass({
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    GRAPHQL_URL: process.env.GRAPHQL_URL
  }
})