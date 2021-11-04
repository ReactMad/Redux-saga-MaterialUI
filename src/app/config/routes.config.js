import React from 'react';
import loadable from '@loadable/component';
import authRoles from './authRoles';
import RenderRoutes from '../utils/RouteUtils';

const routes = [
    {
        path: '/',
        key: 'ROOT',
        auth: authRoles.onlyGuest,
        layout: 'Layout1', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../main/Home/Home'), {
            fallback: <div>Loading Home Page</div>
        })
    },
    {
        path: '/about',
        key: 'ABOUT_PAGE',
        auth: authRoles.onlyGuest,
        layout: 'Layout1',
        exact: false,
        component: loadable(() => import('./../main/About/About'))
    },
    {
        path: '/resume',
        key: 'RESUME_PAGE',
        auth: authRoles.onlyGuest,
        layout: 'Layout1',
        exact: false,
        component: loadable(() => import('./../main/Resume/Resume'))
    },
    {
        path: '/portfolio',
        key: 'PORTFOLIO_PAGE',
        auth: authRoles.onlyGuest,
        layout: 'Layout1',
        exact: false,
        component: loadable(() => import('./../main/Portfolio/Portfolio'))
    },
    {
        path: '/blog',
        key: 'BLOG_PAGE',
        auth: authRoles.onlyGuest,
        layout: 'Layout1',
        exact: false,
        component: loadable(() => import('./../main/Blog/Blog'))
    },
    {
        path: '/contact',
        key: 'CONTACT_PAGE',
        auth: authRoles.onlyGuest,
        layout: 'Layout1',
        exact: false,
        component: loadable(() => import('./../main/Contact/Contact'))
    },
    {
        path: '/team',
        key: 'TEAM_PAGE',
        auth: authRoles.onlyGuest,
        layout: 'Layout1',
        component: RenderRoutes,
        routes: [
            {
                path: '/team',
                key: 'TEAM_HOME',
                auth: authRoles.onlyGuest,
                layout: 'Layout1',
                exact: true,
                component: loadable(() => import('./../main/Team/Team'), {
                    fallback: <div>Team Page is loading</div>
                })
            },
            {
                path: '/team/:id',
                key: 'TEAM_MEMBER',
                auth: authRoles.onlyGuest,
                layout: 'Layout1',
                component: (props) => <div>asdfasd<RenderRoutes {...props}/></div>,
                routes: [
                    {
                        path: '/team/:id',
                        key: 'TEAM_MEMBER',
                        auth: authRoles.onlyGuest,
                        layout: 'NoLayout',
                        exact: true,
                        component: loadable(() => import('./../main/Team/TeamMember'), {
                            fallback: <div>Team Member is loading</div>
                        }),
                    },
                    {
                        path: '/team/:id/show',
                        key: 'TEAM_MEMBER_SHOW',
                        auth: authRoles.onlyGuest,
                        exact: false,
                        component: () => <div>THere</div>
                    },
                    {
                        path: '/team/:id/detail',
                        key: 'TEAM_MEMBER_DETAIL',
                        auth: authRoles.onlyGuest,
                        exact: false,
                        component: () => <div>Detail</div>
                    }
                ]
            }
        ]
    },
    
];

export default routes;
