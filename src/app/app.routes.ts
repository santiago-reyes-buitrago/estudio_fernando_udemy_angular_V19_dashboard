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
        path: '**', redirectTo: 'change-detection', pathMatch: 'full'
      }
    ]
  },{
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];
