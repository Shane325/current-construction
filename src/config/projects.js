'use strict';

/*
 * Module dependencies
 */

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
            name: 'Fremont Project',
            subtext: 'Fremont, California',
            categories: 'project-structural',
            portfolioImg: {
                src: '../images/projects/project-one_1-320x240.jpg',
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
                    src: '../images/projects/project-one_1-320x240.jpg',
                    alt: 'Fremont project img 1'
                },
                {
                    src: '../images/projects/project-one_2-320x240.jpg',
                    alt: 'Fremont project img 2'
                }
            ]
        },
        {
            id: 2,
            name: 'Washington Street',
            subtext: 'San Francisco, California',
            categories: 'project-structural',
            portfolioImg: {
                src: 'http://via.placeholder.com/320x240',
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
                    src: 'http://via.placeholder.com/1140x755',
                    alt: 'Wash img 1'
                },
                {
                    src: 'http://via.placeholder.com/1140x755',
                    alt: 'Wash img 2'
                }
            ]
        },
        {
            id: 3,
            name: 'Bay Street',
            subtext: 'San Francisco, California',
            categories: 'project-structural',
            portfolioImg: {
                src: 'http://via.placeholder.com/320x240',
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
                    src: 'http://via.placeholder.com/1140x755',
                    alt: 'Bay img 1'
                },
                {
                    src: 'http://via.placeholder.com/1140x755',
                    alt: 'Bay img 2'
                }
            ]
        }
    ]
};
