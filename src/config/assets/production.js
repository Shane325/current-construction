'use strict'

let stylesheet = require('./../../../public/dist/rev-manifest.json')['stylesheet.css']
let bundle = require('./../../../public/dist/rev-manifest.json')['bundle.js']

module.exports = {
  lib: {
    css: [
      `/dist/css/${stylesheet}`
    ],
    js: [
      `/dist/js/${bundle}`
    ]
  }
}
