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
let landingConfig = require('./config/landing')
let landingProjectsConfig = require('./config/landing-projects')
let adminConfig = require('./config/admin')
let softStoryConfig = require('./config/soft-story')
let remodelConfig = require('./config/remodel')
let HttpStatus = require('http-status-codes')
let MAILGUN_API_KEY = config.mailgun.api_key
let MAILGUN_DOMAIN = config.mailgun.domain
let MAILGUN_EMAIL = config.mailgun.email
let mailgun = require('mailgun-js')({
  apiKey: MAILGUN_API_KEY,
  domain: MAILGUN_DOMAIN
})
let GoogleSpreadsheet = require('google-spreadsheet')

let estimateDoc = new GoogleSpreadsheet(config.google.estimateSpreadsheetKey)

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
    projects: projectsConfig.projects,
    type: req.query.type || '*',
    structuralProjects: projectsConfig.structuralProjects
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
 * Return email landing page
 *
 * @returns - renders email landing page
 */
module.exports.getEmailLanding = (req, res) => {
  res.render('../views/pages/email-landing', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: landingConfig.pageTitle,
    state: landingConfig.state,
    projects: landingProjectsConfig.projects
  })
}

/*
 * Return email landing page 2
 *
 * @returns - renders email landing page 2
 */
module.exports.getEmailLanding2 = (req, res) => {
  res.render('../views/pages/email-landing-2', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: landingConfig.pageTitle,
    state: landingConfig.state,
    projects: landingProjectsConfig.projects
  })
}

/*
 * Return admin page
 *
 * @returns - renders admin page
 */
module.exports.getAdminPage = (req, res) => {
  res.render('../views/pages/admin', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: adminConfig.pageTitle,
    state: adminConfig.state,
    title: adminConfig.title
  })
}

/**
 * Return soft story page
 *
 * @returns - renders soft story page
 */
module.exports.getSoftStoryPage = (req, res) => {
  res.render('../views/pages/soft-story', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: softStoryConfig.pageTitle,
    state: softStoryConfig.state,
    title: softStoryConfig.title,
    projects: projectsConfig.projects
  })
}

/**
 * Return remodel page
 *
 * @returns - renders remodel page
 */
module.exports.getRemodelPage = (req, res) => {
  res.render('../views/pages/remodel', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: remodelConfig.pageTitle,
    state: remodelConfig.state,
    title: remodelConfig.title,
    projects: projectsConfig.projects
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
    let creds = require('./config/google-credentials.json')
    estimateDoc.useServiceAccountAuth(creds, (err) => {
      if (err) {
        return next(err)
      }
      estimateDoc.addRow(1, {
        'date': new Date().toISOString(),
        'form': 'Contact',
        'name': req.body.name,
        'email': req.body.email,
        'message': req.body.message
      }, (err, row) => {
        if (err) {
          return next(err)
        }
        res.status(HttpStatus.OK)
        res.json({ message: 'Form submitted successfully' })
      })
    })
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

    let creds = require('./config/google-credentials.json')
    estimateDoc.useServiceAccountAuth(creds, (err) => {
      if (err) {
        return next(err)
      }
      estimateDoc.addRow(1, {
        'date': new Date().toISOString(),
        'form': 'Estimate',
        'name': req.body.name,
        'email': req.body.email,
        'message': '',
        'phone': req.body.phone,
        'city': req.body.city,
        'state': req.body.state,
        'zip': req.body.zip,
        'project areas': getProjectAreas(req.body.projectAreas),
        'project description': req.body.description,
        'plans': req.body.plans,
        'property size': req.body.propertySize,
        'project budget': req.body.budget
      }, (err, row) => {
        if (err) {
          return next(err)
        }
        res.status(HttpStatus.OK)
        res.json({ message: 'Estimate request submitted successfully' })
      })
    })
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

  let line9 = 'Project areas: ' + (getProjectAreas(body.projectAreas) || '')
  let line10 = 'Project description: ' + (body.description || '')
  let line11 = 'Do you have plans?: ' + (body.plans || '')
  let line12 = 'Approximate property size: ' + (body.propertySize || '')
  let line13 = 'Approximate project budget: ' + (body.budget || '')

  return _.concat(line1, newLine, line2, line3, line4, line5, line6, line7, newLine, line9, line10, line11, line12, line13)
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
