"use strict";
var hero_component_1 = require('./hero.component');
var hero_detail_1 = require('./hero-detail');
var hero_list_1 = require('./hero-list');
exports.HERO_ROUTES = [
    {
        path: 'hero',
        component: hero_component_1.HeroComponent,
        children: [
            { path: '', component: hero_list_1.HeroListComponent },
            { path: 'detail', component: hero_detail_1.HeroDetail }
        ]
    }
];
exports.HERO_COMPONENTS = [
    hero_component_1.HeroComponent,
    hero_list_1.HeroListComponent,
    hero_detail_1.HeroDetail
];

//# sourceMappingURL=hero.routes.js.map
