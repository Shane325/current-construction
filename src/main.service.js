'use strict'

/*
 * Module dependencies
 */
let _ = require('lodash')
const config = require('./config/config')
let projects = require('./config/projects').projects
const request = require('request')

/*
 * Return a project by id
 *
 * @param - projectId
 * @returns - project object
 */
module.exports.getProjectById = (req, res, next, projectId) => {
  var project = _.find(projects, (project) => {
    return project.id == projectId
  })
  req.project = project
  next()
}

module.exports.getPostById = (req, res, next, id) => {
  const options = {
    url: `${config.cms}/posts/${id}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }

  request(options, (error, response, body) => {
    if (error) {
      throw (error)
    }

    req.post = JSON.parse(body)
    next()
  })
}
