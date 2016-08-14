import { provideRouter, RouterConfig } from '@angular/router';

import { HeroComponent, HERO_ROUTES } from './hero';

export const APP_ROUTES: RouterConfig = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero',
    component: HeroComponent,
    children: [
      ...HERO_ROUTES
    ]
  },
  { path: '**', redirectTo: 'hero', pathMatch: 'full' }
];
