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
      alt: 'Bridgeview img general contractor san francisco'
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
      alt: 'Bridgeview img 1 general contractor san francisco'
    },
    {
      src: assets + '/bridgeview-2.jpg',
      alt: 'Bridgeview img 2 general contractor san francisco'
    },
    {
      src: assets + '/bridgeview-3.jpg',
      alt: 'Bridgeview img 3 general contractor san francisco'
    },
    {
      src: assets + '/bridgeview-4.jpg',
      alt: 'Bridgeview img 4 general contractor san francisco'
    },
    {
      src: assets + '/bridgeview-5.jpg',
      alt: 'Bridgeview img 5 general contractor san francisco'
    },
    {
      src: assets + '/bridgeview-6.jpg',
      alt: 'Bridgeview img 6 general contractor san francisco'
    },
    {
      src: assets + '/bridgeview-7.jpg',
      alt: 'Bridgeview img 7 general contractor san francisco'
    },
    {
      src: assets + '/bridgeview-8.jpg',
      alt: 'Bridgeview img 8 general contractor san francisco'
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
      alt: 'Fillmore img general contractor san francisco'
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
      alt: 'Fillmore img 1 general contractor san francisco'
    },
    {
      src: assets + '/fillmore-2.jpg',
      alt: 'Fillmore img 2 general contractor san francisco'
    },
    {
      src: assets + '/fillmore-3.jpg',
      alt: 'Fillmore img 3 general contractor san francisco'
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
      alt: 'Daly city img general contractor san francisco'
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
      alt: 'Daly city img 1 general contractor san francisco'
    },
    {
      src: assets + '/daly-2.jpg',
      alt: 'Daly city img 2 general contractor san francisco'
    },
    {
      src: assets + '/daly-3.jpg',
      alt: 'Daly city img 3 general contractor san francisco'
    }
    ]
  },
  {
    id: 4,
    name: '1166 Haight St.',
    subtext: 'San Francisco, California',
    categories: 'project-multi-unit project-structural',
    portfolioImg: {
      src: assets + '/haight-cover.jpg',
      alt: 'Haight img general contractor san francisco'
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
      alt: 'Haight img 1 general contractor san francisco'
    },
    {
      src: assets + '/haight-2.jpg',
      alt: 'Haight img 2 general contractor san francisco'
    },
    {
      src: assets + '/haight-3.jpg',
      alt: 'Haight img 3 general contractor san francisco'
    },
    {
      src: assets + '/haight-4.jpg',
      alt: 'Haight img 4 general contractor san francisco'
    },
    {
      src: assets + '/haight-5.jpg',
      alt: 'Haight img 5 general contractor san francisco'
    },
    {
      src: assets + '/haight-6.jpg',
      alt: 'Haight img 6 general contractor san francisco'
    },
    {
      src: assets + '/haight-7.jpg',
      alt: 'Haight img 7 general contractor san francisco'
    },
    {
      src: assets + '/haight-8.jpg',
      alt: 'Haight img 8 general contractor san francisco'
    },
    {
      src: assets + '/haight-9.jpg',
      alt: 'Haight img 9 general contractor san francisco'
    },
    {
      src: assets + '/haight-10.jpg',
      alt: 'Haight img 10 general contractor san francisco'
    },
    {
      src: assets + '/haight-11.jpg',
      alt: 'Haight img 11 general contractor san francisco'
    },
    {
      src: assets + '/haight-12.jpg',
      alt: 'Haight img 12 general contractor san francisco'
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
      alt: 'Wash img general contractor san francisco'
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
      alt: 'Wash img 1 general contractor san francisco'
    },
    {
      src: assets + '/washington-2.jpg',
      alt: 'Wash img 2 general contractor san francisco'
    },
    {
      src: assets + '/washington-3.jpg',
      alt: 'Wash img 3 general contractor san francisco'
    },
    {
      src: assets + '/washington-4.jpg',
      alt: 'Wash img 4 general contractor san francisco'
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
      alt: 'Fremont project img general contractor san francisco'
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
      alt: 'Fremont project img 1 general contractor san francisco'
    },
    {
      src: assets + '/fremont-2.jpg',
      alt: 'Fremont project img 2 general contractor san francisco'
    },
    {
      src: assets + '/fremont-3.jpg',
      alt: 'Fremont project img 3 general contractor san francisco'
    },
    {
      src: assets + '/fremont-4.jpg',
      alt: 'Fremont project img 4 general contractor san francisco'
    },
    {
      src: assets + '/fremont-5.jpg',
      alt: 'Fremont project img 5 general contractor san francisco'
    },
    {
      src: assets + '/fremont-6.jpg',
      alt: 'Fremont project img 6 general contractor san francisco'
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
      alt: '7th img general contractor san francisco'
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
      alt: '7th img 1 general contractor san francisco'
    },
    {
      src: assets + '/7th-2.jpg',
      alt: '7th img 2 general contractor san francisco'
    },
    {
      src: assets + '/7th-3.jpg',
      alt: '7th img 3 general contractor san francisco'
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
      alt: 'Mission street img general contractor san francisco'
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
      alt: 'Mission img 1 general contractor san francisco'
    },
    {
      src: assets + '/2630-mission-2.jpg',
      alt: 'Mission img 2 general contractor san francisco'
    },
    {
      src: assets + '/2630-mission-3.jpg',
      alt: 'Mission img 3 general contractor san francisco'
    },
    {
      src: assets + '/2630-mission-4.jpg',
      alt: 'Mission img 4 general contractor san francisco'
    },
    {
      src: assets + '/2630-mission-5.jpg',
      alt: 'Mission img 5 general contractor san francisco'
    },
    {
      src: assets + '/2630-mission-6.jpg',
      alt: 'Mission img 6 general contractor san francisco'
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
      alt: 'Market street img general contractor san francisco'
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
      alt: 'Market img 1 general contractor san francisco'
    },
    {
      src: assets + '/market-2.jpg',
      alt: 'Market img 2 general contractor san francisco'
    },
    {
      src: assets + '/market-3.jpg',
      alt: 'Market img 3 general contractor san francisco'
    },
    {
      src: assets + '/market-4.jpg',
      alt: 'Market img 4 general contractor san francisco'
    },
    {
      src: assets + '/market-5.jpg',
      alt: 'Market img 5 general contractor san francisco'
    },
    {
      src: assets + '/market-6.jpg',
      alt: 'Market img 6 general contractor san francisco'
    },
    {
      src: assets + '/market-7.jpg',
      alt: 'Market img 7 general contractor san francisco'
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
      alt: '2nd ave img general contractor san francisco'
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
      alt: '2nd ave img 1 general contractor san francisco'
    },
    {
      src: assets + '/2nd-avenue-2.jpg',
      alt: '2nd ave img 2 general contractor san francisco'
    },
    {
      src: assets + '/2nd-avenue-3.jpg',
      alt: '2nd ave img 3 general contractor san francisco'
    },
    {
      src: assets + '/2nd-avenue-4.jpg',
      alt: '2nd ave img 4 general contractor san francisco'
    },
    {
      src: assets + '/2nd-avenue-5.jpg',
      alt: '2nd ave img 5 general contractor san francisco'
    },
    {
      src: assets + '/2nd-avenue-6.jpg',
      alt: '2nd ave img 6 general contractor san francisco'
    },
    {
      src: assets + '/2nd-avenue-7.jpg',
      alt: '2nd ave img 7 general contractor san francisco'
    },
    {
      src: assets + '/2nd-avenue-8.jpg',
      alt: '2nd ave img 8 general contractor san francisco'
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
      alt: '1825 mission img general contractor san francisco'
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
      alt: '1825 mission img 1 general contractor san francisco'
    },
    {
      src: assets + '/1825-mission-2.jpg',
      alt: '1825 mission img 2 general contractor san francisco'
    },
    {
      src: assets + '/1825-mission-3.jpg',
      alt: '1825 mission img 3 general contractor san francisco'
    },
    {
      src: assets + '/1825-mission-4.jpg',
      alt: '1825 mission img 4 general contractor san francisco'
    },
    {
      src: assets + '/1825-mission-5.jpg',
      alt: '1825 mission img 5 general contractor san francisco'
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
      alt: 'Hanover img general contractor san francisco'
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
      alt: 'Hanover img 1 general contractor san francisco'
    },
    {
      src: assets + '/hanover-2.jpg',
      alt: 'Hanover img 2 general contractor san francisco'
    },
    {
      src: assets + '/hanover-3.jpg',
      alt: 'Hanover img 3 general contractor san francisco'
    },
    {
      src: assets + '/hanover-4.jpg',
      alt: 'Hanover img 4 general contractor san francisco'
    },
    {
      src: assets + '/hanover-5.jpg',
      alt: 'Hanover img 5 general contractor san francisco'
    },
    {
      src: assets + '/hanover-6.jpg',
      alt: 'Hanover img 6 general contractor san francisco'
    },
    {
      src: assets + '/hanover-7.jpg',
      alt: 'Hanover img 7 general contractor san francisco'
    }
    ]
  },
  {
    id: 13,
    name: 'Bay Street',
    subtext: 'San Francisco, California',
    categories: 'project-structural',
    portfolioImg: {
      src: assets + '/bay-cover.jpg',
      alt: 'Bay img general contractor san francisco'
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
      alt: 'Bay img 1 general contractor san francisco'
    },
    {
      src: assets + '/bay-2.jpg',
      alt: 'Bay img 2 general contractor san francisco'
    },
    {
      src: assets + '/bay-3.jpg',
      alt: 'Bay img 3 general contractor san francisco'
    }
    ]
  }
  ],
  structuralProjects: [
    {
      name: '2211 Broderick St., San Francisco',
      url: 'https://www.google.com/maps/place/2211+Broderick+St,+San+Francisco,+CA+94115/@37.7910889,-122.4427577,3a,75y,242.9h,90t/data=!3m6!1e1!3m4!1sS1U0JInzQayZn1Hn3LiowQ!2e0!7i13312!8i6656!4m5!3m4!1s0x808580cc4cb89a09:0x8ebc80df41f62bf4!8m2!3d37.7910201!4d-122.4429343'
    },
    {
      name: '448 Broderick St., San Francisco',
      url: 'https://www.google.com/maps/place/448+Broderick+St,+San+Francisco,+CA+94117/@37.7744965,-122.439412,3a,75y,74.78h,90t/data=!3m7!1e1!3m5!1sEoY0g0v-nBFs2i2SZ20ogw!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3DEoY0g0v-nBFs2i2SZ20ogw%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D74.78356%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x808580ae3edaa38d:0x62d651d5cbb22565!8m2!3d37.7745106!4d-122.4392442'
    },
    {
      name: '3234 Washington St., San Francisco',
      url: 'https://www.google.com/maps/place/3234+Washington+St,+San+Francisco,+CA+94115/@37.7900616,-122.4465799,3a,75y,346.32h,90t/data=!3m7!1e1!3m5!1snC5wBfGgr6XStdBVHltv-A!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3DnC5wBfGgr6XStdBVHltv-A%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D346.3219%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x808580cd2c96983b:0x34cd15e9fa30ca46!8m2!3d37.790312!4d-122.4466575'
    },
    {
      name: '3965 Washington St., San Francisco',
      url: 'https://www.google.com/maps/place/3965+Washington+St,+San+Francisco,+CA+94118/@37.7885302,-122.4586426,3a,75y,164.25h,90t/data=!3m7!1e1!3m5!1spe8W5fT1VqQI3BqGZ7UlKg!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3Dpe8W5fT1VqQI3BqGZ7UlKg%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D164.25346%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x8085873aae7b3861:0x8c9597718745c9fd!8m2!3d37.7883089!4d-122.4585998'
    },
    {
      name: '1244 2nd Ave., Oakland',
      url: 'https://www.google.com/maps/place/1244+2nd+Ave,+Oakland,+CA+94606/@37.7978436,-122.2564938,3a,75y,142.71h,90t/data=!3m7!1e1!3m5!1s0YRhIHnWLS98vyPQKTTztw!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3D0YRhIHnWLS98vyPQKTTztw%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D142.70828%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x808f8730d07dc3ad:0x7e3cc167dd4cfc9!8m2!3d37.797686!4d-122.256343'
    },
    {
      name: '43130 Mayfair Park Ave., Fremont',
      url: 'https://www.google.com/maps/place/43130+Mayfair+Park+Ave,+Fremont,+CA+94538/@37.5140751,-121.9639691,3a,75y,80.73h,90t/data=!3m7!1e1!3m5!1spzjbbftm2cy-KsT0Pzf6NQ!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3Dpzjbbftm2cy-KsT0Pzf6NQ%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D80.7265%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x808fc73bf7faffe9:0x9ec629545c69ce98!8m2!3d37.5141123!4d-121.9637065'
    },
    {
      name: '456 Otsego Ave., San Francisco',
      url: 'https://www.google.com/maps/place/456+Otsego+Ave,+San+Francisco,+CA+94112/@37.7220619,-122.4418773,3a,75y,275.9h,90t/data=!3m6!1e1!3m4!1smAF9FG-zks2nn7Hb67oLlg!2e0!7i16384!8i8192!4m5!3m4!1s0x808f7e83e3cde163:0x6c44395c117dc510!8m2!3d37.7220517!4d-122.4420129'
    },
    {
      name: '1286 Guerrero St., San Francisco',
      url: 'https://www.google.com/maps/place/1286+Guerrero+St,+San+Francisco,+CA+94110/@37.7507025,-122.4228081,3a,75y,271.58h,90t/data=!3m7!1e1!3m5!1s2AuL72eSU_Snh6wjwux1uQ!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3D2AuL72eSU_Snh6wjwux1uQ%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D271.57983%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x808f7e403dee5f43:0x1a2f7cf2c8e4020e!8m2!3d37.7506899!4d-122.4231228'
    },
    {
      name: '3639 20th St., San Francisco',
      url: 'https://www.google.com/maps/place/3639+20th+St,+San+Francisco,+CA+94110/@37.7584457,-122.4221887,3a,75y,172.21h,90t/data=!3m7!1e1!3m5!1s9KrVawTb3NOINBLSqHoulQ!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3D9KrVawTb3NOINBLSqHoulQ%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D172.21129%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x808f7e3db88efb41:0x97303bcca5548261!8m2!3d37.758202!4d-122.422158'
    },
    {
      name: '970 Bay St., San Francisco',
      url: 'https://www.google.com/maps/place/970+Bay+St,+San+Francisco,+CA+94109/@37.8044549,-122.4231458,3a,75y,358.96h,90t/data=!3m7!1e1!3m5!1sSHXjNR_x0xYXlfqM_5ncGg!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DSHXjNR_x0xYXlfqM_5ncGg%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D358.9586%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x808580e0b166b37f:0xa18bcb277c2ab0c4!8m2!3d37.8046271!4d-122.4231357'
    },
    {
      name: '2536 Fillmore St., San Francisco',
      url: 'https://www.google.com/maps/place/2536+Fillmore+St,+San+Francisco,+CA+94115/@37.793023,-122.4346756,3a,75y,72.86h,90t/data=!3m7!1e1!3m5!1sLJ75VAMFeAGWFp2ysalxvA!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3DLJ75VAMFeAGWFp2ysalxvA%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D72.85555%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x808580c590b709fd:0x8832cb2a74f83c7e!8m2!3d37.7930517!4d-122.4344926'
    },
    {
      name: '1595 Thomas Ave., San Francisco',
      url: 'https://www.google.com/maps/place/1595+Thomas+Ave,+San+Francisco,+CA+94124/@37.7303419,-122.3911097,3a,75y,225.49h,90t/data=!3m7!1e1!3m5!1s3Mt2jilDkfJtVVQT343iKA!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3D3Mt2jilDkfJtVVQT343iKA%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D225.4904%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x808f7f1a6649528d:0x94cba723a4c8fce0!8m2!3d37.730192!4d-122.3913247'
    },
    {
      name: '2630 Mission St., San Francisco',
      url: 'https://www.google.com/maps/place/2630+Mission+St,+San+Francisco,+CA+94110/@37.754983,-122.4187357,3a,75y,263.45h,90t/data=!3m7!1e1!3m5!1s5I2YcmMMAHBdavfh9k8zcg!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3D5I2YcmMMAHBdavfh9k8zcg%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D263.45068%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x808f7e3f3068cdd7:0x91834210df4225e5!8m2!3d37.7549782!4d-122.4188757'
    },
    {
      name: '543 Dolores St., San Francisco',
      url: 'https://www.google.com/maps/place/543+Dolores+St,+San+Francisco,+CA+94110/@37.760775,-122.4259536,3a,75y,91.24h,90t/data=!3m7!1e1!3m5!1sUza42V0mMIUB95mzhuiqVA!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DUza42V0mMIUB95mzhuiqVA%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D91.24043%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x808f7e18204503c3:0xd8c98186b3d0a9c4!8m2!3d37.760769!4d-122.425613'
    },
    {
      name: '1341 7th Ave., San Francisco',
      url: 'https://www.google.com/maps/place/1341+7th+Ave,+San+Francisco,+CA+94122/@37.7633633,-122.4641077,3a,75y,274.08h,90t/data=!3m7!1e1!3m5!1stzEWCsVvnK3o3e1pog4rlA!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DtzEWCsVvnK3o3e1pog4rlA%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D274.0817%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x8085875c04a6443d:0xddc6a43e309107e!8m2!3d37.7633645!4d-122.4644377'
    },
    {
      name: '3219 Kingsland Ave., Oakland',
      url: 'https://www.google.com/maps/place/3219+Kingsland+Ave,+Oakland,+CA+94619/@37.7822898,-122.1926871,3a,75y,326.53h,90t/data=!3m7!1e1!3m5!1s0Pe0XPQZvXCTt-j6WD0uwg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3D0Pe0XPQZvXCTt-j6WD0uwg%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D326.5312%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x808f8615c8bc4829:0xed2e7eb82838c9f4!8m2!3d37.7824313!4d-122.1927635'
    },
    {
      name: '2327 Santa Lucia Ave., San Bruno',
      url: 'https://www.google.com/maps/place/2327+Santa+Lucia+Ave,+San+Bruno,+CA+94066/@37.6104309,-122.4156669,3a,75y,90t/data=!3m7!1e1!3m5!1s_hU7nTymj7tfL19KGsWV8Q!2e0!6s%2F%2Fgeo1.ggpht.com%2Fmaps%2Fphotothumb%2Ffd%2Fv1%3Fbpb%3DChAKDnNlYXJjaC5UQUNUSUxFEmYKOAkDBLF-b3ePgBF6W_a3421IFhokCxDThbhCGhsSGQoUChIJAwSxfm93j4ARgGd-5OUPIRkQlxIMEgoNYuZqFhWG2gi3GhIJJTaJYnp3j4AR7430bA48fvcqCg1i5moWFYbaCLcaBQh4EOgC%26gl%3DUS!7i16384!8i8192!4m5!3m4!1s0x808f776f7eb10403:0x16486de3b7f65b7a!8m2!3d37.6104546!4d-122.4156538'
    },
    {
      name: '158 Santa Barbara Ave., Daly City',
      url: 'https://www.google.com/maps/place/158+Santa+Barbara+Ave,+Daly+City,+CA+94014/@37.707119,-122.4645639,3a,90y,265.18h,86.87t/data=!3m7!1e1!3m5!1s9v1cE1Fu8h-ahRsonSbtfA!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3D9v1cE1Fu8h-ahRsonSbtfA%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D255.44292%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x808f7c396bd4b43f:0x8a85ae476afb00d!8m2!3d37.7070552!4d-122.4647862'
    },
    {
      name: 'Alcatraz Ave., Berkeley',
      url: 'https://www.google.com/maps/place/Alcatraz+Ave,+Berkeley,+CA/@37.8492662,-122.2676917,3a,75y,90t/data=!3m7!1e1!3m5!1sKBEvYwuivkn-AIBHKyGT5w!2e0!6s%2F%2Fgeo1.ggpht.com%2Fmaps%2Fphotothumb%2Ffd%2Fv1%3Fbpb%3DChAKDnNlYXJjaC5UQUNUSUxFElkKSwm56BtXeH6FgBFbsPxirq5A9Ro3CxDThbhCGi4qLAoUChIJuegbV3h-hYARW7D8Yq6uQPUSFAoSCdNJhTo2eYWAEZPpdaaVFeqUDCoKDQAAAAAVAAAAABoFCHgQ6AI%26gl%3DUS!7i16384!8i8192!4m5!3m4!1s0x80857e78571be8b9:0xf540aeae62fcb05b!8m2!3d37.8490643!4d-122.2690795'
    },
    {
      name: '3040 Telegraph Ave., Berkeley',
      url: 'https://www.google.com/maps/place/3040+Telegraph+Ave,+Berkeley,+CA+94705/@37.8545112,-122.2599946,3a,75y,283.87h,90t/data=!3m7!1e1!3m5!1sOwEmQm6hDPhBVTKjaO_D4Q!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DOwEmQm6hDPhBVTKjaO_D4Q%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D283.87247%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x80857dd404826f83:0xaf0957879f4e9a18!8m2!3d37.8545762!4d-122.2602709'
    },
    {
      name: '1740 Washington St., San Francisco',
      url: 'https://www.google.com/maps/place/1740+Washington+St,+San+Francisco,+CA+94109/@37.793201,-122.421949,3a,75y,347.13h,90t/data=!3m7!1e1!3m5!1s7ytH2wyzKxebJHUeOO4Oig!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3D7ytH2wyzKxebJHUeOO4Oig%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D360%26h%3D120%26yaw%3D347.12817%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x808580ea450f7af7:0x7bd49b99212d03c9!8m2!3d37.7934292!4d-122.4220167'
    }
  ]
}
