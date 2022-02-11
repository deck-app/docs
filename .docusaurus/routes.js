
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','5f6'),
    routes: [
      {
        path: '/docs/creating-project',
        component: ComponentCreator('/docs/creating-project','d88'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/installation/linux',
        component: ComponentCreator('/docs/installation/linux','c08'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/installation/macos',
        component: ComponentCreator('/docs/installation/macos','b35'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/installation/windows',
        component: ComponentCreator('/docs/installation/windows','c5b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/project-log',
        component: ComponentCreator('/docs/project-log','9b1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/project-shell',
        component: ComponentCreator('/docs/project-shell','513'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
