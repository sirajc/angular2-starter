import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroComponent} from './hero/hero';

@Component({
  selector: 'my-app',
  template: `
    <h1><img src="images/angular-logo.png" class="ng2-logo" > {{title}}</h1>
    <a [router-link]="['/Hero', 'List']">Marvel Heroes</a>
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
    redirectTo: '/hero'
  },
  {
    path: '/hero/...',
    name: 'Hero',
    component: HeroComponent
  }
])
export class AppComponent {
  public title = 'Tour of Heroes';
}
