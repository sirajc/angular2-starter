import { RouterConfig } from '@angular/router';
import { HeroDetail, Heroes } from './hero';

export const HERO_ROUTES: RouterConfig = [
  { path: '', component: Heroes },
  { path: 'detail', component: HeroDetail }
]
