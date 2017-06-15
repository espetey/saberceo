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
    const insiders = $('a:contains("insider transactions")')
    // console.log(insiders)
    const insider = insiders[0]
    const insiderHrefUrl = `${URL_ROOT}${insider.attribs.href}`
    // console.log(insiderHrefUrl)

    request(insiderHrefUrl, (err, res, body1) => {
      if (body) {
        const $1 = cheerio.load(body1)
        const dest = $1('html body div table').children().first().children().last().children().first().children().first().children().first().children().last().children().last().children().last().children().last().children()
        dest.splice(0, 1)
        // console.log(dest)
        dest.each((d, i) => {
          const $some = cheerio.load(i)
          // console.log(some.html())
          // console.log('\n')
          const someTd = $some('td a')
          // console.log(someTd.children().text())
          // console.log(someTd.first())
          someTd.each((x, y) => {
            // console.log(y.attribs.href)
            // console.log(x)
            if (x === 0) {
              const ownerUrl = `${URL_ROOT}${y.attribs.href}`
              console.log('owner URL: ' + ownerUrl)
              request(ownerUrl, (err, res, body2) => {
                const $2 = cheerio.load(body2);
                const issuers = $2('table:contains("Issuer")')
                console.log(issuers.text())
                console.log('---\n')
              })
            }
          })
        })
      }
    })

    // /html/body/div/table[1]/tbody/tr[2]/td/table/tbody/tr[4]/td/table/tbody/tr[2]


  }
})