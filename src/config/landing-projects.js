'use strict'

/*
 * Module dependencies
 */
let assets = require('./config').assets

module.exports = {
  projects: [
    {
      name: '349 Hanover Ave.',
      subtext: 'Oakland, California',
      portfolioImg: {
        src: assets + '/hanover-cover.jpg',
        alt: 'Hanover img'
      },
      duration: '10 months',
      type: 'Multi-Unit',
      architectOrEngineer: {
        name: 'Windsor Gibson Architects',
        url: 'http://www.archsf.com/'
      },
      info: 'A 35 unit residential building in the Lake Merrit district of Oakland. A beautiful modern design from Winder Gibson Architects and executed to the highest possible standard within budget and on schedule by Current Constructions General Contractors.'
    },
    {
      name: 'Bridgeview Drive',
      subtext: 'San Francisco, California',
      portfolioImg: {
        src: assets + '/bridgeview-cover.jpg',
        alt: 'Bridgeview img'
      },
      duration: '6 months',
      type: 'Residential',
      architectOrEngineer: {
        name: 'Robin Shmidt',
        url: ''
      },
      info: 'New exterior hardy board siding, trim and vinyl windows installed professionally by Current Construction. Atop one of San Francisco\'s many hills weathered by the constant rolling fog and dampness, this home was in dire need of a face lift and durable weather barrier.'
    },
    {
      name: 'Fillmore Street',
      subtext: 'San Francisco, California',
      portfolioImg: {
        src: assets + '/fillmore-cover.jpg',
        alt: 'Fillmore img'
      },
      duration: '8 months',
      type: 'Residential, Structural',
      architectOrEngineer: {
        name: 'Noa Design & Construction',
        url: 'https://www.noadesignbuild.com/'
      },
      info: 'A complete single family home remodel in the Pacific Heights neighborhood including seismic retrofit, structural framing, layout reconfiguration, plumbing, heating, electrical and amazing woodwork and finish carpentry.'
    },
    {
      name: '7th Street',
      subtext: 'San Francisco, California',
      portfolioImg: {
        src: assets + '/7th-cover.jpg',
        alt: '7th img'
      },
      duration: '6 months',
      type: 'Structural, Commercial',
      architectOrEngineer: {
        name: 'Harvey Hacker Architects',
        url: 'http://harveyhacker.com/'
      },
      info: 'We transformed this old film studio into a modern office space for a tech start-up. We started by adding moment frames and new footings and then anchored the existing joist to the concrete wall using simpson hold down and titen bolts. We also added 2 bathrooms, a kitchen and mezzanine level with conference room.'
    },
    {
      name: '1244 2nd Avenue',
      subtext: 'Oakland, California',
      portfolioImg: {
        src: assets + '/2nd-avenue-cover.jpg',
        alt: '2nd ave img'
      },
      duration: '12 months',
      type: 'Multi-Unit',
      architectOrEngineer: {
        name: 'Evoco Architecture',
        url: 'http://evocoarch.com/'
      },
      info: 'This 1925 East Lake Merritt building has undergone extensive renovations while preserving the original period details. See more and explore 3D Space at: http://www.2ndonlake.com/'
    }
  ]
}
