import { provideRouter, RouterConfig } from '@angular/router';

import { HeroComponent, HERO_ROUTES } from './hero';

export const APP_ROUTES: RouterConfig = [
  { path: '', redirectTo: 'hero', terminal: true },
  { path: 'hero',
    component: HeroComponent,
    children: [
      ...HERO_ROUTES
    ]
   }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];
