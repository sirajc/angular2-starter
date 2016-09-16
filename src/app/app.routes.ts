import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: '**', redirectTo: 'hero', pathMatch: 'full' }
];
