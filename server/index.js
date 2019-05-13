require('dotenv').config()
// const { GMAIL_USER, GMAIL_PASSWORD } = process.env
const express = require('express');
const { json } = require('express')
// const nodemailer = require('nodemailer')
const expressStaticGzip = require('express-static-gzip')
// const sm = require('sitemap')
// const fs = require('fs')

const app = express();
const path = require('path')
app.use(express.static(`${__dirname}/../build`))
app.use(`/build/client`, expressStaticGzip(`/build/client`, {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz'
  }],
  orderPreference: ['br', 'gz']
}));
app.use(json())

const port = 4000
app.listen(port, console.log('The server is running on port', port))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})