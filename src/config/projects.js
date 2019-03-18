'use strict'

/*
 * Module dependencies
 */
let assets = require('./config').assets

module.exports = {
  pageTitle: 'Projects',
  state: 'projects',
  title: {
    text: 'Projects',
    subtext: 'See our work',
    menu: [{
      name: 'Home',
      url: '/'
    },
    {
      name: 'Projects',
      url: null
    }
    ]
  },
  projects: [{
    id: 1,
    name: 'Bridgeview Drive',
    subtext: 'San Francisco, California',
    categories: 'project-residential',
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
    info: 'New exterior hardy board siding, trim and vinyl windows installed professionally by Current Construction. Atop one of San Francisco\'s many hills weathered by the constant rolling fog and dampness, this home was in dire need of a face lift and durable weather barrier.',
    img: [{
      src: assets + '/bridgeview-1.jpg',
      alt: 'Bridgeview img 1'
    },
    {
      src: assets + '/bridgeview-2.jpg',
      alt: 'Bridgeview img 2'
    },
    {
      src: assets + '/bridgeview-3.jpg',
      alt: 'Bridgeview img 3'
    },
    {
      src: assets + '/bridgeview-4.jpg',
      alt: 'Bridgeview img 4'
    },
    {
      src: assets + '/bridgeview-5.jpg',
      alt: 'Bridgeview img 5'
    },
    {
      src: assets + '/bridgeview-6.jpg',
      alt: 'Bridgeview img 6'
    },
    {
      src: assets + '/bridgeview-7.jpg',
      alt: 'Bridgeview img 7'
    },
    {
      src: assets + '/bridgeview-8.jpg',
      alt: 'Bridgeview img 8'
    }
    ]
  },
  {
    id: 2,
    name: 'Fillmore Street',
    subtext: 'San Francisco, California',
    categories: 'project-residential',
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
    info: 'A complete single family home remodel in the Pacific Heights neighborhood including seismic retrofit, structural framing, layout reconfiguration, plumbing, heating, electrical and amazing woodwork and finish carpentry.',
    img: [{
      src: assets + '/fillmore-1.jpg',
      alt: 'Fillmore img 1'
    },
    {
      src: assets + '/fillmore-2.jpg',
      alt: 'Fillmore img 2'
    },
    {
      src: assets + '/fillmore-3.jpg',
      alt: 'Fillmore img 3'
    }
    ]
  },
  {
    id: 3,
    name: 'Daly City',
    subtext: 'Daly City, California',
    categories: 'project-residential',
    portfolioImg: {
      src: assets + '/daly-cover.jpg',
      alt: 'Daly city img'
    },
    duration: '4 weeks',
    type: 'Residential',
    architectOrEngineer: {
      name: 'Kevin O\' Connor Engineering',
      url: 'http://www.kocengineering.com/index.html'
    },
    info: 'Foundation replacement and stylish exterior work including window replacement, rigid insulation install and siding, cedar trim out and decking.',
    img: [{
      src: assets + '/daly-1.jpg',
      alt: 'Daly city img 1'
    },
    {
      src: assets + '/daly-2.jpg',
      alt: 'Daly city img 2'
    },
    {
      src: assets + '/daly-3.jpg',
      alt: 'Daly city img 3'
    }
    ]
  },
  {
    id: 4,
    name: 'Bay Street',
    subtext: 'San Francisco, California',
    categories: 'project-structural',
    portfolioImg: {
      src: assets + '/bay-cover.jpg',
      alt: 'Bay img'
    },
    duration: '7 weeks',
    type: 'Structural',
    architectOrEngineer: {
      name: 'Double D Engineering',
      url: 'http://www.doubledengineering.com'
    },
    info: 'Structural upgrade of multi unit building. Reinforced existing steel frame while adding new moment frame to the front with shear walls throughout.',
    img: [{
      src: assets + '/bay-1.jpg',
      alt: 'Bay img 1'
    },
    {
      src: assets + '/bay-2.jpg',
      alt: 'Bay img 2'
    },
    {
      src: assets + '/bay-3.jpg',
      alt: 'Bay img 3'
    }
    ]
  },
  {
    id: 5,
    name: 'Washington Street',
    subtext: 'San Francisco, California',
    categories: 'project-structural',
    portfolioImg: {
      src: assets + '/washington-cover.jpg',
      alt: 'Wash img'
    },
    duration: '9 weeks',
    type: 'Structural',
    architectOrEngineer: {
      name: 'Coffman Engineers',
      url: 'https://www.coffman.com/'
    },
    info: 'Soft story structural upgrade of a multi unit building. Two Simpson moment frames, five grade brand and shear wall throughout.',
    img: [{
      src: assets + '/washington-1.jpg',
      alt: 'Wash img 1'
    },
    {
      src: assets + '/washington-2.jpg',
      alt: 'Wash img 2'
    },
    {
      src: assets + '/washington-3.jpg',
      alt: 'Wash img 3'
    },
    {
      src: assets + '/washington-4.jpg',
      alt: 'Wash img 4'
    }
    ]
  },
  {
    id: 6,
    name: 'Fremont Project',
    subtext: 'Fremont, California',
    categories: 'project-structural',
    portfolioImg: {
      src: assets + '/fremont-cover.jpg',
      alt: 'Fremont project img'
    },
    duration: '4 weeks',
    type: 'Structural',
    architectOrEngineer: {
      name: 'Spartac Bet-Lachin Structural Engineer',
      url: 'http://spartacbetlachin.com/'
    },
    info: 'Installation of two simpson moment frames at two large garage openings. New concrete footings.',
    img: [{
      src: assets + '/fremont-1.jpg',
      alt: 'Fremont project img 1'
    },
    {
      src: assets + '/fremont-2.jpg',
      alt: 'Fremont project img 2'
    },
    {
      src: assets + '/fremont-3.jpg',
      alt: 'Fremont project img 3'
    },
    {
      src: assets + '/fremont-4.jpg',
      alt: 'Fremont project img 4'
    },
    {
      src: assets + '/fremont-5.jpg',
      alt: 'Fremont project img 5'
    },
    {
      src: assets + '/fremont-6.jpg',
      alt: 'Fremont project img 6'
    }
    ]
  },
  {
    id: 7,
    name: '7th Street',
    subtext: 'San Francisco, California',
    categories: 'project-commercial',
    portfolioImg: {
      src: assets + '/7th-cover.jpg',
      alt: '7th img'
    },
    duration: '6 months',
    type: 'Commercial',
    architectOrEngineer: {
      name: 'Harvey Hacker Architects',
      url: 'http://harveyhacker.com/'
    },
    info: 'We transformed this old film studio into a modern office space for a tech start-up. We started by adding moment frames and new footings and then anchored the existing joist to the concrete wall using simpson hold down and titen bolts. We also added 2 bathrooms, a kitchen and mezzanine level with conference room.',
    img: [{
      src: assets + '/7th-1.jpg',
      alt: '7th img 1'
    },
    {
      src: assets + '/7th-2.jpg',
      alt: '7th img 2'
    },
    {
      src: assets + '/7th-3.jpg',
      alt: '7th img 3'
    }
    ]
  },
  {
    id: 8,
    name: '2630 Mission Street',
    subtext: 'San Francisco, California',
    categories: 'project-commercial',
    portfolioImg: {
      src: assets + '/2630-mission-cover.jpg',
      alt: 'Mission street img'
    },
    duration: '10 months',
    type: 'Commercial',
    architectOrEngineer: {
      name: 'Powell & Associates Inc.',
      url: 'http://powellandassoc.com/'
    },
    info: '2630 Mission is a 7000 sq. ft. commercial-retail build out in the heart of the bustling Mission District of San Francisco. With the skill and expertise of our team at Current Construction the building underwent extensive structural repair, a complete reconstruction of utilities and then precise finish work.',
    img: [{
      src: assets + '/2630-mission-1.jpg',
      alt: 'Mission img 1'
    },
    {
      src: assets + '/2630-mission-2.jpg',
      alt: 'Mission img 2'
    },
    {
      src: assets + '/2630-mission-3.jpg',
      alt: 'Mission img 3'
    },
    {
      src: assets + '/2630-mission-4.jpg',
      alt: 'Mission img 4'
    },
    {
      src: assets + '/2630-mission-5.jpg',
      alt: 'Mission img 5'
    },
    {
      src: assets + '/2630-mission-6.jpg',
      alt: 'Mission img 6'
    }
    ]
  },
  {
    id: 9,
    name: '1035 Market Street',
    subtext: 'San Francisco, California',
    categories: 'project-commercial',
    portfolioImg: {
      src: assets + '/market-cover.jpg',
      alt: 'Market street img'
    },
    duration: '4 months',
    type: 'Commercial',
    architectOrEngineer: {
      name: '',
      url: ''
    },
    info: 'We were able to transform this hollow Market Street space into a rustic and robust state-of-the-art bartending school. Fishbone backing throughout the back wall, distinctive bar lighting and custom cabinets helped bring this unique project to life. Schools open!',
    img: [{
      src: assets + '/market-1.jpg',
      alt: 'Market img 1'
    },
    {
      src: assets + '/market-2.jpg',
      alt: 'Market img 2'
    },
    {
      src: assets + '/market-3.jpg',
      alt: 'Market img 3'
    },
    {
      src: assets + '/market-4.jpg',
      alt: 'Market img 4'
    },
    {
      src: assets + '/market-5.jpg',
      alt: 'Market img 5'
    },
    {
      src: assets + '/market-6.jpg',
      alt: 'Market img 6'
    },
    {
      src: assets + '/market-7.jpg',
      alt: 'Market img 7'
    }
    ]
  },
  {
    id: 10,
    name: '1244 2nd Avenue',
    subtext: 'Oakland, California',
    categories: 'project-multi-unit',
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
    info: 'This 1925 East Lake Merritt building has undergone extensive renovations while preserving the original period details. See more and explore 3D Space at: http://www.2ndonlake.com/',
    img: [{
      src: assets + '/2nd-avenue-1.jpg',
      alt: '2nd ave img 1'
    },
    {
      src: assets + '/2nd-avenue-2.jpg',
      alt: '2nd ave img 2'
    },
    {
      src: assets + '/2nd-avenue-3.jpg',
      alt: '2nd ave img 3'
    },
    {
      src: assets + '/2nd-avenue-4.jpg',
      alt: '2nd ave img 4'
    },
    {
      src: assets + '/2nd-avenue-5.jpg',
      alt: '2nd ave img 5'
    },
    {
      src: assets + '/2nd-avenue-6.jpg',
      alt: '2nd ave img 6'
    },
    {
      src: assets + '/2nd-avenue-7.jpg',
      alt: '2nd ave img 7'
    },
    {
      src: assets + '/2nd-avenue-8.jpg',
      alt: '2nd ave img 8'
    }
    ]
  },
  {
    id: 11,
    name: '1825 Mission Street',
    subtext: 'San Francisco, California',
    categories: 'project-multi-unit',
    portfolioImg: {
      src: assets + '/1825-mission-cover.jpg',
      alt: '1825 mission img'
    },
    duration: '10 months',
    type: 'Multi-Unit',
    architectOrEngineer: {
      name: 'Current Construction',
      url: ''
    },
    info: '1825 Mission Street, containing residential units for the elderly, was in need of a transformation. We gave the building a new lease on life by upgrading and remodelling all the residences, along with the reception areas, communal living space, courtyard and the exterior of the building.',
    img: [{
      src: assets + '/1825-mission-1.jpg',
      alt: '1825 mission img 1'
    },
    {
      src: assets + '/1825-mission-2.jpg',
      alt: '1825 mission img 2'
    },
    {
      src: assets + '/1825-mission-3.jpg',
      alt: '1825 mission img 3'
    },
    {
      src: assets + '/1825-mission-4.jpg',
      alt: '1825 mission img 4'
    },
    {
      src: assets + '/1825-mission-5.jpg',
      alt: '1825 mission img 5'
    }
    ]
  },
  {
    id: 12,
    name: '349 Hanover Ave.',
    subtext: 'Oakland, California',
    categories: 'project-multi-unit',
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
    info: 'A 35 unit residential building in the Lake Merrit district of Oakland. A beautiful modern design from Winder Gibson Architects and executed to the highest possible standard within budget and on schedule by Current Constructions General Contractors.',
    img: [{
      src: assets + '/hanover-1.jpg',
      alt: 'Hanover img 1'
    },
    {
      src: assets + '/hanover-2.jpg',
      alt: 'Hanover img 2'
    },
    {
      src: assets + '/hanover-3.jpg',
      alt: 'Hanover img 3'
    },
    {
      src: assets + '/hanover-4.jpg',
      alt: 'Hanover img 4'
    },
    {
      src: assets + '/hanover-5.jpg',
      alt: 'Hanover img 5'
    },
    {
      src: assets + '/hanover-6.jpg',
      alt: 'Hanover img 6'
    },
    {
      src: assets + '/hanover-7.jpg',
      alt: 'Hanover img 7'
    }
    ]
  },
  {
    id: 13,
    name: '1166 Haight St.',
    subtext: 'San Francisco, California',
    categories: 'project-multi-unit project-structural',
    portfolioImg: {
      src: assets + '/haight-cover.jpg',
      alt: 'Haight img'
    },
    duration: '15 months',
    type: 'Multi-Unit, Structural',
    architectOrEngineer: {
      name: 'Shatara Architecture / Himmati Engineering',
      url: 'https://www.shataraarch.com/'
    },
    info: 'Extensive remodel and structural upgrade to a 1907 victorian 12 unit building. Some of the work included shoring up the entire building, replacing foundation and adding approx 3000 sq ft to the property. Full restoration of the original period facade.',
    img: [{
      src: assets + '/haight-1.jpg',
      alt: 'Haight img 1'
    },
    {
      src: assets + '/haight-2.jpg',
      alt: 'Haight img 2'
    },
    {
      src: assets + '/haight-3.jpg',
      alt: 'Haight img 3'
    },
    {
      src: assets + '/haight-4.jpg',
      alt: 'Haight img 4'
    },
    {
      src: assets + '/haight-5.jpg',
      alt: 'Haight img 5'
    },
    {
      src: assets + '/haight-6.jpg',
      alt: 'Haight img 6'
    },
    {
      src: assets + '/haight-7.jpg',
      alt: 'Haight img 7'
    },
    {
      src: assets + '/haight-8.jpg',
      alt: 'Haight img 8'
    },
    {
      src: assets + '/haight-9.jpg',
      alt: 'Haight img 9'
    },
    {
      src: assets + '/haight-10.jpg',
      alt: 'Haight img 10'
    },
    {
      src: assets + '/haight-11.jpg',
      alt: 'Haight img 11'
    },
    {
      src: assets + '/haight-12.jpg',
      alt: 'Haight img 12'
    }
    ]
  }
  ]
}
