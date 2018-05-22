'use strict';

/*
 * Module dependencies
 */
let homeConfig = require('./config/home');
let aboutConfig = require('./config/about');
let servicesConfig = require('./config/services');
let estimateConfig = require('./config/estimate');
let contactConfig = require('./config/contact');
let projectsConfig = require('./config/projects');
let projectConfig = require('./config/project');

/*
 * Return home page
 *
 * @returns - renders home page
 */
module.exports.getHome = ((req, res) => {
    res.render('./../views/pages/index', {
        pageTitle: homeConfig.pageTitle,
        state: homeConfig.state,
        projects: projectsConfig.projects
    });
});

/*
 * Return about page
 *
 * @returns - renders about page
 */
module.exports.getAbout = ((req, res) => {
    res.render('./../views/pages/about', {
        pageTitle: aboutConfig.pageTitle,
        state: aboutConfig.state,
        title: aboutConfig.title,
        projects: projectsConfig.projects
    });
});

/*
 * Return services page
 *
 * @returns - renders services page
 */
module.exports.getServices = ((req, res) => {
    res.render('./../views/pages/services', {
        pageTitle: servicesConfig.pageTitle,
        state: servicesConfig.state,
        title: servicesConfig.title,
        projects: projectsConfig.projects
    });
});

/*
 * Return estimate page
 *
 * @returns - renders estimate page
 */
module.exports.getEstimate = ((req, res) => {
    res.render('./../views/pages/estimate', {
        pageTitle: estimateConfig.pageTitle,
        state: estimateConfig.state,
        title: estimateConfig.title,
        projects: projectsConfig.projects
    });
});

/*
 * Return contact page
 *
 * @returns - renders contact page
 */
module.exports.getContact = ((req, res) => {
    res.render('../views/pages/contact', {
        pageTitle: contactConfig.pageTitle,
        state: contactConfig.state,
        title: contactConfig.title,
        projects: projectsConfig.projects
    });
});

/*
 * Return projects page
 *
 * @returns - renders projects page
 */
module.exports.getProjects = ((req, res) => {
    res.render('../views/pages/projects', {
        pageTitle: projectsConfig.pageTitle,
        state: projectsConfig.state,
        title: projectsConfig.title,
        projects: projectsConfig.projects
    });
});

/*
 * Return project page
 *
 * @return - renders project page
 */
module.exports.getProject = ((req, res) => {
    res.render('../views/pages/project', {
        pageTitle: projectConfig.pageTitle,
        state: projectConfig.state,
        title: projectConfig.title,
        projects: projectsConfig.projects,
        project: req.project
    });
});
