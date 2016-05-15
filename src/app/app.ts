import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HeroComponent} from './hero/hero';

@Component({
  selector: 'my-app',
  template: `
    <h1><img src="images/angular-logo.png" class="ng2-logo" > {{title}}</h1>
    <a [routerLink]="['/Hero', 'List']">Marvel Heroes</a>
    <br>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .ng2-logo {
      height: 26px;
      margin-bottom: -2px;
    }
  `],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/',
    redirectTo: ['/Hero', 'List']
  },
  {
    path: '/hero/...',
    name: 'Hero',
    component: HeroComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  public title = 'Tour of Heroes';
}
