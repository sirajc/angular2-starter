import { Route } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroDetail } from './hero-detail';
import { HeroListComponent } from './hero-list';

export const HERO_ROUTES: Route[] = [
  {
    path: 'hero',
    component: HeroComponent,
    children: [
      { path: '', component: HeroListComponent },
      { path: 'detail', component: HeroDetail }
    ]
  }
];

export const HERO_COMPONENTS = [
  HeroComponent,
  HeroListComponent,
  HeroDetail
];
