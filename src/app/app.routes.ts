import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { HomePage } from './features/home/pages/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
        {
            path: '',
            component: HomePage,
        },
    ],
  },
];