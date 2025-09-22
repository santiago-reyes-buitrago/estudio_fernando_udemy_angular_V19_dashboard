import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard'),
    children: [
      {
        title: 'Change Detection',
        path: 'change-detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection'),
      },
      {
        title: 'Control Flow',
        path: 'control-flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow')
      },
      {
        title: 'Defer Views',
        path: 'defer-views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views')
      },
      {
        title: 'Defer Options',
        path: 'defer-options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options'),
      },
      {
        title: 'User List',
        path: 'user-list',
        loadComponent: () => import('./dashboard/pages/user/user'),
      },
      {
        title: 'View Transition - 1',
        path: 'view-transition1',
        loadComponent: () => import('./dashboard/pages/view-transitions/view-transitions1'),
      },
      {
        title: 'View Transition - 2',
        path: 'view-transition2',
        loadComponent: () => import('./dashboard/pages/view-transitions/view-transitions2'),
      },
      {
        path: '**', redirectTo: 'change-detection', pathMatch: 'full'
      }
    ]
  },{
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];
