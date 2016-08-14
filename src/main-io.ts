import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './app';

platformBrowserDynamic().bootstrapModule(AppModule, {
  compilerOptions: {
    providers: [
      { provide: APP_BASE_HREF, useValue: '/angular2-bs4-navbar' }
    ]
  }
});
