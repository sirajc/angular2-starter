import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1><img src="images/angular-logo.png" class="ng2-logo" > {{title}}</h1>
    <a [routerLink]="['hero']">Marvel Heroes</a>
    <br>
    <router-outlet></router-outlet>


    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>Angular 2 RC5 and Router v3-rc.1</h3>
  `,
  styles: [`
    .ng2-logo {
      height: 26px;
      margin-bottom: -2px;
    }
  `]
})
export class AppComponent {
  public title = 'Angular2 Starter';
}
