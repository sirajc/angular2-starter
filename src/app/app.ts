import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
    <h1><img src="images/angular-logo.png" class="ng2-logo" > {{title}}</h1>
    <a [routerLink]="['hero']">Marvel Heroes</a>
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
export class AppComponent {
  public title = 'Tour of Heroes';
}
