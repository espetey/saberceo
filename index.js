//https://www.sec.gov/cgi-bin/browse-edgar?CIK=BRKA&owner=exclude&action=getcompany

const express = require('express')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const app = express()

// app.get('/', (req, res) => {
//   url = 'https://www.sec.gov/cgi-bin/browse-edgar?CIK=BRKA&owner=exclude&action=getcompany'

//   request(url, (err, res, html) => {
//     if (err) {
//       res.send(err)
//     } else {
//       const $ = cheerio.load(html)
//       console.log($.html())
//       console.log(res)
//       res.json($.text)
//     }
//   })
// })

// app.listen('3000')
// console.log('SaberCEO listening on port 3000')
// exports = module.exports = app

// const url = 'https://www.sec.gov/cgi-bin/browse-edgar?CIK=BRKA&owner=exclude&action=getcompany'

const URL_ROOT = 'https://www.sec.gov'


const edgarCompanyUrl = `${URL_ROOT}/cgi-bin/browse-edgar?CIK=BRKA&owner=exclude&action=getcompany`

request(edgarCompanyUrl, (err, res, body) => {
  // console.log(err)
  // console.log(body)
  if (body) {
    const $ = cheerio.load(body)
    // console.log($.html())
    const insiders = $('a:contains("insider transactions")');
    // console.log(insiders)
    const insider = insiders[0]
    const insiderHref = `${URL_ROOT}${insider.attribs.href}`
    // console.log(insiderHref)

    

  }
  // console.log(arguments)
  // if (err) {
  //   res.send(err)
  // } else {
  //   const $ = cheerio.load(html)
  //   console.log($.html())
  //   const html = $.html()
  //   console.log(res)
  //   fs.writeFile('output.json', html)
  //   // res.json($.text)
  // }
})