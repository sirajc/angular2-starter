import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HERO_ROUTES, HERO_COMPONENTS } from './hero.routes';

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(HERO_ROUTES) ],
  declarations: [ HERO_COMPONENTS ]
})
export class HeroModule{}
