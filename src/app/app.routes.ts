import { provideRouter, RouterConfig } from '@angular/router';

export const APP_ROUTES: RouterConfig = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: '**', redirectTo: 'hero', pathMatch: 'full' }
];
