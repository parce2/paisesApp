import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const dashboardRoute: Routes = [
  {
    path: 'Dashboard',
    component: HomeComponent,
    data: { title: ' Home' },
    children: [
      { path: '', loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule) },
    ]
  }
]