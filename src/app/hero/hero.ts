import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroDetail } from './hero-detail.component';
import { Heroes } from './heroes.component';

export { Hero } from './hero.model';
export { Heroes } from './heroes.component';
export { HeroDetail } from './hero-detail.component';
export { HEROES } from './heroes.const';

@Component({
  selector:'hero-component',
  template: `
    <h2>Marvel Heroes</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class HeroComponent {

}
