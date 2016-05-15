import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Hero} from './hero.model.ts';
import {HeroDetail} from './hero-detail.component';
import {HEROES} from './heroes.const';

@Component({
  selector: 'heroes',
  templateUrl: 'app/hero/heroes.component.html',
  styleUrls: ['app/hero/heroes.component.css'],
  directives: [HeroDetail, ROUTER_DIRECTIVES]
})
export class Heroes {
  public heroes = HEROES;
  public selectedHero: Hero = undefined;

  public onSelect(hero: Hero){
    this.selectedHero = hero;
  }
  public getSelectedClass(hero: Hero) {
    return {'selected': hero === this.selectedHero}
  }
}