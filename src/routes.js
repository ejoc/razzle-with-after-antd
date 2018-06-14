import React from 'react'
import Home from './Home'
import About from './About'

import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    // component: asyncComponent({
    //   loader: () => import('./Home'), // required
    //   Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    // }),
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
  },
];
