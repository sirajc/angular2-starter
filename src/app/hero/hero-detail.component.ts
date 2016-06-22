import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {Hero} from './hero.model';
import {HEROES} from './heroes.const';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero/hero-detail.component.html',
  styles: [`
    .hero-detail {
      font-size: 120%;
      font-weight: 700;
    }
  `],
  inputs: ['hero'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeroDetail {
  public hero: Hero;
  private id: number;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.id = Number(_activatedRoute.snapshot.params["id"]);
    if(this.id) {
      this.hero = this._getHero(this.id);
    }
  }

  private _getHero(id: number) : Hero {
    var hero : Hero;
    HEROES.forEach(element => {
      if(element.id === id) {
        hero = element;
      }
    });
    return hero;
  }

}