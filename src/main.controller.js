'use strict'
/*
 * Module dependencies
 */
let path = require('path')
let _ = require('lodash')
let config = require('./config/config')
let homeConfig = require('./config/home')
let aboutConfig = require('./config/about')
let servicesConfig = require('./config/services')
let estimateConfig = require('./config/estimate')
let contactConfig = require('./config/contact')
let projectsConfig = require('./config/projects')
let projectConfig = require('./config/project')
let HttpStatus = require('http-status-codes')
let MAILGUN_API_KEY = config.mailgun.api_key
let MAILGUN_DOMAIN = config.mailgun.domain
let MAILGUN_EMAIL = config.mailgun.email
let mailgun = require('mailgun-js')({
  apiKey: MAILGUN_API_KEY,
  domain: MAILGUN_DOMAIN
})

/*
 * Return home page
 *
 * @returns - renders home page
 */
module.exports.getHome = (req, res) => {
  res.render('../views/pages/index', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: homeConfig.pageTitle,
    state: homeConfig.state,
    projects: projectsConfig.projects
  })
}

/*
 * Return about page
 *
 * @returns - renders about page
 */
module.exports.getAbout = (req, res) => {
  res.render('../views/pages/about', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: aboutConfig.pageTitle,
    state: aboutConfig.state,
    title: aboutConfig.title,
    projects: projectsConfig.projects
  })
}

/*
 * Return services page
 *
 * @returns - renders services page
 */
module.exports.getServices = (req, res) => {
  res.render('../views/pages/services', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: servicesConfig.pageTitle,
    state: servicesConfig.state,
    title: servicesConfig.title,
    projects: projectsConfig.projects
  })
}

/*
 * Return estimate page
 *
 * @returns - renders estimate page
 */
module.exports.getEstimate = (req, res) => {
  res.render('../views/pages/estimate', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    status: req.query.status || null,
    pageTitle: estimateConfig.pageTitle,
    state: estimateConfig.state,
    title: estimateConfig.title,
    projects: projectsConfig.projects
  })
}

/*
 * Return contact page
 *
 * @returns - renders contact page
 */
module.exports.getContact = (req, res) => {
  res.render('../views/pages/contact', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    status: req.query.status || null,
    pageTitle: contactConfig.pageTitle,
    state: contactConfig.state,
    title: contactConfig.title,
    projects: projectsConfig.projects,
    domain: config.domain,
    port: config.port
  })
}

/*
 * Return projects page
 *
 * @returns - renders projects page
 */
module.exports.getProjects = (req, res) => {
  res.render('../views/pages/projects', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: projectsConfig.pageTitle,
    state: projectsConfig.state,
    title: projectsConfig.title,
    projects: projectsConfig.projects
  })
}

/*
 * Return project page
 *
 * @return - renders project page
 */
module.exports.getProject = (req, res) => {
  res.render('../views/pages/project', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: projectConfig.pageTitle,
    state: projectConfig.state,
    title: projectConfig.title,
    projects: projectsConfig.projects,
    project: req.project
  })
}

/*
 * Send contact email
 *
 */
module.exports.sendContactEmail = (req, res, next) => {
  var data = {
    from: req.body.email,
    to: MAILGUN_EMAIL,
    subject: req.body.name + ' sent a message from www.currentcon.com',
    text: req.body.message
  }

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      return next(error)
    }

    res.status(HttpStatus.OK)
    res.send('ok')
  })
}

/*
 * Send estimate email
 *
 */
module.exports.sendEstimateEmail = (req, res, next) => {
  var data = {
    from: req.body.email,
    to: MAILGUN_EMAIL,
    subject: 'Estimate Request',
    text: getEstimateBody(req.body)
  }

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      return next(error)
    }

    res.status(HttpStatus.OK)
    res.send('ok')
  })
}

function getEstimateBody (body) {
  let newLine = '\n'
  let line1 = body.name + ' has requested an estimate using the Current Construction website form.'
  let line2 = 'Name: ' + body.name
  let line3 = 'Email: ' + body.email
  let line4 = 'Phone: ' + (body.phone || '')
  let line5 = 'City: ' + (body.city || '')
  let line6 = 'State: ' + (body.state || '')
  let line7 = 'Zip: ' + (body.zip || '')

  let line8 = 'Project type: ' + (body.projectType || '')
  let line9 = 'Project areas: ' + (getProjectAreas(body.projectAreas) || '')
  let line10 = 'Project description: ' + (body.description || '')
  let line11 = 'Do you have plans?: ' + (body.plans || '')
  let line12 = 'Approximate property size: ' + (body.propertySize || '')
  let line13 = 'Approximate project budget: ' + (body.budget || '')

  return _.concat(line1, newLine, line2, line3, line4, line5, line6, line7, newLine, line8, line9, line10, line11, line12, line13)
}

function getProjectAreas (areas) {
  if (areas && areas.length > 0) {
    let allAreas = ''

    areas.forEach(function (area) {
      allAreas = allAreas + ' ' + area
    })

    return allAreas
  } else {
    return null
  }
}
